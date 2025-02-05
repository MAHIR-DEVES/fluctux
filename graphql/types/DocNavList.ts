import { extendType, objectType, stringArg } from "nexus";
import {
  docNavListResolver,
  docNavTreeListResolver,
} from "../resolvers/doc.resolver";

// Extracts name, path, and type from the GitHub query response.

const DocNavTreeItem = objectType({
  name: "DocNavTreeItem",
  definition(t) {
    t.string("name", { description: "Tree list item name" });
    t.string("path", { description: "Tree list item path" });
    t.string("type", { description: "Tree list item type" });
  },
});

export const DocNavItem = objectType({
  name: "DocNavItem",
  definition(t) {
    t.string("name", { description: "List item name" });
    t.string("path", { description: "List item path" });
    t.string("type", { description: "List item type" });
    t.list.field("docNavTreeList", {
      type: DocNavTreeItem,
      async resolve(root) {
        /**
         * Retrieve data from the root
         * The root object containing the path.
         */
        return await docNavTreeListResolver(`${root.path}`);
      },
    });
  },
});

export const DocNavListQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("docNavList", {
      type: "DocNavItem",
      args: {
        docType: stringArg(),
      },
      async resolve(_, args: { docType?: string | null }) {
        /**
         * Resolves the document navigation list based on the provided document type.
         * If no document type is provided, it defaults to "user".
         *
         * Unused parameter, typically represents the root object in a resolver.
         * args - An object containing the arguments for the resolver.
         * args.docType - An optional string representing the type of document to resolve.
         *                If null or undefined, defaults to "user".
         */
        const docType = args.docType ?? "user";
        return await docNavListResolver(docType);
      },
    });
  },
});
