import { liteClient as algoliasearch } from "algoliasearch/lite";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API } from "../common.helper";

export const searchAlgolia = algoliasearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || ""
);