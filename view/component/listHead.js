"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import {NavigationActions} from "react-navigation"
import styles from "../pages/style.js"

export default class ListHead extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    goBack (){
       const goback =  NavigationActions.back(); 
       this.props.navigation.dispatch(goback)
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress = {this.goBack.bind(this)}
                    >
                        <View style={{alignItems:"center",justifyContent:"center",width:50,backgroundColor:"#393a3f"}}>
                            <Text style={{ color: "#fff", fontSize: 12 }}>返回</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{width:1,height:30,backgroundColor:"#333"}}></View>
                    <View style={{paddingLeft:15}}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>
                            {this.props.headName}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}