import apiRequest from "./apiRequest";

// Single page loader to fetch a specific post
export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest("/post/" + params.id); // Fetch post by ID
  return res.data; // Return the data
};

// List page loader to fetch posts based on query
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1]; // Extract query parameters from URL
  const res = await apiRequest("/post?" + query); // Fetch posts with query parameters
  return res.data; // Return the data
};

// Profile page loader to fetch user profile posts
export const profilePageLoader = async () => {
  try {
    const response = await apiRequest("/users/profilePosts"); // Await the API response
    const { myPosts = [], savedPosts = [] } = response.data; // Destructure API data
    return { myPosts, savedPosts }; // Return structured data
  } catch (error) {
    console.error("Failed to load profile posts:", error);
    return { myPosts: [], savedPosts: [] }; // Fallback to empty lists in case of an error
  }
};
