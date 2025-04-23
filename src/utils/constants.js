export const FILTER_LIST = [
  "All",
  "Gaming",
  "Sports",
  "Movies",
  "Comedy",
  "Music",
  "Fashion",
  "React",
  "Cooking",
  "Cricket",
  "Live",
];

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;
