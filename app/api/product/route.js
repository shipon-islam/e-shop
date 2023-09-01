import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (res) => {
  try {
    const prisma = new PrismaClient();
    const resData = await prisma.products.create({
      data: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        discountprice: 10,
        desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        images: [
          {
            public_id: "10",
            url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          },
          {
            public_id: "11",
            url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          },
          {
            public_id: "11",
            url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          },
        ],
        features: [
          "very soft and handy",
          "very soft and handy",
          "very soft and handy",
        ],
        rating: {
          rate: 3.9,
          count: 1,
        },
      },
    });
    return NextResponse.json({ message: "product added" });
  } catch (error) {
    console.log(error);
    return;
  }
};
