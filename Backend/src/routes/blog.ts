import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';

type CustomContext = {
    Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string,
	},
    Variables : {
		userId: string
	}
};

export const blogRouter = new Hono<CustomContext>();

blogRouter.use('/*', async(c, next) => {
    const authHeader = c.req.header("authorization") || "";
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        c.status(403)
        return c.json({
            msg: "invalid request!"
        });
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = await verify(token, c.env.JWT_SECRET);
        c.set("userId", decoded.userId as string)
        await next();
    }
    catch (err){
        c.status(403)
        return c.json({ msg: "un-authenticated user" });
    }
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId")

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId //comes from auth middleware
            }
        })
        return c.json({id: blog.id})
    }
    catch(e) {
        console.error(e)
        return c.json({ error: "Something went wrong!" }, 500);
    }
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({id: blog.id})
    }
    catch(e) {
        return c.json({ error: "Something went wrong!" }, 500);
    }
})

//todo: add pagination
blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.blog.findMany({});
        return c.json({ blogs })
    }
    catch(e) {
        return c.json({ error: "Something went wrong!" }, 500)
    }
})

blogRouter.get('/:id', async(c) => {
    const id = c.req.param('id');
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id
            }
        })
        return c.json({ blog })
    }
    catch(e) {
        return c.json({ error: "Something went wrong!" }, 500)
    }
})