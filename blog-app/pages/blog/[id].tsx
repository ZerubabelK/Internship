import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "..";
import { useState } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default function BlogId({ post }: { post: Post }) {
  const [editing, setEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [body, setBody] = useState<string>(post.body);
  const handleEdit = async () => {
    try {
      const res = await fetch(`/api/edit_blog`, {
        method: "PUT",
        body: JSON.stringify({
          id: post.id,
          title,
          body,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        setEditing(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-xl my-5"></div>
        <div className="flex justify-between">
          {editing ? (
            <input
              type="text"
              name="title"
              className="border rounded text-3xl px-3 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
          )}
          <button
            className="text-blue-300 flex h-full text-md items-center"
            onClick={() => setEditing(!editing)}
          >
            Edit
          </button>
        </div>
        <div className="bg-white rounded-lg py-6">
          <p className="text-gray-600 mb-4">
            Published on: {new Date().toLocaleDateString()}{" "}
            <span id="publish-date"></span>
          </p>
          {editing ? (
            <textarea
              name="body"
              className="border rounded text-lg px-3 py-2 w-full h-40"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          ) : (
            <p id="blog-content">{body}</p>
          )}
          {editing && (
            <div>
              <button
                className="bg-sky-500 px-4 py-1 text-white rounded w-max"
                onClick={handleEdit}
              >
                SAVE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
