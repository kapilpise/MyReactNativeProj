import React, { Component } from 'react';
import { TouchableOpacity, Alert, StyleSheet, View, Text, FlatList, Dimensions, Image, Switch } from 'react-native';

const { height, width } = Dimensions.get('window');
const itemWidth = (width - 50) / 2;
const numCol = 3;
export default class Dashboard extends Component {
    static navigationOptions = {
        header: null

    }
    constructor(props) {
        super(props);
        console.log("itemWidth ->", itemWidth);
        this.state = {
            data: [
                { id: "00", name: "Add Risk", img: "https://png.icons8.com/wired/100/ffffff/add.png" },
                { id: "01", name: "Appointment", img: "https://png.icons8.com/ios/100/ffffff/calendar.png" },
                { id: "02", name: "Project", img: "https://png.icons8.com/material-rounded/100/ffffff/project.png" },
                { id: "03", name: "Camera", img: "https://png.icons8.com/ios/100/ffffff/screenshot.png" },
                { id: "04", name: "Outbox", img: "https://png.icons8.com/ios/100/ffffff/outbox.png" },
                { id: "05", name: "Analytics", img: "https://png.icons8.com/ios/100/ffffff/combo-chart-filled.png" },
                { id: "06", name: "T & E", img: "https://png.icons8.com/ios/100/ffffff/overtime-filled.png" },
                { id: "07", name: "Report Notes", img: "https://png.icons8.com/wired/100/ffffff/report-card.png" },
                { id: "08", name: "Alerts", img: "https://png.icons8.com/ios/100/ffffff/google-alerts-filled.png" }
            ]

        };

    }
    showAlert = async () => {
        console.log("calling ", "+++++");
        // Alert.alert(
        //     item.name,
        //     'alertMessage for ' + item.name,
        //     [
        //         { text: 'Cancel', /* onPress: () => console.log('Cancel Pressed!') */ },
        //         { text: 'OK', /* onPress: this.onDeleteBTN  */ },
        //     ],
        //     { cancelable: false }
        // )
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({
            //     "type": "select",
            //     "args": {
            //         "table": "author",
            //         "columns": [
            //             "name"
            //         ],
            //         "limit": "1"
            //     }
            // })
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert("Author name at 0th index:  " + responseJson.userId);
                console.log("resp---", responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
           
            <View style={styles.container}>
                <View style={styles.title}>
                    <Image style={styles.iconName} source={require('../../proj/images/login_icon.png')} />
                    <Text style={styles.iconCounterText}>smart RE | Risk Enginner</Text>
                </View>
                <View style={styles.assgnmntContainer}>
                    <View style={styles.assgnmntItems}>
                        <Image style={styles.assgnmtIcon} source={require('../../proj/images/docs_icons.png')} />
                    </View>
                    <View style={styles.assgnmntItems}>
                        <Text style={styles.assgnmntCount}>0</Text>
                        <Text style={styles.assgnmntLbl}>New Assignment</Text>
                    </View>
                </View>
                <FlatList
                    style={styles.list}
                    data={this.state.data}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.to_item}
                                onPress={this.showAlert.bind(this)}>
                                <View style={styles.item}>
                                    <Text style={styles.text} >{item.name}</Text>
                                    <Image style={styles.iconCounter} source={{ uri: item.img }} />
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                <View style={styles.bottomtitle}>
                    <Text style={styles.bottomTime}>Monday 03 Sep 2018 | 12:33 PM</Text>
                    <Switch style={styles.bottomSwitch}
                        onValueChange={(value) => this.setState({ toggled: value })}
                        value={this.state.toggled} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#293946',
        flexDirection: 'column'
    },
    list: {
        marginRight: 4,
        marginLeft: 4,
    },
    assgnmntContainer: {
        flex: 0.4,
        flexDirection: 'row',
        backgroundColor: '#475764',
        marginBottom: 8,
        marginTop: 8,
        paddingBottom: 45,
        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,
    }, 
    assgnmntItems: {
        justifyContent: 'center',
        flex: 0.5,
    },
    assgnmtIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 34,
        width: 72,
        height: 72
    },
    assgnmntCount: {
        color: '#ffffff',
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 50,
    },
    assgnmntLbl: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    }, item: {
        flex: 1,
        flexGrow: 1,
        flexBasis: 0,
        padding: 8,
        minWidth: this.itemWidth,
        maxWidth: this.itemWidth,
        height: 108,
        margin: 2,
        backgroundColor: '#475764'
    },
    to_item: {
        flex: 1,
        flexGrow: 1,
        flexBasis: 0,
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16
    },
    title: {
        flexDirection: "row",
        backgroundColor: '#334353'
    },
    iconName: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 25,
        height: 25
    },
    iconCounter: {
        alignSelf: 'flex-end',
        marginTop: 40,
        width: 35,
        height: 35
    },
    iconCounterText: {
        color: '#ffffff',
        fontSize: 18,
        textAlignVertical: 'center'
    },

    bottomTime: {
        color: '#ffffff',
        fontSize: 16,
        textAlignVertical: 'center'
    },
    bottomtitle: {
        flexDirection: "row",
        backgroundColor: '#334353',
        padding: 5,
        justifyContent: 'space-between',
    },
    bottomSwitch: {
        alignItems: 'center',
        margin: 10,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});