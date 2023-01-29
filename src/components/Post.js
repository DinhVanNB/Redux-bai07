import {useSelector,useDispatch} from 'react-redux';
import {useState,useEffect} from 'react';
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import { thunkGetPostById, thunkEditPost ,thunkAddPost } from '../actions/thunkAction';

export default function Post (){
    const {postId} = useParams();
    const{state} =useLocation();
    const dispatch = useDispatch();
    const [post, setPost] = useState({});
    //  const {postList} = useSelector((state)=>state);
    const navigate = useNavigate();
    useEffect(()=>
    {if(postId){
        dispatch(thunkGetPostById(postId));
        setPost(state)
    }
    },[navigate]);
    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(post)
        if(postId){
            dispatch(thunkEditPost(post));
            alert('Sửa thành công!!!');
        }
        else{
            dispatch(thunkAddPost(post));
            alert('Thêm thành công!!!');
        }
        
        navigate('/')
        
    }
   
    const onChange =({target})=>{
        setPost({...post, [target.name]:target.value})   
    }
    
    return(
        <>
            <div>
                <h3>{postId? 'Edit Post' : 'New Post'}</h3>
            </div>
            <form onSubmit={onSubmit}>
            <div className='mt-5 p-3 border rounded-4'>
                <div className='mt-2'>
                    <h5>Title</h5>
                    <input
                        onChange={onChange}
                        required
                        className='w-75 border rounded ' 
                        name='title' 
                        type="text" 
                        defaultValue={postId?post.title : '' }
                    />
                </div>
                <div className='mt-5'>
                <h5>Content</h5>
                    <textarea
                        onChange={onChange} 
                        required
                        rows="5"
                        className='w-75 border rounded' 
                        name='body' 
                        defaultValue={postId?post.body : '' }
                    />
                   
                </div>
            </div>
            <button 
                type='submit'
                onClick={()=>console.log()}
                style={{height:35,width:80}}
                className='btn btn-success mt-3'>
                {postId? 'Save' : 'Add'}
            </button>
            </form>
        </>
    )
}