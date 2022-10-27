import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector } from 'react-redux';
import { Home } from './src/screens/Home';
import { Cart } from './src/screens/Cart';
import { ProductDetail } from './src/screens/ProductDetail';
import { store } from './src/app/store';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const StackComponent = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Product detail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const { products } = useSelector((state) => state)

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackComponent}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={26}/>
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cart" size={26}/>
            ),
            tabBarBadge: products.length || null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
