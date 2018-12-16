import { Text,TouchableOpacity } from 'react-native';
import React from 'react'


 const Button =({onPress})=> {
    const {buttonStyle,textStyle} = styles;


    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle} >Log in</Text>
        </TouchableOpacity>
     
    )

}

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:10,
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor: '#007aff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ddd',
        marginLeft:5,
        marginRight:5
    }
}

export  {Button};
