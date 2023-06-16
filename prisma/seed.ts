
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@admin.com",  
      role: "USER",  
      posts: {
        create: {
          title: "Primer Posteo de Java",
          content: "Mis proyectos con Java & Spring Boot",
          slug: "java",
          imageUrl: "/java", 
          description : "java",
          published: true,  
        },
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });


