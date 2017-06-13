"use strict"
import React, { Component } from 'react';
import {
    Platform,
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    Button
} from "react-native";
import { GiftedChat, Actions, Bubble, Send, Composer ,Avatar ,MessageText ,Time} from 'react-native-gifted-chat';

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: {
                _id: 1,
                name: this.props.navigation.state.params.name,
                avatar:() => <Image source={this.props.navigation.state.params.avatar} style = {{width:40,height:40}}/>,
            }
        };
        this.onSend = this.onSend.bind(this);
    }
    componentWillMount() {
        this.setState({
            messages: [
                {   
                    _id: 1,
                    text: `你好，我是${this.props.navigation.state.params.name}`,
                    createdAt: new Date(),
                    user: this.state.user,
                }, 
            ],
        });
    }
    getMessages (previousState,messages=[]){
        return ;
    }
    onSend(messages = []) {
        if (messages[0].text != ""){
            this.setState((previousState) => {
                //自己发送消息
                const newMe = GiftedChat.append(previousState.messages, messages);
                //编辑自动回复消息
                const _id = newMe[0]._id + 1;
                const text = newMe[0].text
                const newMess = {
                     _id: _id,
                    text: text,
                    createdAt: new Date(),
                    user: this.state.user,
                }
                return {
                    messages: GiftedChat.append(newMe, newMess)
                };
            });
        }
    }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                locale="zh-cn"
                renderSend={(pro) => <Send {...pro} label="发送" />}
                user={{
                    _id:2,
                    name: "自己",
                    avatar: () => <Image source={require("../../../images/touxiang.jpg")}  style = {{width:40,height:40}}/>,
                }}
                renderAvatarOnTop = {true}
                renderComposer = {(props)=><Composer {...props} placeholder="请输入消息"></Composer>}
                renderAvatar  = { (avatarProps)=>  <Avatar {...avatarProps}/>}
                renderBubble = {(props) => <Bubble {...props} wrapperStyle={{right:{backgroundColor:"#16ac07"}}} />}
                renderMessageText = {(props) => <MessageText {...props} textStyle={{right:{color:"#000"}}} />}
                renderTime = {(props) => <Time {...props} textStyle={{right:{color:"#ccc"}}} />}
            />
        );
    }
}
const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
});