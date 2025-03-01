interface GithubListType {
  name: string;
  path: string;
  type: string;
}

export const docNavTreeListResolver = async (
  path: string
): Promise<GithubListType[]> => {
  const response = await fetch(
    // Actual URL format: "https://api.github.com/repos/gitmahin/fluctux/contents/src/content/docs/user/01-get-started/01-introduction.mdx"
    `${process.env.GH_AUTH_DOC_API}/${path?.split("/")[3]}/${path?.split("/")[4]}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.length
    ? data.map((item: GithubListType) => ({
        name: item.name,
        path: item.path,
        type: item.type,
      }))
    : [];
};

export const docNavListResolver = async (
  docType: string
): Promise<GithubListType[]> => {
  const response = await fetch(
     // Actual URL format: "https://api.github.com/repos/gitmahin/fluctux/contents/src/content/docs/user"
    `${process.env.GH_AUTH_DOC_API}/${docType}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.length
    ? data.map((item: GithubListType) => ({
        name: item.name,
        path: item.path,
        type: item.type,
      }))
    : [];
};
