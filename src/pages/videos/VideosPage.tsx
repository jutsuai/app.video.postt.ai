import React from "react";
import Navbar from "../home/Navbar";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
];

export default function VideosPage() {
  return (
    <section className="flex flex-col w-full gap-4">
      <Navbar />
      <div className="container mx-auto px-4 flex flex-col gap-4 pb-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold ">My Videos</h1>
          <Link to={"/videos/create"}>
            <Button>Generate Video</Button>
          </Link>
        </div>
        <div className="grid grid-cols-7 gap-4 mt-4">
          {images.map((image, index) => (
            <Link to={`/video/${index}`} key={index}>
              <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
