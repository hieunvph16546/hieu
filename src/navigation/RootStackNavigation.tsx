import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar, useColorScheme, SafeAreaView } from 'react-native';
import Login from 'features/login';
import AppTabNavigation, { AppTabParamList } from './AppTabNavigation';
// import Dialog from 'features/dialog';
// import CreateCalendar from 'features/create-calendar';
// import UpdateCalendar from 'features/update-calendar';
// import TodoListEvent from 'features/todolist-event';
// import TodoUpdate from 'features/todolist-event-update';
import { useAppUser } from 'context/AppUserContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Covid from 'features/covid';
import Home from 'features/home';
import Insurancetaxbanking from 'features/insurancetaxbanking';
import Socialinsurance from 'features/insurancetaxbanking/Fage/social_insurance';
import Headerinsurance from 'features/insurancetaxbanking/Fage/health_Insurance';
import Codetaxnumber from 'features/insurancetaxbanking/Fage/code_tax_number';
import Accountbank from 'features/insurancetaxbanking/Fage/account_bank';
import Updatecodetax from 'features/insurancetaxbanking/update/Updatecodetax';
import Updatesocialinsurance from 'features/insurancetaxbanking/update/updatesocialinsurance';
import Updatebankaccount from 'features/insurancetaxbanking/update/Updateaccountbank';
import Updatehealthinsurance from 'features/insurancetaxbanking/update/Updatehealthinsurance';
export type RootStackParamList = {
  Login: undefined;
  AppTab: NavigatorScreenParams<AppTabParamList>; //Lấy params trong screen da khai bao tai apptabparams
  Dialog: undefined;
  UpdateTodo: undefined;
  CreateTodoEvent: undefined;
  UpdateCalendar: undefined;
  CreateCalendar: undefined;
  Tariff: undefined;
  Overlay: undefined;
  Interest: undefined;
  CustomerDetail: undefined;
  SearchAccount: undefined;
  SaleFlow: undefined;
  ModalPickAddress: undefined;
  ModalPickIndustry: undefined;
  SaleOpportunityDetail: undefined;
  SaleOpportunityAdd: undefined;
  ServiceProductDetail: undefined;
  PotentialCustomerCreate: undefined;
  AddRole: undefined;
  CameraDetectPaper: undefined;
  CreateSign: undefined;
  PotentialCustomerDetail: undefined;
  InsuranceSalesHub: undefined;
  TargetDetail: undefined;
  Socialinsurance: undefined;
  HealthInsurance: undefined;
  Hodetaxnumber: undefined;
  Hccountbank: undefined;
  Updatecodetax: undefined;
  Updatesocialinsurance: undefined;
  Updatehealthinsurance: undefined;
  Updatebankaccount: undefined;
  Insurancetaxbanking: undefined;

  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  } as unknown;
  const { getDetailUserLoginInfo, resetTimeOut } = useAppUser();
  const detailUserInfo = getDetailUserLoginInfo();

  /**options Show Screen cho thằng App Tab */
  const groupStackAppTabScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    presentation: 'transparentModal',
  };

  const Tab = createBottomTabNavigator();

  const MyTabs = () => {
    return (
      <Tab.Navigator screenOptions={() => groupStackAppTabScreenOptions} initialRouteName="Feed">
        <Tab.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Covid}
          options={{
            tabBarLabel: 'Covid',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bell" color={color} size={size} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Covid}
          options={{
            tabBarLabel: 'Covid',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Profile1"
          component={Covid}
          options={{
            tabBarLabel: 'Covid',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Profile2"
          component={Covid}
          options={{
            tabBarLabel: 'Covid',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <SafeAreaView
      style={backgroundStyle}
      onStartShouldSetResponderCapture={() => {
        resetTimeOut();
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {detailUserInfo ? (
        <RootStack.Navigator>
          <RootStack.Group screenOptions={() => groupStackAppTabScreenOptions}>
            <RootStack.Screen name="MyTabs" component={MyTabs} />
            <RootStack.Screen name="Insurancetaxbanking" component={Insurancetaxbanking} />
            <RootStack.Screen name="Socialinsurance" component={Socialinsurance} />
            <RootStack.Screen name="Headerinsurance" component={Headerinsurance} />
            <RootStack.Screen name="Codetaxnumber" component={Codetaxnumber} />
            <RootStack.Screen name="Accountbank" component={Accountbank} />
            <RootStack.Screen name="Updatecodetax" component={Updatecodetax} />
            <RootStack.Screen name="Updatesocialinsurance" component={Updatesocialinsurance} />
            <RootStack.Screen name="Updatehealthinsurance" component={Updatehealthinsurance} />
            <RootStack.Screen name="Updatebankaccount" component={Updatebankaccount} />
          </RootStack.Group>
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator>
          <RootStack.Group screenOptions={() => groupStackAppTabScreenOptions}>
            <RootStack.Screen name="Login" component={Login} />
          </RootStack.Group>
        </RootStack.Navigator>
      )}
    </SafeAreaView>
  );
};

export default RootStackNavigation;
