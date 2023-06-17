import { prisma }  from "./prisma";
import { GetStaticPaths, GetStaticProps } from 'next';
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

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};
// USERS
