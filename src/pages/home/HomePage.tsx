import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
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

export default function HomePage() {
  const columnCount = 7;

  const gap = 16;
  const columns: any = Array.from({ length: columnCount }, () => []);

  for (let i = 0; i < images.length; i++) {
    columns[i % columnCount].push(images[i]);
  }
  return (
    <section className="h-dvh relative flex flex-col  mx-auto items-center w-full px-4 overflow-hidden">
      <Navbar />
      <div className="absolute top-[25%] right-0 left-0">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h1 className="text-6xl my-auto z-50 leading-tight font-bold text-center ">
            Create videos at <br />
            <span className="text-primary text-5xl">the speed of thought.</span>
          </h1>
          <Button className="">Get Stated</Button>
        </div>
        <div
          className="w-full min-w-7xl z-0 -mt-24 px-4 grid grid-cols-7"
          style={{
            gap: `${gap}px`,
          }}
        >
          {columns.map((rows: any, index: number) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: `${gap}px`,
                marginTop: `${
                  index === 0 || index === 6
                    ? 0
                    : index === 1 || index === 5
                    ? 8
                    : index === 2 || index === 4
                    ? 14
                    : 20
                }rem`,
              }}
            >
              {rows.map((image: any, index: number) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  className={cn("w-full h-auto z-0 rounded-lg")}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-t from-white via-transparent to-transparent  absolute bottom-0 left-0 right-0 h-[50%]" />
    </section>
  );
}
