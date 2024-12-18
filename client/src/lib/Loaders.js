import apiRequest from "./apiRequest";

// Single page loader to fetch a specific post
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/post/" + params.id); // Fix URL path to include "/"
  return res.data;
};

// List page loader to fetch posts based on query
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1]; // Extract query parameters from the URL
  const res = await apiRequest("/post?" + query); // Await the API call to fetch data
  return res.data; // Return the resolved response data
};
