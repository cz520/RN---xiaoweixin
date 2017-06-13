/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict"
import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import configs from "./config"

//初始化路由
const routers = StackNavigator(configs.route,{
    navigationOptions:{
        header:null
    }
});
export default routers;