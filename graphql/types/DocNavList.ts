import { extendType, objectType } from "nexus";

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
        const response = await fetch(
          `https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/src/graphql/${root.path?.split("/")[2]}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        return data.map((item: { name: string; path: string }) => ({
          name: item.name,
          path: item.path,
        }));
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
        const response = await fetch(
          `https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/src/graphql`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        return data.map((item: { name: string; path: string }) => ({
          name: item.name,
          path: item.path,
        }));
      },
    });
  },
});
