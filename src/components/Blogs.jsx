import React ,{useContext} from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner';
import './Blogs.css'
const Blogs = () => {
  //consume

  const {posts , loading }= useContext(AppContext);

  return (
    <div>
        {
          loading ?
          //true

           (<Spinner/>) :
            (
              //false check kro 0 hai to no post krdo
           posts.length === 0 ?
            (<div>
              <p>No Post Found</p>
            </div>) :
             (posts.map( (post)=> (

              <div key={post.id}>
                <p className='title text-xl'>{post.title}</p>

                <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>

            <p>Posted on {post.date}</p>
               <p>{post.content}</p>
               <div>
                {post.tags.map ((tag,index)=>{
                  return <span key ={index}>{`#${tag}` }</span>
                })}
               </div>
                </div>
             )))
       )
      }
    </div>
  )
}

export default Blogs