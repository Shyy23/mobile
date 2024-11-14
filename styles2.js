import {StyleSheet, StatusBar} from 'react-native';

const style = StyleSheet.create ({
    header:{
        flexDirection: 'column',
    },
    container:{
        flex: 1,
        backgroundColor: '#FFFF50',
        paddingTop: StatusBar.currentHeight,
    },
    wrapper:{
        padding: 10
    }
    
});

export default style;