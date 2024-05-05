import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const doctor = await prisma.doctor.create({
    data: { 
        firstname: "Rosa",
        lastname: "Merino",
        phone: "634778223",
        specialty: "geriatria"
    }

  });

  console.log("You created service:",doctor);
  