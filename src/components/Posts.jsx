import React from 'react'
import Post from './Post'

const Posts = () => {
  const posts = [
    {
     id:"1",
     username:"codewithsahand",
     userImg:"https://i.pravatar.cc/150?img=1",
     img:"https://i.pravatar.cc/150?img=1",
     caption: "Nice picture"
    },
    {
     id:"2",
     username:"thsahand",
     userImg:"https://i.pravatar.cc/150?img=2",
     img:"https://i.pravatar.cc/150?img=2",
     caption: "Nice picture"
    },
    {
     id:"3",
     username:"code",
     userImg:"https://i.pravatar.cc/150?img=3",
     img:"https://i.pravatar.cc/150?img=3",
     caption: "Nice picture"
    },
    {
     id:"4",
     username:"codesahand",
     userImg:"https://i.pravatar.cc/150?img=4",
     img:"https://i.pravatar.cc/150?img=4",
     caption: "Nice picture"
    },
  ]

  return (
    <div>
        {posts.map((post)=>(
              <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        ))}
    </div>
  )
}

export default Posts