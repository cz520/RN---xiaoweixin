"use strict"
import Index from "../view"
import ChatBox from "../view/pages/chatBox"

//配置文件
var configs = {
    route:{ //配置路由
        Index:{screen:Index},
        ChatBox:{screen:ChatBox}
    }
}
export default configs;