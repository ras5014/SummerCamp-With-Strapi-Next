export {};

declare global {
  type NextFetchRequestConfig = {
    revalidate?: number | false;
    tags?: string[];
  };

  interface FetchAPIOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    authToken?: string;
    body?: Record<string, unknown>;
    next?: NextFetchRequestConfig;
  }
}
