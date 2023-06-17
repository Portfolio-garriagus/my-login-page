import { prisma }  from "./prisma";

// POSTS
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

// USERS
