import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export const channelImageURL = async (channelId) => {
  try {
    // const { data } = await axios.get("/data/channel.json");
    // return data?.items[0].snippet.thumbnails.default.url || [];

    const { data } = await httpClient.get("channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    return data?.items[0].snippet.thumbnails.default.url || [];
  } catch (err) {
    const { message } = err;
    throw new Error(`Error in fetchApi: ${message}`);
  }
};

export const fetchApiRelated = async (channelId) => {
  try {
    // const { data } = await axios.get("/data/trending.json");
    // return data?.items || [];
    const { data } = await httpClient.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        relatedToVideoID: channelId,
      },
    });
    return data?.items || [];
  } catch (err) {
    const { message } = err;
    throw new Error(`Error in fetchApi: ${message}`);
  }
};

export const fetchApi = async (isKeyword) => {
  try {
    // if (isKeyword === undefined) {
    //   const { data } = await axios.get("data/trending.json");
    //   return data?.items || [];
    // } else {
    //   const { data } = await axios.get("data/keyword.json");
    //   return (
    //     data?.items.map((item) => ({ ...item, id: item.id.videoId })) || []
    //   );
    // }

    if (isKeyword === undefined) {
      const { data } = await httpClient.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      });
      return data?.items || [];
    } else {
      const { data } = await httpClient.get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: isKeyword,
        },
      });
      return (
        data?.items.map((item) => ({ ...item, id: item.id.videoId })) || []
      );
    }
  } catch (err) {
    const { message } = err;
    throw new Error(`Error in fetchApi: ${message}`);
  }
};

// const { data } = await httpClient.get("videos", {
//   params: {
//     part: "snippet",
//     chart: "mostPopular",
//     maxResults: 25,
//   },
// });
// return data?.items || [];

// const response = await axios.get("data/trending.json").then((res) => {
//   return res.data.items;
// });
// return response;
