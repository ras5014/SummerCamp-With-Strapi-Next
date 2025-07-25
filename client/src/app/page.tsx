import { fetchApi } from "@/utils/fetch-api";

export default async function Home() {
  const { data } = await fetchApi("/api/home-page", "GET", {});
  const { title, description } = data.attributes;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
