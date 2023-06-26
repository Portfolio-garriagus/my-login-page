import { Post } from "@prisma/client";
import React from "react";
import Image from 'next/image'
import Card from "./Card";
import HelloWorld from "@/content/primer-posteo-de-java.mdx";

export interface Props {
  blogPosts: Post[];
}

const BlogPostContainer = ({ blogPosts }: Props) => {
  return (
    <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div className="mx-0 sm:mx-6">
        <div className="flex flex-wrap justify-between pt-12 -mx-6">
       <h1>{}</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContainer;