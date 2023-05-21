import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
   creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
   },
   prompt: {
      type: String,
      required: [true, "Promt is required."],
   },
   tag: {
      type: String,
      required: [true, "Tag is required."]
   }

})


const Prompt = models.Prompt || model("Prompt", PromptSchema);
// either get the Prompt that already exist on the models object || or create a new model called "Prompt"
// based on the PromptSchema.  

export default Prompt;