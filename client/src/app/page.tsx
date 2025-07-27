import { getHomePageData } from "@/data/loader";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePageData();
  if (!data) notFound();
  return { ...data.data };
}
export default async function Home() {
  const data = await loader();
  const { title, description } = data.attributes || {};

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
