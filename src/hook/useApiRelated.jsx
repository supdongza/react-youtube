import { useQuery } from "@tanstack/react-query";
import { fetchApiRelated } from "../api/fetch";

const useApiRelated = (channelId) => {
  const fetchRelated = fetchApiRelated(channelId);

  return useQuery({
    queryKey: ["related", channelId],
    queryFn: () => fetchRelated,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useApiRelated;
