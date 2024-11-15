import { StyleSheet, StatusBar } from "react-native";

export const color = {
    white: 'hsl(255, 100%, 95%)',
    first: 'hsl(255, 100%, 70%)',
    shadow: 'rgba(117, 82, 224, 0.80)',
    hover: 'hsl(255, 70%, 40%)',
    line: 'hsl(255, 100%, 80%)',
    card: 'hsl(255, 90%, 70%)',
    cardShadow: "rgba(140, 102 , 255, 0.8)",
};
export const font = {
    font_bold: '600',
    font_semi_bold: '500',
    font_medium: '400',
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
    alignItems: 'center',
    zIndex: 100,
   },

   shadowHeader: {
    shadowColor: color.shadow, // Warna bayangan
    shadowOffset: { width: 0, height: 4 }, // Mengatur posisi bayangan (horizontal, vertical)
    shadowOpacity: 1, // Transparansi bayangan
    shadowRadius: 4.65, // Radius atau tingkat blur bayangan
    elevation: 8, // Untuk bayangan di Android
    borderWidth: 2,
    borderColor: color.shadow
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
   },
   cardWrapper:{
    width: '90%',
    paddingTop: 5,
    gap: 8
   },
   card:{
    width: '100%',
    backgroundColor: color.card,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    zIndex: 10,
    gap: 10

   },
   shadowCard:{
    shadowColor: color.cardShadow,
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 1,
    shadowOpacity: 0.8,
    elevation: 15,
    
   },
   contents:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    
   },
   content:{
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
   },
   info:{
    flexShrink: 1,
    rowGap: 2
   },
   img:{
    width: 100,
    height: 100,
    borderRadius: 5,
   },
   singer:{
    marginTop:-5,
    fontSize: 10
    
   },
   description:{
    fontSize: 12,
    textAlign: 'justify'
   },
   judulMusic:{
    fontSize: 15,
    fontWeight: font.font_bold
    
   },

   cardShadow:{
    width: '100%',
    height:0,
    backgroundColor: color.cardShadow,
    position:'absolute',
    
    bottom:0,
    elevation: 15,
    zIndex: 1,
   },
   btnGroup:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

   }

   
});

export default styles;