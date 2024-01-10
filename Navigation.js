import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import NewOverview from './screens/NewOverview';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen}  options={ { tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({focused}) => focused ? ( <Entypo name="home" size={24} color="#003580" /> ): (<AntDesign name="home" size={24} color="black" />) } }/>
        <Tab.Screen name="Saved" component={SavedScreen} options={ { tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({focused}) => focused ? ( <Entypo name="save" size={24} color="#003580" /> ): (<AntDesign name="save" size={24} color="#003580" />) } } />
      </Tab.Navigator>
    );
  }
  // options={ { tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({focused}) => focused ? ( <Entypo name="home" size={24} color="#003580" /> ): (<AntDesign name="home" size={24} color="black" />) } }

  // options={ { tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({focused}) => focused ? ( <Entypo name="save" size={24} color="#003580" /> ): (<AntDesign name="save" size={24} color="#003580" />) } } 

  const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false}}/>
        <Stack.Screen name="Overview" component={NewOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
