import React from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../components/CustombButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";

const { height, width } = Dimensions.get('screen')

const Home = () => {
    const catgoriesList = [
        {
            id: 1,
            name: 'Burger',
            image: require('../../../Assets/Images/Burger.png')
        },
        {
            id: 2,
            name: 'Donats',
            image: require('../../../Assets/Images/Donats.png')
        },
        {
            id: 3,
            name: 'Pizza',
            image: require('../../../Assets/Images/Pizza.png')
        },
        {
            id: 4,
            name: 'Hot Dog',
            image: require('../../../Assets/Images/HotDog.png')
        },
        {
            id: 5,
            name: 'Pasta',
            image: require('../../../Assets/Images/Pasta.png')
        },

    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={style.HeaderConatiner}>
                    <View style={style.Header}>
                        <CustomButton
                            src={require('../../../Assets/Images/Menu.png')}
                            buttonView={style.menuButton}
                            imageStyle={style.menuImg}
                        />
                        <View style={{ width: '60%', alignItems: 'center' }}>
                            <Text>Deliver to </Text>
                            <Text>Address</Text>
                        </View>
                        <View style={style.ProfileView}>

                        </View>
                    </View>
                </View>
                <View style={style.searchView}>
                    <CustomInput
                        inputStyle={style.inputView}
                    />
                </View>
                <View style={style.categoriesView}>
                    <ScrollView horizontal>
                        {
                            catgoriesList.map((item) => {
                                return (
                                    <View key={item.id} style={style.ItemList}>
                                        <Image source={item.image} style={style.ItemImage} />
                                        <Text>{item.name}</Text>
                                    </View>

                                )
                            })
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    menuButton: {
        width: '13%',
        height: '55%',
        borderRadius: 10,
        // marginTop: 30,
        marginLeft: 19,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    HeaderConatiner: {
        width: '100%',
        height: height * 0.09,
        // backgroundColor: 'pink',
    },
    ProfileView:{
        width: '13%',
        height: '55%',
        borderRadius: 30,
        backgroundColor: 'white',
        marginRight: 10
    },
    menuImg: {
        width: 20,
        height: 25
    },
    searchView: {
        width: '100%',
        height: height * 0.1,
        // backgroundColor: 'red'
    },
    Header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    // search:{
    //     width:'50%',
    //     height:40
    // },
    inputView: {
        width: '80%',
        height: height * 0.05,
        alignSelf: 'center',
        borderRadius: 10
    },
    categoriesView: {
        height: height * 0.15,
        // backgroundColor: 'pink'
    },
    ItemList: {
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 15,
        width: width * 0.2,
        height: height * 0.1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    ItemImage: {
        width: 60,
        height: 50,
        resizeMode: 'contain'
    }
})
export default Home