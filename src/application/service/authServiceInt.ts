import authServiceImpl from "../../frameworks/service/authServiceImpl"




const authServiceInt=(service:authServiceImpl)=>{



  const encryptPassword=(password:string)=>service.encryptPassword(password)






return {
  encryptPassword
}

  

}

type authServiceInt=ReturnType<typeof authServiceInt>

export default authServiceInt