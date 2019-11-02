import React, { Component } from 'react';
import { ActivityIndicator, Keyboard, Alert, TouchableOpacity, StyleSheet, View, Image, TextInput, Text, ToastAndroid } from 'react-native';

import { connect } from 'react-redux'
import { userLogin } from '../Actions/action'
class Login extends Component {

    static navigationOptions = {
        header: null
    }
    constructor(props) {

        super(props);
        { console.log("Props >>>>", this.props) }

        this.state = {
            email: '',
            password: '',
        };
    }


    showMessage(msg) {
        Alert.alert(
            "Invalid inputs",
            msg
        )
    }

    render() {
        const { data, isLoading, isError, errMsg, } = this.props
        return (
            <View style={styles.coontainer}>
                <View style={styles.loginImageContainer}>
                    <Image style={styles.logo} source={require('../../proj/images/logo_colored.png')} />
                </View>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num'
                    onChangeText={email => this.setState({ email })}
                    placeholderTextColor='rgba(225,225,225,0.7)'>
                </TextInput>

                <TextInput style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    onChangeText={password => this.setState({ password })}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />

                {<TouchableOpacity style={styles.buttonContainer}
                    onPress={() => { this.props.navigation.navigate("Dashboard"); }}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                /*<TouchableOpacity style={styles.buttonContainer}
                    onPress={this.validation}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>*/
                }
                                 
                {

                    data == "200" /*&& this.props.navigation.navigate("Dashboard")*/
                }
                {
                    isLoading ? <ActivityIndicator style={{ padding: 20 }} size="large" color="#fefefe" /> : null
                }
            </View>

        );
    }
    validation = () => {
        Keyboard.dismiss()
        const { email, password } = this.state
        console.log("email", email);
        console.log("password", password);
        if (email.trim() == "") {
            this.showMessage("Please enter Email")
        }
        else if (password.trim() == "") {
            this.showMessage("Please enter Password")
        }
        else if (!this.validateEmail(email)) {
            this.showMessage("Email is not valid")
        }
        else if (password.trim().length < 6) {
            this.showMessage("Password should be minimum of 6 char")
        } else {
            this.setState({ email: email, password: password })
            this.props.doLogin()
        }
    };
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    callLogin = () => {
        // this.props.navigation.navigate("Dashboard");
        props.doLogin()
    }
}
const styles = StyleSheet.create({
    coontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#2c3e50",
    },
    loginImageContainer: {

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        borderWidth: 1,
        borderColor: '#007ee4',
        alignSelf: 'stretch',
        margin: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        alignSelf: 'stretch',
        margin: 10,
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: 150,
        height: 150
    }
});
function mapStateToProps(state) {
    console.log("In mapStateToProps->", state)
    return {
        data: state.login.data,
        isLoading: state.login.isLoading
    }
}

function mapDispatchToProps(dispatch, email, password) {
    console.log("In mapDispatchToProps->", "")
    return {
        doLogin: () => dispatch(userLogin(email, password))
    }
}
//export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login