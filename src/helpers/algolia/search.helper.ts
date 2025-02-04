import { liteClient as algoliasearch } from "algoliasearch/lite";
import { ALGOLIA_APPLICATION_ID } from "./constant";

const ALGOLIA_SEARCH_API = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API;

export const searchAlgolia = algoliasearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || ""
);