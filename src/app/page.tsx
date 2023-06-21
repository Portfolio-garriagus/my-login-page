import Image from 'next/image'
import BlogPostContainer from "@/components/BlogPostContainer";
import Form from "@/components/form";
import { getPublishedPosts } from "@/lib/getData";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import SideBar from "@/components/Sidebar";

export default async function Home() {
  const posts = await getPublishedPosts();

  return (
    <main className="max-w-full h-full flex relative overflow-y-hidden">
      <SideBar />
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      </div>
    </main>
  );
}