import Image from 'next/image'
import BlogPostContainer from "@/components/BlogPostContainer";
import { getAllPosts } from "@/lib/getData";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await getAllPosts();
  let users = await prisma.user.findMany();
  return (
    <main>
      <div className="flex justify-center">
        <h1 className="m-2 text-center text-2xl font-bold capitalize bg-gradient-to-r from-red-600 to-purple-500 inline bg-clip-text text-transparent">
          Bienvenido al Blog de Agustín          
        </h1>
      </div>    
      {users.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt='asd'
              style={{ height: 180, width: 180 }}
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      <BlogPostContainer blogPosts={posts} />
    </main>
  );
}