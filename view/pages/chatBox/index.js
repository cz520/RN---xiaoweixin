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
import { GiftedChat, Bubble, Send, Composer, Avatar, MessageText, Time, MessageContainer } from 'react-native-gifted-chat';
import ListHead from "../../component/listHead"

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: {
                _id: 1,
                name: this.props.navigation.state.params.name,
                avatar: () => <Image source={this.props.navigation.state.params.avatar} style={{ width: 40, height: 40 }} />,
                imageUrl:this.props.navigation.state.params.avatar,
            }
        };
        this.onSend = this.onSend.bind(this);
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: this.props.navigation.state.params.firstChat,
                    createdAt: new Date(),
                    user: this.state.user,
                    imageUrl:this.props.navigation.state.params.avatar
                },
            ],
        });
    }
    
    onSend(messages = []) {
        if (messages[0].text != "") {
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
    goto(props) {
        
        const { navigate } = this.props.navigation;
        const user = props.user;
        navigate("DetailInfo", { name: user.name, username: "xiaoweiwei", subName: "", image: user.imageUrl });
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListHead headName={this.props.navigation.state.params.name} navigation={this.props.navigation} />
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    locale="zh-cn"
                    renderSend={(pro) => <Send {...pro} label="发送" />}
                    user={{
                        _id: 2,
                        name: "自己",
                        avatar: () => <Image source={require("../../../images/touxiang.jpg")} style={{ width: 40, height: 40 }} />,
                        imageUrl:require("../../../images/touxiang.jpg")
                    }}
                    renderAvatarOnTop={true}
                    renderComposer={(props) => <Composer {...props} placeholder="请输入消息"></Composer>}
                    renderBubble={(props) => <Bubble {...props} wrapperStyle={{ right: { backgroundColor: "#16ac07" } }} />}
                    renderMessageText={(props) => <MessageText {...props} textStyle={{ right: { color: "#000" } }} />}
                    renderTime={(props) => <Time {...props} textStyle={{ right: { color: "#ccc" } }} />}
                    onPressAvatar={this.goto.bind(this)}
                />
            </View>
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