import { prisma } from "./prisma";
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

export async function getPostFromId(id: string) {
  return await prisma.post.findMany({
    where: { id: id },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
};

// USERS
// index.tsx
export async function updatePost(id: string, title: any, content: any, slug: any, imageUrl: any, description: any
  ) {
  return await prisma.post.upsert({
    where: { id: id },
    update: {},
    create: {
      title: title,
      content: content,
      slug: slug,
      imageUrl: imageUrl, 
      description : description,
      published: true,         
      },
  })
};
