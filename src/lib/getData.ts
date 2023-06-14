import { prisma }  from "./prisma";

export async function getAllPosts() {
  return await prisma.post.findMany();
}


