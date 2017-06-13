"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from "react-native";
import styles from "./style.js"
import Header from "../component/header"


export default class Find extends Component {
    static navigationOptions = {
        tabBarLabel: "发现",
        tabBarIcon: ({ focused }) => {
            if(focused){
                return <Image
                    source={require('../../images/findAction.png')}
                    style={{width:24,height:24}}
                />
            }else{
                return <Image
                    source={require('../../images/find.png')}
                    style={{width:24,height:24}}
                />
            }
        } 
        
    }
    constructor(porps) {
        super(porps)
        this.state = {
            height: 300
        }
    }

    toggle() {
        const height = this.state.height;
        if(height == 0){
            this.setState({
                height:300
            })
        }else{
             this.setState({
                height:0
            })
        }
    }
    render() {
        return (
            <View>
                <Header />

            </View>
        );
    }
}