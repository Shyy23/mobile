import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, ScrollView, StyleSheet, Pressable, Alert,  TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';



const App = () => {
  const[warna, setWarna]=useState('#FFFF50');
  useEffect(() => {},[warna]);
  const changeWarna = () => {
    setWarna((prevWarna) => (prevWarna === "#FFFF50" ? "#036580" : "#FFFF50")  );
  }

  const changeWarna2 = () => {
    setWarna('#22DD33');
  }
  const changeWarna3 = () => {
    setWarna('#EE6742');
  }
  const changeWarna4 = () => {
    setWarna('#222222');
  }
  const changeWarna5 = () => {
    setWarna('#6070FF');
  }
  const changeWarna6 = () => {
    setWarna('#0054dd');
  }
  const changeWarna7 = () => {
    setWarna('#22ff00');
  }
  const changeWarna8 = () => {
    setWarna('#dddddd');
  }
 return (
  <ScrollView
  contentContainerStyle={styles.contentContainer}
  >
  <View
  style={[styles.container,  {backgroundColor: warna}]}
  >


   

  <View 
  style={styles.row}
  >
      <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {changeWarna()}}
      >
        <View 
        style={styles.button}>
        <Text
        style={styles.btnText}
        >Warna 1</Text>
        <AntDesign name="rightcircle" size={24} color="#FFFF50" />
          
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {changeWarna2()}}
      >
        <View 
        style={styles.button}>
        <Text
        style={styles.btnText}
        >Warna 2</Text>
        <AntDesign name="rightcircle" size={24} color="#FFFF50" />
          
        </View>
      </TouchableOpacity>

      </View>
  <View 
  style={styles.row}
  >
      <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {changeWarna3()}}
      >
        <View 
        style={styles.button}>
        <Text
        style={styles.btnText}
        >Warna 3</Text>
        <AntDesign name="rightcircle" size={24} color="#FFFF50" />
          
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {changeWarna4()}}
      >
        <View 
        style={styles.button}>
        <Text
        style={styles.btnText}
        >Warna 4</Text>
        <AntDesign name="rightcircle" size={24} color="#FFFF50" />
          
        </View>
      </TouchableOpacity>

      </View>
      <View 
      style={styles.row}
      >
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {changeWarna5()}}
          >
            <View 
            style={styles.button}>
            <Text
            style={styles.btnText}
            >Warna 5</Text>
            <AntDesign name="rightcircle" size={24} color="#FFFF50" />
              
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {changeWarna6()}}
          >
            <View 
            style={styles.button}>
            <Text
            style={styles.btnText}
            >Warna 6</Text>
            <AntDesign name="rightcircle" size={24} color="#FFFF50" />
              
            </View>
          </TouchableOpacity>

          </View>
          
      <View 
      style={styles.row}
      >
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {changeWarna7()}}
          >
            <View 
            style={styles.button}>
            <Text
            style={styles.btnText}
            >Warna 7</Text>
            <AntDesign name="rightcircle" size={24} color="#FFFF50" />
              
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {changeWarna8()}}
          >
            <View 
            style={styles.button}>
            <Text
            style={styles.btnText}
            >Warna 8</Text>
            <AntDesign name="rightcircle" size={24} color="#FFFF50" />
              
            </View>
          </TouchableOpacity>

          </View>

        
      
  </View>
  </ScrollView>
 );
};

const styles = StyleSheet.create({
contentContainer:{
  flexGrow: 1,

},
text:{
fontSize: 20,
fontWeight: '600'
},

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 
  paddingTop: 25,
  gap: 25,
},
row:{
flexDirection: 'row',
gap: 20,
},
button: {
backgroundColor: 'hsl(255, 100%, 70%);',
padding: 20,
borderRadius: 5,
flexDirection: 'row',
gap: 10,
alignItems: 'center',
justifyContent: 'space-between'
},
btnText: {
color: '#FFFF50',
fontSize: 15,
fontWeight: '600',
letterSpacing: -.2,
}
});

export default App;