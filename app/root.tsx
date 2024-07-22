import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links, LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";


export const meta: MetaFunction = () =>{
  return [
    {charset: "utf-8"},
    {title: "Calculator"},
    {viewport: "width=device-width,initial-scale=1"}
  ];
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

