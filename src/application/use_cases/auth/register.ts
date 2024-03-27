import { ERROR } from "../../../frameworks/webserver/common/httpError"
import UserEntity, { UserEntityType } from "../../entities/user"
import authRepositoriesInt from "../../repositories/authRepositoryInt"
import authServiceInt from "../../service/authServiceInt"
import generateInt from "../../service/generateInt"
import otpServiceInt from "../../service/otp-serviceInt"







const tempRegisterAndSendOtp=async(userData: UserEntityType,authRepository: authRepositoriesInt,authService:authServiceInt,generate:generateInt,OTPRepository:otpServiceInt)=>{

  let {profile_name, phone_number, email, profile_image, password}=userData

 //check the mobile number is already registered ?

  let existingUser=await authRepository.findUserByPhoneNumber(phone_number)
  if (existingUser) {
    throw new ERROR.UserExistsError(`${phone_number} is already registered`)
}

//save to temp database i minute enter otp

const encryptedPassword=await authService.encryptPassword(password)

const generateOtp= generate.createOtp(6)



const userEntity=new UserEntity(profile_name, phone_number, email,profile_image, encryptedPassword,generateOtp)

  let temperUser=await authRepository.createTempUser(userEntity)

   if(!temperUser){
     throw new ERROR.TemporaryUserCreatingError("error creating temporary error")
   }


  
       const sendOtp= await OTPRepository.sendOtp(profile_name,email,generateOtp)

       if(!sendOtp){
        throw new ERROR.ErrorSendingOtpMail("error sending node mailer otp please check again")
       }




   

  return {
    temperUser
  }
}


export default tempRegisterAndSendOtp