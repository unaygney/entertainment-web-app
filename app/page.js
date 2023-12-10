import { useRouter } from "next/navigation";

export const metadata = {
  title: "Homepage",
  description: "Entertainment Web App",
};

export default function Home() {
  const router = useRouter();
  router.push("/login");

  return <div>deneme</div>;
}
