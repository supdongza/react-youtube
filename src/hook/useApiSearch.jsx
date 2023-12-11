import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../api/fetch";

const useApiSearch = (keyword) => {
  const fetchSearch = fetchApi(keyword);

  return useQuery({
    queryKey: ["keyword", keyword],
    queryFn: () => fetchSearch,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useApiSearch;

// fetch("data/keyword.json")
// .then((res) => res.json())
// .then((data) => data.items)
// .then((items) =>
//   items.map((item) => ({ ...item, id: item.id.videoId }))
// ),
