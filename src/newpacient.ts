import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const pacient = await prisma.pacient.createMany({
  data: [{ 
    pacient: "Luis Armas",
    address: " Exaimple",
    phonenum: "625789128",
    DNIPass: "Y6789028K",
    edad: "28",
    gender: "men",
    record: "alergic aines",}, 
  {
    pacient: "Andy Josue",
    address: "la sagrera",
    phonenum: "623673823",
    DNIPass: "4523782K",
    edad: "24",
    gender:"varon",
    record:"alergic aines"}],
});
