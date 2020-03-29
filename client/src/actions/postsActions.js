import { postTypes as pt, appTypes as at } from "./types";
import axios from "axios";
const URL = ``;

export const setCount = (count = 0) => ({
  type: pt.SET_COUNT,
  payload: count
});
export const fetchCommentsFromPost = (postId, query) => dispatch => {
  axios
    .get(`${URL}/api/comments/${postId}${query}`)
    .then(({ data }) => {
      let comments = data[1].data.children.map(child => child.data);
      dispatch({ type: pt.FETCH_COMMENTS_FROM_POST, payload: comments });
    })
    .catch(err => console.error(err));
};

export const nextPost = () => ({
  type: pt.LOAD_NEXT_POST
});
