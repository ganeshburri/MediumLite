import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import hashPassword from '../utils/hashpassword';
import { sign } from 'hono/jwt';

type CustomContext = {
    Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string,
	}
};

export const userRouter = new Hono<CustomContext>();

userRouter.post('/signup', async(c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: await hashPassword(body.password)
            }
        })
        const jwtToken = await sign({userId: user.id}, c.env.JWT_SECRET)
        return c.json({ jwt: jwtToken })
    }
    catch(e) {
        return c.status(403)
    }
})

userRouter.post('/signin', async(c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: await hashPassword(body.password)
            }
        });
        if (!user) {
        c.status(403);
        return c.json({ error: "User not found!" });
        }
        const jwtToken = await sign({ userId: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt: jwtToken });
    }
    catch(e) {
        return c.status(403)
    }
})