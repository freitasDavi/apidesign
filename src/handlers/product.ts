
import { Request, Response } from "express";
import prisma from "../db";

// Get all products
export const getProducts = async (request: Request, response: Response): Promise<Response> => {
    const user = await prisma.user.findUnique({
        where: {
            id: request.user.id
        },
        include: {
            products: true
        }
    });

    return response.json({ data: user });
}

export const getProduct = async (request: Request, response: Response): Promise<Response> => {
    const id = request.params.id;

    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: request.user.id
        }
    })

    return response.json({ data: product }); 
}