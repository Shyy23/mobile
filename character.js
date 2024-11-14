import React from 'react';
import {View, Text, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import style from './styles2';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const App = () => {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity activeOpacity={.5}>
                <View style={style.btn}>
                <AntDesign name="left" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <Text style={style.judul}>FAVORITE</Text>

                <TouchableOpacity activeOpacity={.5}>
                <View style={style.btn}>
                <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
                </View>
                </TouchableOpacity>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    );
}

export default App;