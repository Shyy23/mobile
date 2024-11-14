import { StyleSheet, StatusBar } from "react-native";

export const color = {
    white: 'hsl(255, 100%, 95%)',
    first: 'hsl(255, 100%, 70%)',
    shadow: 'hsl(255, 70%, 60%)',
    hover: 'hsl(255, 70%, 40%)',
    line: 'hsl(255, 100%, 80%)'
};

const styles = StyleSheet.create({
   container:{
    backgroundColor: color.white,
    flex: 1,
   },

   header:{
    height: 150,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: 15,
    backgroundColor: color.first,
    width: '100%',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    zIndex: 100,
   },
   headerTop:{
    paddingTop: StatusBar.currentHeight + 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
   },


   boxShadow:{
    width: '100%',
    height:150,
    backgroundColor: color.shadow,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position:'absolute',
    
    top:3,
    elevation: 15,
    zIndex: 1,
   },
   title:{
    fontSize: 24,
    fontWeight: '600',
    color: color.white
   },
   btn:{
    padding:5,
    borderRadius: 99,
   },
   headerBottom:{
    flexDirection: 'column',
    gap: 5,
    paddingBottom: 20,
    width: '100%'
   },
   option: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: color.line,
    borderBottomRadius: 99,
    paddingBottom: 3,
    zIndex: 1
   },

   line:{
    alignSelf: 'center',
    width: 50,
    height: 4,
    backgroundColor: color.white,
    borderRadius: 99,
    position: 'absolute',
    bottom: 19,
    zIndex: 10
   },
   subtitle:{
    color: color.white,
    fontSize: 12
   },

   active:{
    fontWeight: '600',
    fontSize: 15
   }
   
});

export default styles;