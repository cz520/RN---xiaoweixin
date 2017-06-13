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
import styles from "../pages/style.js"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }
    toggle() {
        const height = this.state.height;
        if (height == 0) {
            this.setState({
                height: 175
            })
        } else {
            this.setState({
                height: 0
            })
        }
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.headName}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>微信</Text>
                    </View>
                    <View style={styles.headSearch}>
                        <Image
                            source={require("../../images/search.png")}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                    <TouchableHighlight
                        onPress={this.toggle.bind(this)}
                        style={styles.headerJia}
                    >
                        <Image
                            source={require("../../images/jia.png")}
                            style={{ width: 22, height: 22 }}
                        />
                    </TouchableHighlight>
                </View>
                <View style={[styles.headerJiaList, { height: this.state.height }]}>
                    <ScrollView>
                        <TouchableHighlight>
                            <View style={styles.headerJiaListItem}>
                                <Text style={styles.headerJiaListItemText}>发起群聊</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={styles.headerJiaListItem}>
                                <Text style={styles.headerJiaListItemText}>添加朋友</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={styles.headerJiaListItem}>
                                <Text style={styles.headerJiaListItemText}>扫一扫</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={styles.headerJiaListItem}>
                                <Text style={styles.headerJiaListItemText}>收付款</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={styles.headerJiaListItem}>
                                <Text style={styles.headerJiaListItemText}>帮助与反馈</Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            </View>
        );
    }
}