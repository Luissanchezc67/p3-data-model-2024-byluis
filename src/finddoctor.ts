import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

try {
  const doctor = await prisma.doctor.findUnique({
    where: { doctorId: 1 },
  });

  if (doctor) {
    console.log(
      `showing dates of Doctor ${doctor.firstname} ${doctor.lastname}, specialty: ${doctor.specialty}, phone: ${doctor.phone}`
    );
  } else {
    console.log("Doctor not found.");
  }
} catch (error) {
  console.error("Error for doctor", error);
} finally {
  await prisma.$disconnect();
}
