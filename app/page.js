import { redirect } from "next/navigation";

export const metadata = {
  title: "Homepage",
  description: "Entertainment Web App ",
};

export default function Home() {
  redirect("/login");

  return <div>deneme</div>;
}
