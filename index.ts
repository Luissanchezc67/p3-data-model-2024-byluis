import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const result = await prisma.pacient.create({
  data: {
    /*pacient: "Andy Josue",
        address: "la sagrera",
        phonenum: "623673823",
        DNIPass: "4523782K",
        edad: "24",
        gender:"varon",
        record:"alergic aines"
        */
    pacient: "Martha Vargas",
    address: "Nou barris",
    phonenum: "633871278",
    DNIPass: "223002737",
    edad: "64",
    gender: "Women",
    record: "alergic ibuprofeno",
  }
});

console.log("You created pacient:", result);

const result1 = await prisma.services.create({
  data: {
    service: "ALERGOLOGÍA",
    description:
      "Mediante pruebas cutáneas y una amplia batería de test sanguíneos, nuestros profesionales son capaces de diagnosticar hipersensibilidad a cualquier alimento o fármaco. Actualmente, gracias a las vacunas hipoalergénicas y a sofisticadas técnicas de desensibilización entre otros tratamientos, la mayoría de alergias de nuestros pacientes remiten en un corto período de tiempo.",
    price: "$50",

    /*service: "ginecologia y obtetricia",
    description:
      "Nuestras instalaciones cuentan con varias salas de registro, tres salas de parto convencional instrumentado, una sala para parto respetado y dos quirófanos específicos para cesáreas programadas y urgentes, todos ellos equipados con la última tecnología.",
    price: "$50" */
  }
});

console.log("You created service:", result1);

const result2 = await prisma.doctor.create({
    data: {
        firstname: "Jose",
        lastname:"Rodriguez",
        phone: "623234234",
        specialty:"ginecologia"
  
      /*
        firstname: "Raul",
        lastname:"Salazar",
        phone: "678239102",
        specialty:"alergologia"
        */
    }
  });
  
  console.log("You created a doctor:", result2);