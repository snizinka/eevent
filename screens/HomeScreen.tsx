import React, { useState } from 'react';
import { SignInButton, IStyle } from '../components/SignInButton'
import {
  Text,
  useColorScheme,
  View,
  TextInput,
  ViewStyle,
  StyleSheet
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function HomeScreen({ route }): React.JSX.Element {
  return (
    <View>
      <Text>Favorites</Text>
    </View>
  )
}

const mainContainerStyles = (isDarkMode: boolean): ViewStyle => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  }
}

const logoStyles = StyleSheet.create({
  wrapper: {
    marginTop: 100
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20
  },
  email: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 20
  },
  inputSection: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20
  },
  privacyAndPolicyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E6EBE5',
    padding: 10,
    width: '100%'
  },
  privacyAndPolicyText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
    backgroundColor: 'yellow',
  }
})

const singInStyles = StyleSheet.create({
  wrapper: { display: 'flex', flexDirection: 'column', rowGap: 10, marginBottom: 10 }
})

const googleSingInStyles: IStyle = {
  containerStyles: {
    borderColor: 'transparent',
    backgroundColor: '#5583EC',
  },
  contentStyles: {
    color: 'white',
    fontSize: 16
  }
}

const usernameOrEmailInputStyles: ViewStyle = {
  borderWidth: 1,
  borderColor: '#E4EBE4',
  borderStyle: 'solid',
  borderRadius: 10,
  height: 40,
  paddingHorizontal: 10
}

const continueWithEmailStyles: IStyle = {
  containerStyles: {
    borderColor: 'transparent',
    backgroundColor: '#4EA52F',
  },
  contentStyles: {
    color: 'white',
    fontSize: 15
  }
}

export default HomeScreen;
