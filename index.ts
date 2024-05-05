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
        /*
         pacient: "Ariana Sanchez",
         address: "Nou barris",
         phonenum: "633871278",
         DNIPass: "Y7881993E",
         edad: "29",
         gender: "Women",
         record: "alergic paracetamol"
        */
    }
})

console.log("You created pacient:", result);