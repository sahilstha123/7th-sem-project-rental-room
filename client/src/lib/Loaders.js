import apiRequest from "./apiRequest";

// Single page loader to fetch a specific post
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/post/" + params.id); // Fetch post by ID
  return res.data ?? {}; // Return the data
};

// List page loader to fetch posts based on query
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1]; // Extract query parameters from URL
  const res = await apiRequest("/post?" + query); // Fetch posts with query parameters
  return res.data; // Return the data
};

// Profile page loader to fetch user profile posts and chats
export const profilePageLoader = async () => {
  try {
    // Fetch posts data
    const postResponse = await apiRequest("/users/profilePosts"); // Await the API response for posts
    const { userPosts = [], savedPosts = [] } = postResponse.data; // Destructure API data
    // console.log("profile list->", postResponse.data, userPosts);

    // Fetch chats data
    // const chatResponse = await apiRequest("/users/chats"); // Await the API response for chats
    // const chats = chatResponse.data || []; // Default to an empty array if no data

    return postResponse.data; // Return structured data including chats
  } catch (error) {
    console.error("Failed to load profile posts or chats:", error);
    return { userPosts: [], savedPosts: [], chats: [] }; // Fallback to empty lists in case of an error
  }
};
