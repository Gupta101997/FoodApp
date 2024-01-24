import React from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import CustomHeader from "../../../components/CustomHeader/CustomHeader";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/CustombButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('screen')
const SignUp = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                src={require('../../../Assets/Images/BG1.png')}
                BackImage={require('../../../Assets/Images/backarrow.png')}
                text1={'SignUp'}
                text2={`Please sign up to your${'\n'}existing account`}
                imageStyle={styles.backImage}
                onPress={()=>{navigation.goBack()}}
            />
            <View style={styles.container}>
                <View style={styles.innercontainer}>
                    <View style={styles.boxView}>
                    <CustomInput
                            placeholder={'Name'}
                            inputStyle={styles.inputView}
                            Name={'Full Name'}
                            viewStyle={styles.viewStyle}
                            textStyle={styles.text}
                        />
                        <CustomInput
                            placeholder={'Email'}
                            inputStyle={styles.inputView}
                            Name={'Email'}
                            viewStyle={styles.viewStyle}
                            textStyle={styles.text}
                        />
                        <CustomInput
                            placeholder={'Password'}
                            inputStyle={styles.inputView}
                            Name={'Password'}
                            viewStyle={styles.viewStyle}
                            textStyle={styles.text}
                        />
                        
                        <CustomButton
                            InputText={'Sign Up'}
                            buttonView={styles.loginButton}
                            textStyle={styles.loginText}
                        />
                        <View>
                            <Text style={styles.bottomTxt}>Or Sign up with </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                            <CustomButton
                                src={require('../../../Assets/Images/Facebook.png')}
                                imageStyle={styles.fbButton}
                                buttonView={styles.buttonView}
                            />
                            <CustomButton
                                src={require('../../../Assets/Images/Google.png')}
                                imageStyle={styles.googlebtn}
                                buttonView={styles.buttonView}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, }}>
                        <Text>Already have an account ?</Text>
                        <CustomButton
                            InputText={'Login'}
                            textStyle={styles.singUp}
                            buttonView={styles.singUpBtn}
                            onPress={()=>{navigation.navigate('Login')}}
                        />
                    </View>
                </View>
            </View>
        </View >

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#191B2F',
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        position: 'absolute',
    },
    innercontainer: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    backImage: {
        width: 10,
        height: 20
    },
    boxView: {
        width: '90%',
        height: height * 0.6,
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 10
    },
    viewStyle: {
        width: '90%',
        height: '15%',
        alignSelf: 'center',
        marginTop: 10,
        // backgroundColor:'white'
    },
    inputView: {
        width: '90%',
        height: height * 0.05,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: '#FF6B57',
    },
    text: {
        color: 'black'
    },
    forgot: {
        width: '35%',
        height: height * 0.03,
        alignSelf: 'center',
        marginTop: 10,
    },
    textStyle: {
        color: '#FF6B57'
    },
    loginButton: {
        width: '50%',
        height: height * 0.06,
        backgroundColor: '#FF6B57',
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    loginText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    bottomTxt: {
        alignSelf: 'center',
        paddingTop: 10
    },
    buttonView: {
        width: '20%',
        height: height * 0.06,
        margin: 10
        // backgroundColor: 'yellow'
    },
    fbButton: {
        width: 50,
        height: 50
    },
    googlebtn: {
        width: 50,
        height: 50
    },
    singUp: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF6B57'
    },
    singUpBtn: {
        // backgroundColor:'red',

        width: width * 0.15,
        height: height * 0.03
    }
})
export default SignUp  