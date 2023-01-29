 import axios from 'axios';
 import * as types from '../constant/ActionTypes';

 const baseURL = 'https://jsonplaceholder.typicode.com/posts';

 const getPostList = payload =>({
    type : types.FETCH_POST_SUCCESS,
    payload
});

const editPost = payload =>({
    type: types.EDIT_POST_BY_ID_SUCCESS,
    payload
})

const getPostById = payload =>({
    type: types.FETCH_POST_BY_ID_SUCCESS,
    payload
})
const addPost = payload =>({
    type: types.ADD_POST_SUCCESS,
    payload
})



export const thunkGetPost = () => async dispatch =>{
        try {
            const {data} = await axios.get(baseURL);
            const payload = [];
            for(let x =0 ; x<10;x++){
                payload.push(data[x*10])
            };
            dispatch(getPostList(payload));
            
        }
        catch(err){
            console.log('Err while getting list post !!!')
        }
}

export const thunkGetPostById=(id) => async dispatch =>{
    try{
        const {data} = await axios.get(`${baseURL}/${id}`);
        dispatch(getPostById(data));
        return data;
    }
    catch(err){
        console.log('Err while getting post by id !!!')
    }
}

export const thunkEditPost = (post) => async dispatch =>{
    try{
        const {data} = await axios.put(`${baseURL}/${post.id}`,post);
        dispatch(editPost(data));
    }
    catch(err){
        console.log('Err while edit post!!!');
    }
}

export const thunkAddPost = (post) => async dispatch =>{
    try{
        const {data} = await axios.post(baseURL,post);
        dispatch(addPost(data));
    }
    catch(err){
        console.log('Err while add post!!!');
    }
}


