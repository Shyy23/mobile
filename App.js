import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, TouchableOpacity, Pressable, ScrollView,StatusBar } from 'react-native';

import styles,  {color} from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const App = () => {

  const [bg, setBg] = useState('transparent');
  const [bg2, setBg2] = useState('transparent');
  const handleBgIn = () => {
    setBg(color.hover);
  }
  const handleBgOut = () => {
    setBg('transparent');
  }
  const handleBgIn2 = () => {
    setBg2(color.hover);
  }
  const handleBgOut2 = () => {
    setBg2('transparent');
  }
 return (
  <View
  style={styles.container}
  >
    <View
    style={styles.header}
    >
      <View
      style={styles.headerTop}
      >
      
      <TouchableOpacity
      activeOpacity={1}
      onPressIn={()=>{handleBgIn()}}
      onPressOut={()=>{handleBgOut()}}
      >
        <View
        style={[styles.btn, {backgroundColor: bg}]}
        >
        <AntDesign name="left" size={24} color={color.white} />

        </View>
      </TouchableOpacity>
     

      <Text
      style={styles.title}
      >FAVORITE</Text>

      <TouchableOpacity
      activeOpacity={1}
      onPressIn={()=>{handleBgIn2()}}
      onPressOut={()=>{handleBgOut2()}}
      >
        <View
        style={[styles.btn, {backgroundColor: bg2}]}
        >
         <Ionicons name="ellipsis-vertical-sharp" size={24} color={color.white} />

        </View>
      </TouchableOpacity>
     
      </View>
      <View
      style={styles.headerBottom}
      >
        <View style={styles.option}>
          <Text style={styles.subtitle}>Film</Text>
          <Text style={[styles.subtitle, styles.active]}>Music</Text>
          <Text style={styles.subtitle}>Food</Text>
        </View>
        <View style={styles.line}></View>


      </View>
    </View>
    <View 
    style={styles.boxShadow}
    >

    </View>

    <ScrollView
    style={styles.contentContainer}
    >
      <View style={styles.content}>
        <View style={styles.card}>

        </View>
      </View>
    </ScrollView>


  </View>
 );
};


export default App;