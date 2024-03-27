import { Application } from "express";
import { ConfigType } from "../../config/config";







const serverConfig=(app:Application,config:ConfigType)=>{


const startServer=()=>{
  app.listen(config.port,()=>console.log("server started ....")
  )
}
return {
  startServer
}

}

export default serverConfig