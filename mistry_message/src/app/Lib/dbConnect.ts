     // in upcoming lectures we will use shadcn

     import mongoose from "mongoose";

     type ConnectionObject={
        isConnected?:number
     }

     //  creating a connection object

     const connection :ConnectionObject={}
// there is  a big difference of using void in type script as compare to the other languages
async function dbConnect() :Promise<void>{
// this is a kind of a safety check  or a optimization check

   if(connection.isConnected){
    console.log("Already connected to data base");
    return
   } 
   try{
    const db=await mongoose.connect(process.env.MONGODB_URI||'',{})
     connection.isConnected= db.connections[0].readyState
     console.log("DB connected successfully");
     
   }catch(error){
    console.log("dataBAse connection fail",error);
    

    process.exit(1);

   }
 

}

export default dbConnect