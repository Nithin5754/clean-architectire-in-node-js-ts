import bcrypt from 'bcryptjs'


const authServiceImpl=()=>{


  const encryptPassword=async(password:string)=>{
    const salt=await bcrypt.genSalt(10)
    password=await bcrypt.hash(password,salt)
    return password
  }

  return {
    encryptPassword   
  }

}

type authServiceImpl=ReturnType<typeof authServiceImpl>

export default authServiceImpl