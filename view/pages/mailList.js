"use strict"
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView
} from "react-native";

import styles from "./style"
import Header from "../component/header"

var data = {
    A: [
        {
            name: "阿西巴",
            image: require("../../images/touxiang.jpg")
        },
        {
            name: "艾青",
            image: require("../../images/touxiang1.jpg")
        }
        ,
        {
            name: "爱情海上没有泪",
            image: require("../../images/touxiang2.jpg")
        }
    ],
    B: [
        {
            name: "不飞人",
            image: require("../../images/touxiang3.jpg")
        },
        {
            name: "芭啦芭啦樱之花",
            image: require("../../images/touxiang1.jpg")
        }
        ,
        {
            name: "贝壳",
            image: require("../../images/touxiang2.jpg")
        }
    ],
    C: [
        {
            name: "慈爱",
            image: require("../../images/touxiang.jpg")
        }
    ],
    H: [
        {
            name: "海明威",
            image: require("../../images/touxiang3.jpg")
        }
    ]
}

export default class MailList extends Component {
    static navigationOptions = {
        tabBarLabel: "通讯录",
        tabBarIcon: ({ focused }) => {
            if (focused) {
                return <Image
                    source={require('../../images/mailListAction.png')}
                    style={{ width: 24, height: 24 }}
                />
            } else {
                return <Image
                    source={require('../../images/mailList.png')}
                    style={{ width: 24, height: 24 }}
                />
            }
        }
    }
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(data),
        };
    }

    renderHead(rowData) {
        return (
            <View style={styles.chatItem}>
                <Image
                    source={rowData.image}
                    style={{ width: 30, height: 30,margin: 8  }}
                />
                <Text>
                    {rowData.name}
                </Text>
            </View>
        )
    }
    renderSectionH(sectionData, sectionID) {
        return (
            <View style={{ backgroundColor: "#f1f1f1", height: 30,justifyContent:"center" }}>
                <Text>{sectionID}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <Header />
                <View style={{ flex: 1 }}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderHead.bind(this)}
                        renderSectionHeader={this.renderSectionH.bind(this)}
                    />
                </View>
            </View>
        );
    }
}