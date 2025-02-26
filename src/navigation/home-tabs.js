import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/home-screen';
import NotificationScreen from '../Screens/profiles/notifications-screen';
import SettingScreen from '../Screens/profiles/settings-screen';
import ShopScreen from '../Screens/shop/shop-screen';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
    return (  // ✅ Added return statement
        <Tab.Navigator 
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                },
                tabBarActiveTintColor:'yellow',
                // tabBarInactiveTintColor: 'red',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'HomeTabs') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === 'Notification') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    }
                    else if (route.name === 'Paramètre') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            >
            <Tab.Screen 
                name="HomeTabs" 
                component={HomeScreen}
                options={{
                    title: 'Home'
                }} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Paramètre" component={SettingScreen} />
        </Tab.Navigator>
    );
};

export const ShopTabs = () => {
    return (  // ✅ Added return statement
        <Tab.Navigator 
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                },
                tabBarActiveTintColor:'yellow',
                // tabBarInactiveTintColor: 'red',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'HomeTabs') {
                        iconName = focused ? 'storefront' : 'storefront-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            >
            <Tab.Screen 
                name="ShopTabs" 
                component={ShopScreen}
                options={{
                    title: 'Shop'
                }} />
            {/* <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Paramètre" component={SettingScreen} /> */}
        </Tab.Navigator>
    );
};