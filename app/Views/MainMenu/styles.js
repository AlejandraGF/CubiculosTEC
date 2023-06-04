import SharedStyles from '../Shared';
import {StyleSheet} from 'react-native';


const MainScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:SharedStyles.colorDef,
      //paddingTop: StatusBar.currentHeight,
    },
    banner: {
      flex:1,
      backgroundColor: SharedStyles.colorDef,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  //    justifyContent: 'center',
    },
    buttonView: {
      backgroundColor:SharedStyles.colorBG,
      alignSelf: 'center',
      flex:1.8,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius:50,
      borderTopRightRadius: 50,
    },
      button: {
        borderRadius:35,
        borderColor: SharedStyles.colorDark,
        width:350,
        height:100,
        alignItems: 'center',
        padding:15,
        backgroundColor:"rgba(255,255,255,0.8)",
        flexDirection: 'row',
        marginVertical:10
        
      },
      buttonText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: SharedStyles.colorDark,
        opacity:1.0
      }
  })

  export default MainScreenStyles;