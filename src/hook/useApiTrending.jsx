import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../api/fetch";

const useApiTrending = () => {
  const fetchTrending = fetchApi();

  return useQuery({
    queryKey: ["trending"],
    queryFn: () => fetchTrending,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useApiTrending;
