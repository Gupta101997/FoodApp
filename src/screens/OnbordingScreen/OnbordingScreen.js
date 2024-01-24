

import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import CustomButton from '../../../components/CustombButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const OnbordingScreen = () => {

    const Navigation = useNavigation()
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>

                <View style={styles.boxContainer}>
                    <Image
                        style={styles.backImg}
                        source={require('../../../Assets/Images/Group3.png')}
                    />
                </View>
                <View style={styles.contentsView}>
                    <Text style={styles.textHeader}>
                        I don't feel like{'\n'}cooking.Let's {'\n'}order food{'\n'}delivery.
                    </Text>
                </View>
                <View style={styles.btnContainer}>
                    <CustomButton
                        onPress={() => { }}
                        InputText={'Sign Up'}
                        buttonView={styles.btn}
                        textStyle={{ color: "white" }}
                    />
                    <CustomButton
                        onPress={() => {Navigation.navigate('Login')}}
                        InputText={'Log in'}
                        buttonView={styles.btn2}
                        textStyle={{ color: "white" }}
                    />
                </View>

            </View>

            <View style={styles.footer}>
                <Image
                    style={styles.Img}
                    source={require('../../../Assets/Images/wepik.png')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#FF6B57',

    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
        // justifyContent: 'flex-end'
    },

    footer: {
        width: '100%',
        height: '70%',
        position: 'absolute'
    },
    Img: {
        width: '100%',
        height: '70%',
    },
    backImg: {
        tintColor: '#E7E5E5',
        height: '70%',
        width: '70%',
    },
    boxContainer: {
        marginTop: '25%',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    contentsView: {
        position: 'absolute',
        height: '100%',
        width: '75%',
        justifyContent: 'center'
    },
    textHeader: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: 'black',
        paddingTop: 150
    },
    btn: {
        width: '35%',
        height: '65%',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#242731',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn2: {
        width: '35%',
        height: '65%',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#242731',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnContainer: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        top: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default OnbordingScreen;
