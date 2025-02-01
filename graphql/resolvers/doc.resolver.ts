interface GithubListType {
  name?: string;
  path?: string;
}

export const docNavTreeListResolver = async (
  path: string
): Promise<GithubListType[]> => {
  const response = await fetch(
    `https://api.github.com/repos/gitmahin/fluctux/contents/src/content/docs/${path?.split("/")[3]}/${path?.split("/")[4]}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.length
    ? data.map((item: GithubListType) => ({
        name: item.name,
        path: item.path,
      }))
    : [];
};

export const docNavListResolver = async (
  docType: string
): Promise<GithubListType[]> => {
  const response = await fetch(
    `https://api.github.com/repos/gitmahin/fluctux/contents/src/content/docs/${docType}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.map((item: GithubListType) => ({
    name: item.name,
    path: item.path,
  }));
};
