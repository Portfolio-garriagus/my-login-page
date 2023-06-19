import { GetStaticProps } from "next";
import { prisma }  from "./prisma";
// POSTS
export async function getAllPosts() {
  const data = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
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

export async function getPostFromSlug(slug: string) {
  return await prisma.post.findMany({
    where:{ slug: String(slug) },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
};

// USERS
// index.tsx

