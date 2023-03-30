import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
  };

  return data;
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900">
        This is the posts routes that contains all posts
      </h1>
      <ul className="flex flex-col gap-2 divide-y">
        {posts.map((post) => (
          <li key={post.id} className="p-2">
            <Link to={`posts/${post.id}`}>
              <h3 className="text-lg font-semibold capitalize">{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {posts.length === 0 && <h3>No posts found</h3>}
    </div>
  );
}
