import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <Link to="/">
        <h2>Remix Blog</h2>
      </Link>
      <ul className="flex gap-2 items-center">
        <NavLink to="posts/new" title="Create New Post" />
        <NavLink to="user/login" title="Login" />
      </ul>
    </nav>
  );
};

export default Header;

interface NavLinkProps {
  to: string;
  title: string;
}

const NavLink = ({ to, title }: NavLinkProps) => {
  return (
    <li>
      <Link to={to} className="cursor-pointer hover:underline">
        {title}
      </Link>
    </li>
  );
};
