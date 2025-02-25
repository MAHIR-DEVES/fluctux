import { apolloClient } from '@/lib/apollo-client';
import React from 'react'
import { DocNavListType } from '@/components/core/docs';
import DocContent from '@/components/core/docs/doc-content';
import { gql } from '@apollo/client';

const GET_DOC_NAV_LIST = gql`
  query GetDocNavList($docType: String) {
    docNavList(docType: $docType) {
      name,
      path,
      type,
      docNavTreeList {
        name,
        type,
        path
      }
    }
  }
`

export async function generateStaticParams() {
  try {

    const docTypes = ['user', 'developer'];

    const params = await Promise.all(
      docTypes.map(async (type) => {
        try {
          const { data } = await apolloClient.query<{ docNavList: DocNavListType[] }>({
            query: GET_DOC_NAV_LIST,
            variables: { docType: type },
          });

          const extractSlug = (fullPath: string, isDir: boolean) => {
            const parts = fullPath.split('/');
            return isDir
              ? parts.slice(-2).map((part) => part.replace('.mdx', '')) // Get last two segments for directories
              : [parts.at(-1)?.replace('.mdx', '')]; // Get only the last segment for files
          };

          return data.docNavList.flatMap((item) => [
            ...(item.type !== "dir"
              ? [{ docType: type, slug: extractSlug(item.path, false) }]
              : []),
            ...(item.docNavTreeList?.map((treeItem) => ({
              docType: type,
              slug: extractSlug(treeItem.path, true),
            })) || []),
          ]);
        } catch (error) {
          console.error(`GraphQL fetch error for docType "${type}":`, error);
          throw new Error("GraphQL fetch error"); // stop building
        }
      })
    );

    // algolia indexing objects algorithm
    // TODO: Uncomment this logic; otherwise, the docs won't be indexed in Algolia.
    // try {
    //   const arrayOfData = params.flat().map((item) => ({

    //     label: item.slug.at(-1)?.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()).toString() || "",
    //     slug: `${item.docType}/${item.slug.join("/").toString()}` || "",
    //     type: item.docType.toString() || ""

    //   }))

    //   await algolia.indexDocNavLists(arrayOfData)
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {
    //   throw new Error("Error indexing data to Algolia")
    // }

    return params.flat();
  } catch (error) {
    console.error("Error generating static pages:", error);
    throw new Error("Error generating static pages"); // stop building
  }
}

export default async function DocContentPage({
  params
}: { params: Promise<{ slug: string[], doctype: string }> }) {

  const { slug, doctype } = await params

  const fullSlug = slug.join("/")

  // debugging the results
  generateStaticParams().then((params) => {
    console.log(params);
  });

  try {
    const response = await fetch(
      `${process.env.GITHUB_RAW_CONTENT_API}/src/content/docs/${doctype}/${fullSlug}.mdx`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }
      }
    );

    const textData = await response.text(); // Use .text() for plain text like README

    return <DocContent data={textData} />
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Something went wrong")
  }

}