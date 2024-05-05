import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const service = await prisma.services.create({
    data: { 
        service: "pedriatia",
        description:
      "Nuestras instalaciones cuentan con varias salas de registro, tres salas de parto convencional instrumentado, una sala para parto respetado y dos quirófanos específicos para cesáreas programadas y urgentes, todos ellos equipados con la última tecnología.",
        price: "$79"  },

  });

  console.log("You created service:",service);
  