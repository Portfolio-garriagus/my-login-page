import { Metadata } from "next";
import React from "react";

import { getPublishedPosts } from "@/lib/getData";

type Params = {
    params: {
      slug: string;
    };
  };
  

export const metadata: Metadata = {
  title: {
    absolute: "About Page",
  },
  description: "This is the about",
};

const AboutPage = () => {
  return <div className="p-10">Este es mi blog.</div>;
};

export default AboutPage;