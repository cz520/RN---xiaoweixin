"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView
} from "react-native";

export default class AboutMe extends Component {
    static navigationOptions = {
        tabBarLabel: "我",
        tabBarIcon: ({ focused }) => {
            if(focused){
                return <Image
                    source={require('../../images/meAction.png')}
                    style={{width:24,height:24}}
                />
            }else{
                return <Image
                    source={require('../../images/me.png')}
                    style={{width:24,height:24}}
                />
            }
        } 
        
    }

    state = {}
    render() {
        return (
            <View>
                <Text>
                    关于我
                </Text>
            </View>
        );
    }
}