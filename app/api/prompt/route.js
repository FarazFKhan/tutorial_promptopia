import { connectToDB } from "@utils/database";
import Prompt from "@models/m_prompt";


export const GET = async (req, res) => {

   try {
      await connectToDB();

      const prompts = await Prompt.find({}).populate("creator");

      console.log("Pulling All Prompts");
      console.log("-----");

      return new Response(JSON.stringify(prompts), { status: 200 })

   } catch (error) {
      return new Response("Failed to fetch all prompts", { status: 500 })
   }

}