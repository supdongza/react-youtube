import { useQuery } from "@tanstack/react-query";
import { channelImageURL } from "../api/fetch";

const useApiVideo = (channelId) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["channelId", channelId],
    queryFn: () => channelImageURL(channelId),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, data };
};

export default useApiVideo;
