"use client"
import React from 'react'
import Post from './Post'
import {onSnapshot,collection,orderBy,doc,query} from "firebase/firestore";
import {db} from "../../firebase";
const Posts = () => {

  const [posts, setPosts] = React.useState([]);
  React.useEffect(()=>{
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]); 
  return (
    <div>
        {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts