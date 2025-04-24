import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Cover from "~/components/Cover";
import Banner from "~/components/Banner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Banner />
    </>
  );
}
