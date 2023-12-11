import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../api/fetch";

const useApiTrending = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["trending"],
    queryFn: () => fetchApi(),
    staleTime: 1000 * 60 * 5,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, data };
};

export default useApiTrending;
