import { Request, Response } from "express";
import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (request: Request, response: Response): Promise<Response> => {
    const user = await prisma.user.create({
        data: {
            username: request.body.username,
            password: await hashPassword(request.body.password),
        }
    });
 
    console.log(user);

    const token = createJWT(user);
    return response.json({ token });
}

export const signIn = async (request: Request, response: Response): Promise<Response> => {
    const user = await prisma.user.findUnique({
        where: {
            username: request.body.username
        }
    });

    if (!user) {
        response.status(401);
        return response.json({
            message: "user not found"
        });
    }

    const isValid = await comparePasswords(request.body.password, user.password);

    if (!isValid) {
        response.status(401)
        return response.json({
            message: 'user or password invalid'
        });
    }

    const token = createJWT(user);
    response.json({ token });
}