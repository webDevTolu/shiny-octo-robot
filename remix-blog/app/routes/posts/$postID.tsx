import { ActionArgs, redirect, LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const post = await db.post.findUnique({
    where: { id: params.postID },
  });

  if (!post) throw new Error("Post not found");
  const data = { post };
  return data;
};

export const action = async ({ request, params }: ActionArgs) => {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    const post = await db.post.findUnique({
      where: { id: params.postID },
    });

    if (!post) throw new Error("Post not found");

    await db.post.delete({
      where: { id: params.postID },
    });

    return redirect(`/`);
  }
};

const PostDetail = () => {
  const { post } = useLoaderData<typeof loader>();
  return (
    <div>
      <Link to="/"> Back</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div>
        <Form method="post">
          <div>
            <input type="hidden" name="_method" value="delete" />
            <button>Delete</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostDetail;
