import mongoose ,{Schema,Document}from "mongoose";
//Message is the name of interface
export interface Message extends Document{// message interface
   content :string;
   createdAt:Date;
}
//creating message schema using message interface // custom  schema
const MessageSchema:Schema<Message>=new Schema({
  content:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    required:true,
    default:Date.now

  }
})

//creating users interface
export interface User extends Document{// message interface
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptingMessage:boolean;
    message:Message[]
 }

 //creating schema
 const UserSchema:Schema<User>=new Schema({

    //under this schema we are creating different fields
    username:{
      type:String,
      required:[true,"username is required"],
      trim:true,
      unique:true
    },
    email:{
      type:String,
      required:[true,"Email is required"],
      unique:true,
      match:[/.+\@.+\..+/,'Please use a valid email address']
  
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },

    verifyCode:{
        type:String,
        required:[true,"verify code is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify code Expiry is required"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },

    message:[MessageSchema]

  })
  //how we will export it
  //exporting data in the next js
  //Since typeScript provides a type safety  thats why we use type script
  const UserModel=(mongoose.models.User as mongoose.Model<User>)||(mongoose.model<User>("User",UserSchema))
 // now export the user model
 export default UserModel;