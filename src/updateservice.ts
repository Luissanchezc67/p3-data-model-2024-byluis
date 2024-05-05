import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const service = await prisma.services.update({
    where: {serviceId: 3 },
    data: { 
        price:"$120",
        }
  });

  console.log ("Service has been updated:", service);
  