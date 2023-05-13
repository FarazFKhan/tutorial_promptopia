import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
   email: {
      type: String,
      unique: [true, "Email already exists!"], // [does it need to be unique, message if not unique]
      required: [true, "Email is required!"], // [is this reuqired, message if ]
   },
   username: {
      type: String,
      required: [true, "Username is required!"],
      match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
         "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
   },
   image: {
      type: String
   }
});


const User = models.User || model("User", UserSchema);
// look inside models.User and see if its already there. And only if its not there, then recreate the model.

export default User;


/** The "models" object is provided by the Mongoose
Library and stores all the registered models.*/

/** If a model named "User" already exists in the
 "models" object, it assigns that existing model to
the "User" variable.*/

/** This prevents redefining the model and ensures
that the existing model is reused. */

/** If a model named "User" does not exist in the
"models" object, the "model " function from Mongoose
is called to create a new model */

/** The newly created model is then assigned to the
"User" variable.)   */