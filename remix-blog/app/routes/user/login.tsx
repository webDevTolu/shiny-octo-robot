import { Form } from "@remix-run/react";
import Input from "~/components/Form/Input";

const Login = () => {
  return (
    <div className="flex flex-col gap-8 items-start">
      <h2 className="text-2xl font-bold text-slate-800">Welcome back! Login</h2>
      <div className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto">
        <Form method="post" className="w-full">
          <div className="flex flex-col gap-4">
            <Input type="text" label="username" />
            <Input type="password" label="password" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
