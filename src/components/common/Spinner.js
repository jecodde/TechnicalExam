import { View, ActivityIndicator } from 'react-native';
import React from 'react';

const Spinner =({size}) =>{
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )
};

const styles ={
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignCenter:'center'
    }
}

export {Spinner};

