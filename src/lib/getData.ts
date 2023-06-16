import { prisma }  from "./prisma";

export async function getAllPosts() {
  return await prisma.post.findMany();
}

export async function getPublishedPosts() {
  return await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  }); 
};
