import Image from 'next/image'
import BlogPostContainer from "@/components/BlogPostContainer";
import Form from "@/components/form";
import { getPublishedPosts } from "@/lib/getData";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";




export default async function Home() {
  const posts = await getPublishedPosts();

  return (
    <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
      <div className="flex justify-center">
        <h1 className="m-2 text-center text-2xl font-bold capitalize bg-gradient-to-r from-red-600 to-purple-500 inline bg-clip-text text-transparent">
          Crear un Nuevo Post
        </h1>
      </div>    
      {posts.map((post) => (
        <Form blogPost={post}></Form>
      ))}
    </main>
  );
}