import { ERROR } from "../../../frameworks/webserver/common/httpError";
import UserEntity from "../../entities/user";
import authRepositoriesInt from "../../repositories/authRepositoryInt";
import otpServiceInt from "../../service/otp-serviceInt";




const verifyOtpHandler=async(email:string,otp:string,authRepository:authRepositoriesInt,OTPRepository:otpServiceInt)=>{
   

  
  


  let isEmailExistingAlready=await authRepository.findUserByEmailId(email)
  
  if(isEmailExistingAlready){
    throw new ERROR.UserExistsError("user already exit")
  }

  let isEmilExistingTempDB=await authRepository.findUserByEmailIdTemp(email)
  if(!isEmilExistingTempDB){
    throw new ERROR.TemporaryUserCreatingError("email is not found please try another one")
  }


  let otpVerification=await OTPRepository.verifyOtp(otp,email)



    if(otpVerification!==otp){
      throw new ERROR.invalidOtp("invalid otp")
     
  }

  
  const {profile_image,profile_name,password,phone_number}=isEmilExistingTempDB
 

  const userEntity=new UserEntity(profile_name, phone_number, email,profile_image,password)

  const isVerifiedToPermanent=await authRepository.createUser(userEntity)
  console.log(isVerifiedToPermanent,"is verified");
  

  if(!isVerifiedToPermanent){
    throw new ERROR.UserCreatingError("ERROR CREATE NEW USER ")
  }

return isVerifiedToPermanent



}


export default verifyOtpHandler