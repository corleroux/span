import { createApi } from "unsplash-js";
import { config } from "dotenv";
import fetch from "node-fetch";
import AWS from "aws-sdk";

AWS.config.logger = console;

const UNSPLASH_API_URL = "https://api.unsplash.com/";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESSKEY,
  accessKey: "g9wC9Q2jNBwldDHiZegskCGcERyFLGRLf1uLOnXoxIA",
  fetch: fetch,
});

const toqs = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");

const handler = async (event) => {
  // if (event.httpMethod === "OPTIONS") {
  //   return { statusCode: 204, body: null };
  // }

  // const result = serverApi.photos.get({ photoId: "123" }).then((res) => {
  //   console.log(res);
  // });

  const result = await serverApi.topics.list({
    page: 1,
    perPage: 10,
  });

  console.log(result);

  // if()
  //const path = event.pathParameters.proxy || event.path;
  // const params = {
  //   url: UNSPLASH_API_URL + path.replace(/^\/?/, "/"),
  //   method: event.httpMethod,
  //   qs: event.queryStringParameters,
  //   encoding: null,
  //   resolveWithFullResponse: true,
  // };

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from Lambda! `),
  };
  return response;
};

export { handler };
