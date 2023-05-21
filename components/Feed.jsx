"use client"

import { useState, useEffect } from "react"

import PromtCard from "./PromtCard"

const PromptCardList = ({ data, handleTagCick }) => {
   return (
      <div className="mt-16 prompt_layout">
         {data.map((post) => (
            <PromtCard
               key={post._id}
               post={post}
               handleTagCick={handleTagCick}
            />
         ))}
      </div>

   )
}

const Feed = () => {

   const [searchText, setSearchText] = useState("");
   const [posts, setPosts] = useState([]);


   const handleSearchChange = (e) => {
      // console.log(e.target.value);
   }

   useEffect(() => {
      const fetchPosts = async () => {
         const response = await fetch("/api/prompt");
         const data = await response.json();
         console.log("data", data);

         setPosts(data);
      }

      fetchPosts();
   }, []);

   return (
      <section className="feed">
         <form className="relative w-full flex-center">
            <input
               type="text"
               placeholder="Search for a tag or a username"
               value={searchText}
               onChange={handleSearchChange}
               required
               className="search_input peer"
            />
         </form>


         <PromptCardList
            data={posts}
            handleTagCick={() => { }}
         />
      </section>
   )
}

export default Feed