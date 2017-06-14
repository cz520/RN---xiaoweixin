"use strict"
import React, { Component } from 'react';
import {
    StyleSheet
} from "react-native";


const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:"#393a3f",
        flexDirection:"row",
        alignItems:"center",
        zIndex:999
    },
    headName:{
        paddingLeft:8
    },
    headSearch:{
        flex:1,
        alignItems:"flex-end"
    },
    headerJia:{
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center"
    },
    headerJiaList:{
        backgroundColor:"#393a3f",
        position:"absolute",
        width:160,
        top:60,
        right:10,
        zIndex:999,
        paddingLeft:10,
        paddingRight:10
    },
    headerJiaListItem:{
        height:35,
        borderBottomWidth:0.2,
        borderBottomColor:"#333",
        justifyContent:"center"
    },
    headerJiaListItemText:{
        color:"#fff"
    },
    chatItem: {
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth:0.5,
        borderBottomColor:"#ccc",
        backgroundColor:"#fff"
    },
    chatItemImage: {
        width: 72,
    },
    chatContent:{
        flex:1,
        justifyContent:"flex-start"
    },
    chatTime:{
        width:40
    },
    chatName:{
        fontSize:16,
        color:"#333"
    },
    chatFirst:{
        fontSize:12,
        color:"#999"
    }
})
export default styles;