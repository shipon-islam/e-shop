import { PrismaClient } from "@prisma/client";

export const fetchProduct = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMongoProduct = async () => {
  try {
    const prisma = new PrismaClient();
    const products = await prisma.products.findMany();
    return products;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
export const fetchProductById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const products = await prisma.products.findFirst({
      where: {
        id: id,
      },
    });
    return products;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
