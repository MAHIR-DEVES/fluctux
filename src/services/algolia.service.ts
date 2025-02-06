import { writeAlgolia } from "@/helpers/algolia/write.helper";
import { DOC_INDEX_NAME } from "./constant";

interface IndexDocNavListsType extends Record<string, string> {
  label: string;
  slug: string;
  type: string;
}

class Algolia {
  async indexDocNavLists(data: IndexDocNavListsType[]) {
    const indexExists = await writeAlgolia.indexExists({
      indexName: DOC_INDEX_NAME,
    });

    if (indexExists) {
      await writeAlgolia.deleteIndex({ indexName: DOC_INDEX_NAME });
    }

    if (data) {
      await writeAlgolia.saveObjects({
        indexName: DOC_INDEX_NAME,
        objects: data,
      });

      await writeAlgolia.setSettings({
        indexName: DOC_INDEX_NAME,
        indexSettings: {
          searchableAttributes: ["label", "slug"],
          attributesForFaceting: ["type"],
        },
      });
    }
  }
}

const algolia = new Algolia();
export default algolia;
