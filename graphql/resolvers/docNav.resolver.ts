interface GithubListType {
    name: string,
    path: string
}

export const docNavTreeListResolver = async (path: string): Promise<GithubListType[]> => {
  const response = await fetch(
    `https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/src/graphql/${path?.split("/")[2]}`,
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

export const docNavListResolver = async (): Promise<GithubListType[]> => {
  const response = await fetch(
    `https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/src/graphql`,
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
