import { UserEntityType } from "../../../../application/entities/user"
import TempUser from "../models/tempUser"
import User from "../models/user"





const authRepositoriesImpl=()=>{

  const findUserByPhoneNumber=async(phone:string)=>{
    return  await User.findOne({phone_number:phone})
  }

   const findUserByEmailId=async(email:string)=>{
    return await User.findOne({email})
   }
   const findUserByEmailIdTemp=async(email:string)=>{
    console.log(email,"email");
    
    let isEmail=await TempUser.findOne({email})
    console.log(isEmail,"isEmail")
    return isEmail
   }

const createTempUser=async(userEntity:UserEntityType)=>{

  const user=new TempUser(userEntity)

  const newUser=await user.save()
  return newUser
}

const createUser=async(userEntity:UserEntityType)=>{
  const user=new User(userEntity)
     const savedUser=await user.save()
     console.log(savedUser,"hello");
     
     return savedUser
}

    return {
      findUserByPhoneNumber,
      createTempUser,
      findUserByEmailId,
      findUserByEmailIdTemp,
      createUser
    }
}

type authRepositoriesImpl=ReturnType<typeof authRepositoriesImpl>

export default authRepositoriesImpl