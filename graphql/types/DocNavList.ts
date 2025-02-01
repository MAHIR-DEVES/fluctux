import { extendType, objectType } from "nexus";
import {
  docNavListResolver,
  docNavTreeListResolver,
} from "../resolvers/docNav.resolver";

const DocNavTreeItem = objectType({
  name: "DocNavTreeItem",
  definition(t) {
    t.string("name", { description: "Tree list item name" });
    t.string("path", { description: "Tree list item path" });
  },
});

export const DocNavItem = objectType({
  name: "DocNavItem",
  definition(t) {
    t.string("name", { description: "List item name" });
    t.string("path", { description: "List item path" });
    t.list.field("docNavTreeList", {
      type: DocNavTreeItem,
      async resolve(root) {
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
      async resolve() {
        return await docNavListResolver();
      },
    });
  },
});
