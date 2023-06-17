import BlogPostContainer from "@/components/BlogPostContainer";
import { Metadata } from "next";
import React from "react";
import { getPostFromSlug } from "@/lib/getData";
import { Post } from '@prisma/client';
import { GetStaticPaths, GetStaticProps } from 'next';

interface postByIdProps {
  params: {
    slug: string[]
    title: string[]
    content: string[]
  }
}

export default async function PostDetail({ params }: postByIdProps) {
  const slug = getStaticProps(params) //gets post's ID
  const posts = await getPostFromSlug("java");
  console.log("Post here,", posts)
  return (
    <>
      <div>
        <BlogPostContainer blogPosts={posts} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slugs[0] //gets post's slug
  const post = getPostFromSlug(slug)
  return {
    post
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}
