import { Post, Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiCommentAlt } from "react-icons/tfi";
interface Props {
  blogPost: Post;
}

const Card = ({ blogPost }: Props) => {
  return (
    <div className=" mb-6 last:mb-0 lg:mb-0 flex flex-col gap-2 group  justify-center items-center  ">
      <Image
        src={`${blogPost.imageUrl}.jpg`}
        alt={blogPost.title}
        className={"rounded-md drop-shadow transition group-hover:scale-105"}
        width={400}
        height={300}
      />
      <h6 className="text-lg text-slate-800">{blogPost.title}</h6>
      <p className="text-slate-500 text-center">{blogPost.viewCount}</p>
      <a className="block mb-4" href="http://">
        <img className="w-auto mb-4 inline" src="images/post2.jpg" alt=""></img>
        <h2 className="text-2xl font-bold">Título del post número dos</h2>
      </a>
      <div className="footer-article flex w-full">
        <a href="http://">
          <TfiCommentAlt /> 58
        </a>
        <a href="http://">
          <i className="fas fa-comments"></i> 11
        </a>
        <a href="http://">
          <i className="fas fa-eye"></i> 120
        </a>
      </div>
      <Link href={`/post/${blogPost.slug}`} className={"text-slate-500 hover:text-sky-500 flex"}>
        <span>See More</span>
      </Link>
    </div>
  );
};

export default Card;