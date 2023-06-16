import Image from 'next/image'
import BlogPostContainer from "@/components/BlogPostContainer";
import { getPublishedPosts } from "@/lib/getData";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await getPublishedPosts();
  let users = await prisma.user.findMany();
  return (
    <main>
      <div className="flex justify-center">
        <h1 className="m-2 text-center text-2xl font-bold capitalize bg-gradient-to-r from-red-600 to-purple-500 inline bg-clip-text text-transparent">
          Bienvenido al Blog de Agustín          
        </h1>
      </div>    
      {posts.map((post) => (
          <div
            key={post.title}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >           
            <h3>{post.content}</h3>
          </div>
        ))}
      <BlogPostContainer blogPosts={posts} />
    </main>
  );
}