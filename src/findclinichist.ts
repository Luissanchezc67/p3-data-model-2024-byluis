import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

try {
  const clinichist = await prisma.clinicHistory.findUnique({
    where: { clinichistId: 1 },
    include :{
        pacient: true,
        service:true,
        doctor: true
    }
  });

  if (clinichist) {
    console.log(
      `showing History Clinic of pacient ${clinichist.pacient.pacient}, 
      date: ${clinichist.date}, Doctor: ${clinichist.doctor.firstname} ${clinichist.doctor.lastname}
      services: ${clinichist.service.service}`
    );
  } else {
    console.log("Pacient not found.");
  }
} catch (error) {
  console.error("Error for pacient", error);
} finally {
  await prisma.$disconnect();
}
