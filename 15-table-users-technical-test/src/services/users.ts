export const fetchData = async (page: number) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=5&seed=foobar`
  );
  if (!response.ok) throw new Error('Failed to fetch data');

  const data = await response.json();
  const currentPage = Number(data.info.page);
  const nextPage = currentPage > 2 ? undefined : currentPage + 1;

  return {
    data: data.results,
    nextPage
  };
};

export const deleteUser = async (id: string) => {
  await console.log('delete user', id);
  return id;
};
