import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { thunkGetPost } from './actions/thunkAction';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch  = useDispatch()

  useEffect(()=>{dispatch(thunkGetPost())}
  ,[])

  return (
    <div className='container p-5'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<Post />}/>
          <Route path='/edit/:postId' element={<Post />}/>
        </Routes>
      </HashRouter>
    </div>
  
  );
}

export default App;
