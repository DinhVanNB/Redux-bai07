import { useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function Home (){
    const navigate = useNavigate();
    const {postList} =useSelector((state)=>state)

    return(
        <>
            <div className='d-flex justify-content-between'>
                <h3>Post</h3>
                <button
                    onClick ={()=>navigate('/add')}  
                    className='btn btn-success' 
                    type='button'>
                    Add new Post
                </button>
            </div>
            <div className='mt-4'>
                {postList.map(post=>(
                    <div className='border rounded-4 p-3 mt-3' key={post.id}>
                        <h5>{post.title}</h5>
                        <div className='d-flex justify-content-between'>
                            <p className='w-75'>{post.body}</p>
                            <button 
                                onClick={()=>navigate(`/edit/${post.id}`,{state:{...post}})}
                                id={post.id}
                                style={{height:35,width:80}}
                                 className='btn btn-primary'>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}