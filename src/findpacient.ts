import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

try {
  const pacient = await prisma.pacient.findUnique({
    where: { pacientId: 1 },
  });

  if (pacient) {
    console.log(
      `showing dates of pacient ${pacient.pacient}, ${pacient.address}, ${pacient.phonenum}, ${pacient.DNIPass}`
    );
  } else {
    console.log("Pacient not found.");
  }
} catch (error) {
  console.error("Error for pacient", error);
} finally {
  await prisma.$disconnect();
}
