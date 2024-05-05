import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const pacient = await prisma.pacient.update({
    where: {pacientId: 2 },
    data: { 
        edad: "27",
        gender: "men",
        record: "alergic clorefenamina"},
  });

  console.log ("Pacient has been updated:", {pacient});
  