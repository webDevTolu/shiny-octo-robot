import { ActionArgs, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

type Props = {};

export async function action({ request }: ActionArgs) {
  const enteredFormValues = await request.formData();
  const values = Object.fromEntries(enteredFormValues);

  // TODO: submit to database

  return redirect("/posts");
}

const NewPost = (props: Props) => {
  return (
    <div>
      <h3>Create a new post</h3>
      <Link to="/posts">Back</Link>
      <br />

      <Form method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body"></textarea>
        </div>
        <button type="submit">Create</button>
      </Form>
    </div>
  );
};

export default NewPost;
