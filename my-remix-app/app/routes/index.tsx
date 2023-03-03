import { Tooltip, Button } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <h1 className="text-2xl text-red-700 font-bold">Welcome to Remix</h1>
      <Tooltip content="Flowbite is awesome">
        <Button>Hover to find out</Button>
      </Tooltip>
    </div>
  );
}
