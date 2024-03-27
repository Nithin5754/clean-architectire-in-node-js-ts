
export interface UserEntityType {
   profile_name:string;
   phone_number:string;
   email:string;
   profile_image:string;
   password:string;
   otp?:string;
}




class UserEntity {
  otp:string
  constructor(
    public profile_name:string,
    public phone_number:string,
    public email:string,
    public profile_image:string,
    public password:string,
    generateOtp?:string

    ){
      this.otp=generateOtp as string
    }
}


export default UserEntity