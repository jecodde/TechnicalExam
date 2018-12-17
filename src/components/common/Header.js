// Import libraries for making a component
import React from 'react';
import { Text, View,Image } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle,container } = styles;

  return (
    <View style={container}>
    <Image style={styles.logo} source={require('../../../assets/Logo.png')} />
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  // viewStyle: {
  //   backgroundColor: '#F8F8F8',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 60,
  //   paddingTop: 15,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   elevation: 2,
  //   position: 'relative'
  // },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  textStyle: {
    fontSize: 20
  },
  logo: {
    //flex:1,
    height: 414,
    width: 606,
    alignItems: 'center',
    justifyContent: 'center',
   
  
    //resizeMode: 'stretch'
  }
};

// Make the component available to other parts of the app
export { Header };