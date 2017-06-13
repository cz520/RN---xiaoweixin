"use strict"
import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";

import NewsList from "./pages/newList";
import MailList from "./pages/mailList";
import Find from "./pages/find";
import AuoutMe from "./pages/aboutMe";

const index = TabNavigator({
    NewsList: { screen: NewsList },
    MailList: { screen: MailList },
    Find: { screen: Find },
    AuoutMe: { screen: AuoutMe }
},
{
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
        showIcon: true,
        style: {
            backgroundColor: "#fff",
            borderTopColor: "#ccc",
            borderTopWidth: 1
        },
        tabStyle: {
            padding: 5,
            paddingTop: 5
        },
        labelStyle: {
            fontSize: 12,
            height: 14,
            margin: 3
        },
        inactiveTintColor: "#ccc",
        inactiveBackgroundColor: "#f00",
        activeTintColor: "#16ac07",
        activeBackgroundColor: "#fff",
        upperCaseLabel: false,
        indicatorStyle: {
            height: 0
        },
        pressColor :"#f1f1f1"
    }
})
export default index;