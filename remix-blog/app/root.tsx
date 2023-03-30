import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Layout/Header";
import { ReactNode } from "react";
import styles from "~/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "A cool blog built with Remix Framework",
  keywords: "blog, remix, react, javascript, full-stack, fullStack, FullStack",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <Document title="Remix Home Page">
      <Outlet />
    </Document>
  );
}

type DocumentProps = {
  children: ReactNode;
  title?: string;
};

function Document({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title ? title : "My Remix Blog"}</title>
        <Links />
      </head>
      <body className="w-full p-2">
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const ErrorBoundary = ({ error }: any) => {
  return (
    <Document title="Error">
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    </Document>
  );
};
