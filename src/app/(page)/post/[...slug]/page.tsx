import BlogPostContainer from "@/components/BlogPostContainer";
import React from "react";
import { getPostFromSlug } from "@/lib/getData";
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image";
import Link from "next/link";

import { TfiCommentAlt, TfiHeart, TfiEye } from "react-icons/tfi";
interface PostProps {
  params: {
    slug: string[]
    title: string[]
  }
}
async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = getPostFromSlug(slug)
  if (!post) {
    null
  }  
  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const slug = params?.slug?.join("/")
  const post = getPostFromParams(params)
  if (!post) {
    return {}
  }
  return {
    title: slug,
    description: slug,
  }
}
{/*
export async function generateStaticParams(): Promise<PostProps["params"][]> {
  const post = getPostFromSlug(params)
  return post((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}
*/}

export default async function PostPage({ params }: PostProps) {
  const slug = params?.slug?.join("/")
  const post = await getPostFromParams(params);
  if (!post) {
    notFound()
  }
  return (
    <div className="py-6 prose dark:prose-invert">
      {post && (
        <div className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          <div className="max-w-full flex-row justify-center mb-8 md:mr-2">
            <div className="text-center bg-white shadow-md mb-4">
              {post.map((post) => (
               <div className="mb-6 last:mb-0 lg:mb-0 flex flex-col gap-2 group  justify-center items-center">
               <Image
                 className="mb-4 inline rounded-md drop-shadow transition group-hover:scale-105"
                 src={`${post.imageUrl}.jpg`}
                 alt={post.title}
                 width={400}
                 height={300}
               />
               <h6 className="text-lg text-slate-800 text-2xl font-bold">{post.title}</h6>
               <div className="text-slate-500 text-center">{post.content}</div>
               <div className="text-lg text-slate-800 text-2xl font-bold">#{post.description}</div>
               <div className="text-lg text-slate-800 text-2xl font-bold">#{post.description}</div>
               <div className="footer-article flex w-full justify-center items-center">
                 <Link href={`/post/${post.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
                   <TfiHeart className="text-slate-500 hover:text-sky-500 w-6 h-6 flex-shrink-0" />
                   <span className="ml-1">58</span>
                 </Link>
                 <Link href={`/post/${post.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
                   <TfiCommentAlt className="text-slate-500 hover:text-sky-500 w-6 h-6 flex-shrink-0" />
                   <span className="ml-1">58</span>
                 </Link>
                 <Link href={`/post/${post.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
                   <TfiEye className="text-slate-500 hover:text-sky-500 w-6 h-6 flex-shrink-0" />
                   <span className="ml-1">58</span>
                 </Link>
               </div>
               <Link href={`/post/${post.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center transition-all duration-300 ease-in-out transform hover:scale-105">
                 <span className="text-base">See More</span>
               </Link>         
             </div>
              ))}
            </div>
          </div>
          <h1>Este es un posteo completo Slug</h1>
        </div>
      )}
      <hr className="my-4" />
    </div>
  )
}

