import { prisma } from "../../config/prisma.js";

export const createUser = async (data) => {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            passwordHash: data.passwordHash,
        }
    })
}

export const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        state: true,
      },
    });
  };