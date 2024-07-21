import mongoose from "mongoose";

export const connectToDb = async () =>{
    try{
      await mongoose.connect(process.env.MONGODB_ATLAS_URL);
      console.log('Database connected!!!');
    }
    catch(error){
       console.log("Error connecting in database" , error);
    }
}
