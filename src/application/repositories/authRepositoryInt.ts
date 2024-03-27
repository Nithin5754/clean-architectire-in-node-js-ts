
import authRepositoriesImpl from "../../frameworks/database/mongodb/repositories/authRepositoryImpl"
import { UserEntityType } from "../entities/user"


const authRepositoriesInt=(repository:authRepositoriesImpl)=>{

  const createTempUser=(userentity:UserEntityType)=>repository.createTempUser(userentity)
  const createUser=(userentity:UserEntityType)=>repository.createUser(userentity)

  const findUserByEmailIdTemp=(email:string)=>repository.findUserByEmailIdTemp(email)
  const findUserByEmailId=(email:string)=>repository.findUserByEmailId(email)

  
  const findUserByPhoneNumber=(phone:string)=>repository.findUserByPhoneNumber(phone)
return {
  findUserByPhoneNumber,
  createTempUser,
  findUserByEmailIdTemp,
  findUserByEmailId,
  createUser
  
}

}

type authRepositoriesInt =ReturnType<typeof authRepositoriesInt>

export default authRepositoriesInt