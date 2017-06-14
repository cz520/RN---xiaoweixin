"use strict"
import Index from "../view"
import ChatBox from "../view/pages/chatBox"
import DetailInfo from "../view/pages/detailInfo"

//配置文件
var configs = {
    route:{ //配置路由
        Index:{screen:Index},
        ChatBox:{screen:ChatBox},
        DetailInfo:{screen:DetailInfo}
    }
}
export default configs;