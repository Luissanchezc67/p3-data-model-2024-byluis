import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const result = await prisma.pacient.create({
    data:{
        pacient: "Andy Josue",
        address: "la sagrera",
        phonenum: "623673823",
        DNIPass: "4523782K",
        edad: "24",
        gender:"varon",
        record:"alergic aines"

    }
})

console.log("You created pacient:", result);