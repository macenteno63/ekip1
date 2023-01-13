import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        loading: 'idle',
        post: null
    },
    reducers: {
        getLoading: (state, action) => {
            if (state.loading === 'idle')
                state.loading = 'loading'
        },
        getPost: (state, action) => {
            // if (state.loading === 'pending') {
            //     state.loading = 'idle'
            // }
            state.post = action.payload;
        },
        createPostt: (state, action) => {
            state.push(action.payload)
        },
        like: (state, action) => {
            state.post.map((post) => {
                if (post._id === action.payload.postId) {
                    post.likers.push(action.payload.userId)
                }
            })
        },
        unlike: (state, action) => {
            state.post.map((post) => {
                if (post._id === action.payload.postId) {
                    post.likers = post.likers.filter(t=> t !== action.payload.userId)
                }
            })
        },
        updateMessage: (state,action)=>{
            state.post.map((post) => {
                if (post._id === action.payload.postId) {
                    post.message = action.payload.message;
                }
            })
        }
    },
});
export const fetchPost = (num) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}/api/post/`)
            .then((res) => {
                const tab = res.data.slice(0,num)
                dispatch({type: "post/getPost", payload: tab});
            })
            .catch((err) => console.log(err));
    };
};

export const createPost = (data) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}/api/post/`, data)
            .then((res) => {
                dispatch({type: "post/createPostt", payload: data});
            })
    }
}
export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}/api/post/like-post/` + postId,
            data: {id: userId},
        })
            .then((res) => {
                dispatch({type: "post/like", payload: {postId, userId}});
            })
            .catch((err) => console.log(err));
    };
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}/api/post/unlike-post/` + postId,
            data: {id: userId},
        })
            .then((res) => {
                dispatch({type: "post/unlike", payload: {postId, userId}});
            })
            .catch((err) => console.log(err));
    };
};
export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/api/post/${postId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: "post/updateMessage", payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};

// export const fetchPost = () => async (dispatch) => {
//   dispatch(getLoading())
//     await axios .get("http://localhost:4000/api/post") .then(res =>dispatch(getPost(res.data)))
//
// }
export const {getPost, getLoading} = postSlice.actions;
export default postSlice.reducer;