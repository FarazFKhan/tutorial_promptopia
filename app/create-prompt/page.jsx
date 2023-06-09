"use client"

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {

   const router = useRouter();
   const { data: session, status } = useSession();

   useEffect(() => {
      // console.log("session status: ", status);
      // console.log("session: ", session)

   }, [status, session])

   const [submitting, setSubmitting] = useState(false);
   const [post, setPost] = useState({
      prompt: "",
      tag: "",
   })

   const createPrompt = async (e) => {
      e.preventDefault(); // stops page reload upon form submit
      setSubmitting(true);

      try {
         const response = await fetch("/api/prompt/new",
            {
               method: "POST",
               body: JSON.stringify({
                  prompt: post.prompt,
                  userId: session?.user.id,
                  tag: post.tag
               })
            }
         )

         if (response.ok) {
            router.push("/"); // push to the homepage
         }
      } catch (error) {
         console.log(error);
      } finally {
         setSubmitting(false);
      }
   }

   return (
      <>
         <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
         />
      </>
   )
}

export default CreatePrompt