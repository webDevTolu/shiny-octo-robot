import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "This is a test post." },
      { id: 2, title: "Post 2", body: "This is a test post." },
      { id: 3, title: "Post 3", body: "This is a test post." },
      { id: 4, title: "Post 4", body: "This is a test post." },
    ],
  };

  return data;
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>This is the posts routes that contains all posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {posts.length === 0 && <h3>No posts found</h3>}
    </div>
  );
}
