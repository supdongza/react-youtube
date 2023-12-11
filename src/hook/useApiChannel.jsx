import { useQuery } from "@tanstack/react-query";
import { channelImageURL } from "../api/fetch";

const useApiVideo = (channelId) => {
  const fetchVideo = channelImageURL(channelId);

  return useQuery({
    queryKey: ["channelId", channelId],
    queryFn: () => fetchVideo,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useApiVideo;
