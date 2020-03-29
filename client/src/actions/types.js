export const postTypes = (() => {
  const SET_POST = "SET_POST";
  const SET_POSTS = "SET_POSTS";
  const SET_COUNT = "SET_COUNT";
  const FETCH_COMMENTS_FROM_POST = "FETCH_COMMENTS_FROM_POST";
  const LOAD_NEXT_POST = "LOAD_NEXT_POST";
  return {
    SET_POST,
    SET_POSTS,
    SET_COUNT,
    FETCH_COMMENTS_FROM_POST,
    LOAD_NEXT_POST
  };
})();

export const appTypes = (() => {
  const FETCH_POSTS_FROM_SUBREDDIT = "FETCH_POSTS_FROM_SUBREDDIT";
  const FETCHING_POSTS = "FETCHING_POSTS";
  const FINISHED_FETCHING_POSTS = "FINISHED_FETCHING_POSTS";
  const SET_SUBREDDIT = "SET_SUBREDDIT";
  return {
    FETCH_POSTS_FROM_SUBREDDIT,
    SET_SUBREDDIT,
    FETCHING_POSTS,
    FINISHED_FETCHING_POSTS
  };
})();
