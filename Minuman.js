import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ padding: 10, fontSize: 50, color: 'black', textAlign: 'center' }}>
        Selamat Datang di Restoran Pintar
        </Text>
        <Button
          title="Masuk Untuk Memilih Menu"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Menu Pilihan',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'daftar makanan',
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ padding: 10, fontSize: 50, color: 'red', textAlign: 'center' }}>
       Restoran Pintar
        </Text>

        <Button
          title="Menu Makanan"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title="menu minuman"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title="kembali"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#141175',
      },
      headerTintColor: '#c6a80d',
      headerTitleStyle: {
        fontWeight: 'black',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
