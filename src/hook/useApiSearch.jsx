import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../api/fetch";

const useApiSearch = (keyword) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["keyword", keyword],
    queryFn: () => fetchApi(keyword),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, data };
};

export default useApiSearch;

// fetch("data/keyword.json")
// .then((res) => res.json())
// .then((data) => data.items)
// .then((items) =>
//   items.map((item) => ({ ...item, id: item.id.videoId }))
// ),
