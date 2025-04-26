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
  "Movies",
  "Comedy",
  "Music",
  "Fashion",
  "React",
  "Cooking",
  "Cricket",
  "Live",
];
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;

export const COMMENTS = [
  {
    id: "1",
    name: "Shivam",
    comment: "Rajni is the most beautiful girl in the universe.!!!!",
    replies: [],
  },
  {
    id: "2",
    name: "Shivam",
    comment: "Rajni is the most beautiful girl in the universe.!!!!",
    replies: [
      {
        id: "2.1",
        name: "Shivam",
        comment: "Rajni is the most beautiful girl in the universe.!!!!",
        replies: [],
      },
      {
        id: "2.2",
        name: "Shivam",
        comment: "Rajni is the most beautiful girl in the universe.!!!!",
        replies: [
          {
            id: "2.2.1",
            name: "Shivam",
            comment: "Rajni is the most beautiful girl in the universe.!!!!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Shivam",
    comment: "Rajni is the most beautiful girl in the universe.!!!!",
    replies: [],
  },
];
