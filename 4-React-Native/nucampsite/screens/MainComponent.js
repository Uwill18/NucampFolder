
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';


const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (<Stack.Navigator
    initialRouteName='Directory'
    screenOptions={{
        headerStyle: {
            backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff'
    }}
>
    <Stack.Screen name='Directory' 
                  component='DirectoryScreen'
                  options={{title: 'Campsite Directory'}}/>
    <Stack.Screen name='CampsiteInfo'
                  component='CampsiteInfoScreen'
                  options={({ route }) => ({
                    title: route.params.campsite.name
                })}
    />
</Stack.Navigator>);

 }



const Main = () => {
    
    return(
        <View style={{ flex: 1 , paddingTop:Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
     <DirectoryNavigator/>
    </View>
    );
};

export default Main;