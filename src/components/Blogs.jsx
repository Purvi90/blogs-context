import React ,{useContext} from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner';
import './Blogs.css'
const Blogs = () => {
  //consume

  const {posts , loading }= useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7'>
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
                <p className='font-bold text-lg'>{post.title}</p>

                <p className='text-sm'>
                  By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                </p>

            <p className='text-sm mt-[11px]'
            >Posted on {post.date}</p>
               <p className='text-md mt-[12px]'>{post.content}</p>
               <div className='flex gap-x-2 '>
                {post.tags.map ((tag,index)=>{
                  return <span key ={index} className='text-blue-400 underline font-bold text-xs'>{`#${tag}` }</span>
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