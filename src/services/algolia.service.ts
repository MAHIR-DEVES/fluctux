import { writeAlgolia } from "@/helpers/algolia.helper";

interface IndexDocNavListsType {
  [key: string]: unknown; // Add this line
  // other properties...
};

class Algolia {
  async indexDocNavLists(data: IndexDocNavListsType[]) {
    return await writeAlgolia.saveObjects({
      indexName: "docs_index",
      objects: data,
    });
  }
}

const algolia = new Algolia();
export default algolia;
