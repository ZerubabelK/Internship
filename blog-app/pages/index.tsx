import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export interface Post {
  id: number;
  title: string;
  body: string;
  publishedDate: string;
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 py-5 ${inter.className}`}
    >
      <div className="max-w-screen-lg">
        <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-xl "></div>
        <div className="flex justify-between my-5">
          <h1 className="text-2xl font-bold">Blogs</h1>
          <Link
            href="/blog/new"
            className="bg-sky-500 px-3 py-1 text-white rounded"
          >
            Create
          </Link>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-3">
            {posts.map((post: Post) => (
              <li key={post.id} className=" shadow rounded-lg">
                <div className="relative">
                  <Image
                    src="/blog-img.jpeg"
                    alt="Post Image"
                    width={150}
                    height={150}
                    className="rounded-t-lg w-full"
                  />

                  <Link
                    href={`/blog/${post.id}`}
                    className="absolute top-0 right-0 border px-2 py-px m-2 rounded bg-blue-500 text-white hover:scale-110 ease-in-out"
                  >
                    View
                  </Link>
                </div>
                <div className="flex flex-col p-2">
                  <h2 className="font-bold text-xl text-left">{post.title}</h2>
                  <p>Published on: {new Date().toLocaleDateString()} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
