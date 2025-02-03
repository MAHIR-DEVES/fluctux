interface GithubListType {
  name: string;
  path: string;
  type: string;
}

export const docNavTreeListResolver = async (
  path: string
): Promise<GithubListType[]> => {
  const response = await fetch(
    `${process.env.GITHUB_AUTH_DOC_API}/${path?.split("/")[3]}/${path?.split("/")[4]}`,
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
        type: item.type,
      }))
    : [];
};

export const docNavListResolver = async (
  docType: string
): Promise<GithubListType[]> => {
  const response = await fetch(`${process.env.GITHUB_AUTH_DOC_API}/${docType}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data.length ? data.map((item: GithubListType) => ({
    name: item.name,
    path: item.path,
    type: item.type,
  })): [];
};
