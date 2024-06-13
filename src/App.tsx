import { useState,FormEvent } from "react";
import PostCard from "./components/PostCard";
import { useGetPostsQuery, useNewPostsMutation } from "./redux/api"

const App = () => {
  const { isLoading, data } = useGetPostsQuery("");
  const [newPost]=useNewPostsMutation()

  const [title,setTitle]=useState<string>("");
  const [body,setBody]=useState<string>("");

  const submitHandler=(e:FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    const post:Post={
      title,
      body,
      userId:Math.floor(Math.random() * 90 + 10),
      id:Math.floor(Math.random() * 90 + 10)
    }
    newPost(post)
    setTitle("")
    setBody("")

  }

  return (
    <div>
      <h1>My App</h1>

        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Title" value={title}
          onChange={(e)=>setTitle(e.target.value)}/>
           <input type="text" placeholder="Body" value={body}
          onChange={(e)=>setBody(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
        {isLoading ? (
        <div>Loading...</div>
        ):(
          data?.map((i) => <PostCard key={i.id} post={i} />)
        )}
    </div>
  );
};

export default App