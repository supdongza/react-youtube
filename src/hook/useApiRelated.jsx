import { useQuery } from "@tanstack/react-query";
import { fetchApiRelated } from "../api/fetch";

const useApiRelated = (channelId) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["related", channelId],
    queryFn: () => fetchApiRelated(channelId),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, data };
};

export default useApiRelated;
