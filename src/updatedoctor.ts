import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const doctor = await prisma.doctor.update({
    where: {doctorId: 3 },
    data: { 
        firstname: "Luisa",
        lastname: "Merino",
        phone: "623890773",
        specialty: "geriatria"
        }
  });

  console.log ("Service has been updated:", doctor);