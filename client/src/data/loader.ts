const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";
import { fetchAPI } from "@/utils/fetch-api";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            cta: true,
          },
        },
        "blocks.info-block": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
      },
    },
  },
});

export async function getHomePageData() {
  const path = "/api/home-page";
  const url = new URL(path, STRAPI_BASE_URL);
  url.search = homePageQuery;
  return fetchAPI(url.href, { method: "GET" });
}
