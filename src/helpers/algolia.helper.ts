import { algoliasearch as algoliaWrite } from "algoliasearch";
import { liteClient as algoliaSearch } from "algoliasearch/lite";

const ALGOLIA_APPLICATION_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID;
const ALGOLIA_SEARCH_API = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API;

export const searchAlgolia = algoliaSearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || ""
);

export const writeAlgolia = algoliaWrite(
  ALGOLIA_APPLICATION_ID || "",
  process.env.ALGOLIA_WRITE_API || ""
);
