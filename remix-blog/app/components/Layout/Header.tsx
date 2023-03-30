import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Remix Blog</h2>
      </Link>
      <ul>
        <li>
          <Link to="posts/new">Create New Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
