import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';

type CustomContext = {
    Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string,
	}
};

export const blogRouter = new Hono<CustomContext>();

blogRouter.use('/*', async(c, next) => {
    const authHeader = c.req.header("Authorization");
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        c.status(403)
        return c.json({
            msg: "invalid request!"
        });
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = await verify(token, c.env.JWT_SECRET);
        next();
    }
    catch (err){
        c.status(403)
        return c.json({ msg: "un-authenticated user" });
    }
})

blogRouter.post('/', (c) => {
    return c.text("create blog")
})

blogRouter.put('/', (c) => {
    return c.text('update blog')
})

blogRouter.get('/:id', (c) => {
    const id = c.req.param('id');
    console.log(id);
    return c.text('view blog')
})

blogRouter.get('/bulk', (c) => {
    return c.text("bulk")
})