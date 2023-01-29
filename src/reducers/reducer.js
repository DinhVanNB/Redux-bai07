import * as types from '../constant/ActionTypes';

const initialState = {
    postList : [],
    postEdit : {}
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.FETCH_POST_SUCCESS:
            return {...state, postList: action.payload}
        case types.ADD_POST_SUCCESS:
            let arr = [...state.postList];
            arr.push(action.payload)
            return {...state, postList:arr }
        case types.FETCH_POST_BY_ID_SUCCESS:
            return {...state, postEdit: action.payload}
        case types.EDIT_POST_BY_ID_SUCCESS:
            return {...state, postList: [...state.postList].map(post=>{
                if(+post.id===+action.payload.id){
                   return post=action.payload;
                }
                return post
            })}
        default:
            return state

    }
}
export default rootReducer;