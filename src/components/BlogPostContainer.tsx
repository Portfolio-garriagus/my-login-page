import { Post } from "@prisma/client";
import React from "react";
import Card from "./Cardos";

export interface Props {
  blogPosts: Post[];
}

const BlogPostContainer = ({ blogPosts }: Props) => {
  return (
    <div className="mt-10 md:flex justify-center">
      <div className="max-w-full flex-row justify-center mb-8 md:mr-2">

        <div className="text-center bg-white shadow-md mb-4">
         
        </div>      
      </div>
      <div className="max-w-full h-full flex relative overflow-y-hidden">
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
      <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">    

        {blogPosts.map((post) => (
                  
            <Card key={post.id} item={post} />
          
          ))}     
        </div>
      </div>
      </div>
      <section>
        <div className="popular-posts text-center  bg-white border-gray-300 mb-4 pb-4 md:w-64 shadow-md">
          <div>
            <h3 className="font-bold text-2xl text-gray-900 border-b-2 border-gray-100 p-2 mb-2">Más leídos</h3>
          </div>
          <div>
            <ul>
              <li>
                <a href="http://">Título del post 1</a>
              </li>
              <li>
                <a href="http://">Título del post 2</a>
              </li>
              <li>
                <a href="http://">Título del post 3</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostContainer;