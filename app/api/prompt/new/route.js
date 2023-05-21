import { connectToDB } from "@utils/database";
import Prompt from "@models/m_prompt";


export const POST = async (req, res) => {

   // destructuring the body of the request // body = req.json()
   const { userId, prompt, tag } = await req.json();

   try {
      await connectToDB(); // connect to MondoDB

      const newPrompt = new Prompt({ // Create 
         creator: userId,
         prompt,
         tag
      })

      await newPrompt.save(); // save() inserts a new document

      return new Response(JSON.stringify(newPrompt), { status: 201 })
   } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 })
   }

}