import { ActionArgs, redirect, json } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { db } from "~/utils/db.server";

interface FormValues {
  title: string;
  body: string;
}

const validateTitle = (title: string) => {
  if (typeof title !== "string") {
    return "Title must be a string";
  } else if (title.trim().length < 3) {
    return "Title should be at least 3 characters long";
  } else {
    return undefined;
  }
};
const validateBody = (body: string) => {
  if (typeof body !== "string") {
    return "Body must be a string";
  } else if (body.trim().length < 10) {
    return "Body should be at least 10 characters long";
  } else {
    return undefined;
  }
};

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const title = (form.get("title") as string) ?? "";
  const body = (form.get("body") as string) ?? "";
  const values: FormValues = { title, body };

  const fieldErrors = {
    title: validateTitle(title),
    body: validateBody(body),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    console.log({ fieldErrors });
    return json({ fieldErrors, values }, { status: 400 });
  }

  // TODO: submit to database
  const post = await db.post.create({ data: values });

  return redirect(`/posts/${post.id}`);
}

const NewPost = () => {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h3>Create a new post</h3>
      <Link to="/">Back</Link>
      <br />

      <Form method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <span className="text-sm font-medium text-red-500">
            {actionData?.fieldErrors?.title && actionData.fieldErrors.title}
          </span>
        </div>
        <br />
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body"></textarea>
          <span>
            {actionData?.fieldErrors?.body && actionData.fieldErrors.body}
          </span>
        </div>
        <button type="submit">Create</button>
      </Form>
    </div>
  );
};

export default NewPost;
