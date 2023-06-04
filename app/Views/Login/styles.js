import SharedStyles from '../Shared';
import {StyleSheet} from 'react-native';

const loginStyle = StyleSheet.create({
    input: {
      width: '90%',
      paddingLeft:15,
      borderWidth:2,
      borderRadius:10,
      borderColor: '#202021',
      fontSize: SharedStyles.buttonsSizeFont,
      flex : 0.17
    },
    buttonView: {
      flex:0.5,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    button: {
      //borderWidth:2,
      borderRadius:15,
      //borderColor: SharedStyles.colorDef,
      width: 260,
      paddingEnd: 10,
      alignItems: 'center',
      backgroundColor:SharedStyles.colorDef
    },
    buttonText: {
      textAlign: 'center',
      fontWeight:'bold',
      padding: 10,
      fontSize: SharedStyles.buttonsSizeFont,
      color: 'white'
    },
  
      container: {
        flex: 1,
      },
      banner:{
        flex: 0.3,
        backgroundColor :SharedStyles.colorBG,
        alignContent:'center',
        justifyContent:'center',
      },
      inner: {
        padding: 24,
        flex: 1,
        backgroundColor :SharedStyles.colorBG,
        justifyContent: 'space-around',
      },
      header: {
        fontSize: 36,
        marginBottom: 48,
      },
      textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
      },
      btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
    });

export default loginStyle;