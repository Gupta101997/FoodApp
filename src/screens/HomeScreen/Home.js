import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../components/CustombButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";

const { height, width } = Dimensions.get('screen')

const Home = () => {

    const [selected, setselected] = useState(null);
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

    const Food = [
        {
            id: 1,
            item: `Spaghetti with ${'\n'}shrimp and basil`,
            image: require('../../../Assets/Images/Spagheti1.png'),
            details: '',
        },
        {
            id: 2,
            item: `Pizza margarita ${'\n'}European`,
            image: require('../../../Assets/Images/beef.png'),
            details: '',
        },
        // {
        //     id:3,
        //     item:'Spaghetti with shrimp and basil',
        //     image:'',
        //     details:'',
        // }
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[style.ItemList, { backgroundColor: item.id == selected ? '#6ED39D' : 'white' }]}
                                        onPress={() => {
                                            setselected(item.id)
                                            console.log(item.id);
                                        }}
                                    >
                                        <Image source={item.image} style={style.ItemImage} />
                                        <Text>{item.name}</Text>

                                    </TouchableOpacity>

                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View style={{}}>
                    <ScrollView>
                        {Food.map((item) => {
                            return (
                                <TouchableOpacity key={item.id} style={{ width: '90%', height: height * 0.15,borderColor:'#FF6B57',
                                 borderWidth: 1, alignSelf: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around',borderRadius:10 }} >
                                    <Image
                                        source={item.image}
                                        style={{ width: 100, height: 100, borderRadius: 20,marginTop:10 }}
                                    />
                                    <Text style={{color:'black',fontWeight:'900',fontSize:16,marginTop:15}}>{item.item}</Text>
                                    <TouchableOpacity style={{width:80,height:40,alignItems:'center',marginTop:20,backgroundColor:'#FF6B57',borderRadius:20}}>
                                        <Text style={{paddingTop:7,color:'white'}}>Add Cart</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        })}
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
    ProfileView: {
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
        // backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 30
    },
    ItemImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 30
    }
})
export default Home