import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <Link to="/">
        <h2>Remix Blog</h2>
      </Link>
      <ul>
        <li>
          <Link to="posts/new" className="cursor-pointer hover:underline">
            Create New Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
