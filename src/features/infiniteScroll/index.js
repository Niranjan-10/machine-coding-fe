import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice';

const Posts = (props) => {
  const {posts} = useSelector((state) => state.posts)  
  const dispatch = useDispatch();
  const bottom = useRef(null)


  useEffect(()=> {
      const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              dispatch(getPosts());
            }
          }
        );

      if (observer && bottom.current) {
          observer.observe(bottom.current);
        }    

    return () => {
        if (bottom.current && observer) {
          observer.unobserve(bottom?.current);
        }
      };
  }, [])


  return (
    <div>
        <h4>Infinity Scrolling</h4>
        {posts.length>0 && (
        <div>
            {posts?.map((item, index) => 
                (<div key={index}>
                    <h5>{item?.title}</h5>
                    <p>{item?.body}</p>
                </div>)
            )}
        </div>)
        }
        <p ref={bottom} style={{marginTop: "20px"}}>
                Loading....
        </p>
    </div>
  )
}

export default Posts