

const createErrorClass=(name:string,statusCode:number)=>{
  return class extends Error {
    statusCode:number
     constructor (message:string){
        super(message)
        this.name=name
        this.statusCode=statusCode
     }
  }
}


export  const ERROR={
  HttpError:createErrorClass('HttpError',500),
  UserExistsError:createErrorClass('UserExistsError',409),
  PasswordMismatchError: createErrorClass('PasswordMismatchError', 400),
  TemporaryUserCreatingError:createErrorClass('TemporaryUserCreatingError',404),
  ErrorSendingOtpMail:createErrorClass('ErrorSendingOtpMail',400),
 invalidOtp:createErrorClass('invalidOtp',404),
 UserCreatingError:createErrorClass('UserCreatingError',404),
}  