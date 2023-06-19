import { GetStaticProps } from "next";
import { prisma }  from "./prisma";
// POSTS
export async function getUserByEmail(email: string) {
  const data = await prisma.user.findUnique({    
    where:{ email: email},
    include: {
      posts: true,
    },
  });
  return data;
}