import { NextFunction, Request, Response } from "express"
import { ERROR } from "../../frameworks/webserver/common/httpError"
import { UserEntityType } from "../../application/entities/user"
import tempRegisterAndSendOtp from "../../application/use_cases/auth/register"
import verifyOtpHandler from "../../application/use_cases/auth/verifyOtp"









const authController=( authRepositoryInt: any, authRepositoryImpl: any,authServiceInt:any,authServiceImpl:any ,generateInt:any,generateImpl:any,otpServiceInt:any,otpServiceImpl:any)=>{
const authRepository=authRepositoryInt(authRepositoryImpl())
const authService=authServiceInt(authServiceImpl())
const generate=generateInt(generateImpl())

const OTPRepository=otpServiceInt(otpServiceImpl())


  const register=async(req:Request,res:Response,next:NextFunction)=>{

    try {

        //temp placed here
     if(req.body.confirm_password !== req.body.password){
      throw new ERROR.PasswordMismatchError("both password not match each other")
     }

     const userData:UserEntityType=req.body;

     const response=await tempRegisterAndSendOtp(userData,authRepository,authService,generate,OTPRepository)

     res.status(200).json({message:'successfully registered',response:response})

      
    } catch (error) {
      next(error)
    }  

  }

  const IsVerifyOtp=async(req:Request,res:Response,next:NextFunction)=>{
    const otp=req.body.otp
    const email=req.body.email
   try {

    await verifyOtpHandler(email,otp,authRepository,OTPRepository)
    
    res.status(200).json({message:'successfully logged in !!!!'})
    
   } catch (error) {
    next(error)
   }

}

  return{
    register,
    IsVerifyOtp
  }
}



export default authController