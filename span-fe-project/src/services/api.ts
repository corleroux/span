import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Basic } from "unsplash-js/dist/methods/topics/types";
import { PaginationParams } from "unsplash-js/dist/types/request";

const apiUrl: string = "https://qe9a25jdui.execute-api.eu-west-1.amazonaws.com/test/api";

export const getUnsplashApi = (apiUrl: string) =>
  createApi({
    apiUrl: apiUrl,
    mode: "cors",
  });

const browserApi = getUnsplashApi(apiUrl);

export const getTopicList = async () => {
  const options = { page: 2 };
  const api = getUnsplashApi(apiUrl).topics.list(options);
  // const topics = await api.topics.list({ page: 2 });
  // const topic = topics.response?.results;
  // return topics.response?.results;
  const onSuccess = (
    value: ApiResponse<{ results: Basic[]; total: number }>
  ): Basic[] | PromiseLike<Basic[] | undefined> | undefined => {
    console.debug("Request Successfull", value);
    return value.response?.results;
  };
  return api.then(onSuccess);
};

export const getTopicPhotos = async ({
  topicIdOrSlug,
  page = 1,
  perPage = 10,
}: { topicIdOrSlug: string } & PaginationParams) => {
  const api = getUnsplashApi(apiUrl);
  const photos = await api.topics.getPhotos({ topicIdOrSlug, page: page, perPage: perPage });

  return photos;
};
