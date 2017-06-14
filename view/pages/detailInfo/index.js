"use strict"
import React, { Component } from 'react';
import {
    Platform,
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    Button,
    TouchableHighlight
} from "react-native";
import ListHead from "../../component/listHead"

export default class DetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click:true
        };

    }

    setSubName() {
        return true;
    }
    gotoUrl(params) {
        if(this.state.click){
            this.clickSetTimeOut(2000);
            const {navigate} = this.props.navigation;
            navigate(params.url,params.user);
        }
    }
    clickSetTimeOut(time){
        this.setState({
            click:false
        })
        setTimeout(()=>{
            this.setState({
                click:true
            })
        },time)
    }
    render() {
        const params = this.props.navigation.state.params;
        return (
            <View style={styles.wrap}>
                <ListHead headName={this.props.navigation.state.params.name} navigation = {this.props.navigation} />
                <View style={[styles.info, { height: 80, flexDirection: "row", alignItems: "center" }]}>
                    <Image
                        source={params.image}
                        style={{ width: 60, height: 60, margin: 10 }}
                    ></Image>
                    <View style={{ paddingLeft: 8 }}>
                        <Text style={styles.headText}>
                            {params.subName ? params.subName : params.name}
                        </Text>
                        <Text style={styles.subHead}>
                            微信号：{params.username}
                        </Text>
                        <Text style={styles.subHead}>
                            昵称：{params.name}
                        </Text>
                    </View>
                </View>
                <View style={[styles.info, { height: 40, padding: 10 }]}>
                    <TouchableHighlight
                        onPress={this.setSubName.bind(this)}
                    >
                        <Text style={styles.headText}>
                            设置备注和标签
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.info, { padding: 10 }]}>
                    <View style={[styles.item, { height: 40 }]}>
                        <Text style={[styles.headText, { width: 90 }]}>
                            地区
                        </Text>
                        <Text style={[styles.subHead, { fontSize: 15 }]}>
                            香港
                        </Text>
                    </View>
                    <View style={[styles.item]}>
                        <Text style={[styles.headText, { width: 90 }]}>
                            个人相册
                        </Text>
                        <View style={{ height: 70 }}>
                        </View>
                    </View>
                    <View style={[styles.item, { height: 40, borderBottomWidth: 0 }]}>
                        <Text style={[styles.headText, { width: 90 }]}>
                            更多
                        </Text>
                    </View>
                </View>

                <TouchableHighlight
                    onPress={this.gotoUrl.bind(this,{url:"ChatBox",user:{
                        name:params.subName?params.subName:params.name,
                        avatar:params.image
                    }})}
                    underlayColor = "#439e1f"
                    activeOpacity = {0.5}
                    style={[styles.button, { backgroundColor: "#16ac07" }]}
                >
                    <View >
                        <Text style={styles.buttonText}>
                            发消息
                        </Text>
                    </View>
                </TouchableHighlight >

                <TouchableHighlight
                    onPress={this.gotoUrl.bind(this)}
                    underlayColor = "#999"
                    activeOpacity = {0.5}
                    style={[styles.button, { backgroundColor: "#ccc" }]}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            视频聊天
                        </Text>
                    </View>
                </TouchableHighlight >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: "#f1f1f1",
        height: "100%"
    },
    info: {
        backgroundColor: "#fff",
        marginTop: 15
    },
    headText: {
        color: "#222",
        fontSize: 16
    },
    subHead: {
        color: "#ccc",
        fontSize: 12
    },
    item: {
        width: "100%",
        borderBottomWidth: 0.5,
        borderColor: "#f1f1f1",
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 4,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    }
})