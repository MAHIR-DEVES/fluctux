import { writeAlgolia } from "@/helpers/algolia.helper";

interface IndexDocNavListsType {
  [key: string]: unknown; // Add this line
  // other properties...
}

export const DOC_INDEX_NAME = "docs_index";

class Algolia {
  async indexDocNavLists(data: IndexDocNavListsType) {
   

    const indexExists = await writeAlgolia.indexExists({
      indexName: DOC_INDEX_NAME,
    });

    if (indexExists) {
      await writeAlgolia.deleteIndex({ indexName: DOC_INDEX_NAME });
    }

    if (data) {
      await writeAlgolia.saveObjects({
        indexName: DOC_INDEX_NAME,
        objects: [data],
      });

      await writeAlgolia.setSettings({
        indexName: DOC_INDEX_NAME,
        indexSettings: {
          searchableAttributes: ["label", "slug"],
        },
      });
    }
  }
}

const algolia = new Algolia();
export default algolia;
