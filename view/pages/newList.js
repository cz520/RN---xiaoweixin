"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    TouchableHighlight
} from "react-native";

import styles from "./style"
import Header from "../component/header"

var newListData = [
    {
        name: "马云",
        images: require("../../images/touxiang.jpg"),
        time: "10:00",
        firstChat: "好的"
    },
    {
        name: "李彦宏",
        images: require("../../images/touxiang1.jpg"),
        time: "09:40",
        firstChat: "第一次五杀超神呀"
    },
    {
        name: "马化腾",
        images: require("../../images/touxiang2.jpg"),
        time: "09:38",
        firstChat: "快来看电视了"
    },
    {
        name: "雷军",
        images: require("../../images/touxiang3.jpg"),
        time: "09:02",
        firstChat: "安安"
    },
    {
        name: "张朝阳",
        images: require("../../images/touxiang4.jpg"),
        time: "08:30",
        firstChat: "[恭喜发财]"
    },
    {
        name: "丁磊",
        images: require("../../images/touxiang.jpg"),
        time: "10:00",
        firstChat: "好的"
    },
    {
        name: "刘强东",
        images: require("../../images/touxiang1.jpg"),
        time: "09:40",
        firstChat: "第一次五杀超神呀"
    },
    {
        name: "柳传志",
        images: require("../../images/touxiang2.jpg"),
        time: "09:38",
        firstChat: "快来看电视了"
    },
    {
        name: "王健林",
        images: require("../../images/touxiang3.jpg"),
        time: "09:02",
        firstChat: "安安"
    },
    {
        name: "张小龙",
        images: require("../../images/touxiang4.jpg"),
        time: "08:30",
        firstChat: "[恭喜发财]"
    }
];


export default class NewList extends Component {
    static navigationOptions = {
        tabBarLabel: "消息",
        tabBarIcon: ({ focused }) => {
            if (focused) {
                return <Image
                    source={require('../../images/newAction.png')}
                    style={{ width: 24, height: 24 }}
                />
            } else {
                return <Image
                    source={require('../../images/new.png')}
                    style={{ width: 24, height: 24 }}
                />
            }
        }

    };
    constructor(porps) {
        super(porps)
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(newListData),
            click: true
        }
    }
    goToUrl(url, params) {
        if (this.state.click) {
            this.setState({
                click: false
            })
            const { navigate } = this.props.navigation;
            navigate(url, params);
            setTimeout(() => {
                this.setState({
                    click: true
                })
            }, 2000);
        }
    }
    listFun(rowData) {
        return (
            <TouchableHighlight
                onPress={this.goToUrl.bind(this, "ChatBox", { name: rowData.name, avatar: rowData.images,firstChat:rowData.firstChat })}
            >
                <View style={styles.chatItem}>
                    <View style={styles.chatItemImage}>
                        <Image
                            source={rowData.images}
                            style={{ width: 56, height: 56, margin: 8 }}
                        />
                    </View>
                    <View style={styles.chatContent}>
                        <Text style={styles.chatName}>
                            {rowData.name}
                        </Text>
                        <Text style={styles.chatFirst}>
                            {rowData.firstChat}
                        </Text>
                    </View>
                    <View style={styles.chatTime}>
                        <Text style={styles.chatFirst}>
                            {rowData.time}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <Header />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.listFun.bind(this)}
                    fadingEdge="#000"
                />
            </View>
        );
    }
}