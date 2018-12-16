import React from 'react';

import {Text,StyleSheet,View} from 'react-native';


 const Header =(props)=> {
    return(
        <View style={styles.viewStyle}>
    
             <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )
   
}

const styles = StyleSheet.create({
    viewStyle:{
        
        backgroundColor:'#007aff',
        justifyContent:'center',
        alignItems: 'center',
        height:60,
        paddingTop:15,
        borderBottomWidth:1,
        paddingBottom:15,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        
    },
    textStyle:{
        fontSize:30 
    }

  });

export  {Header};
