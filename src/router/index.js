import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LoginScreen, TimeSheetScreen } from '../Screens';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Timesheet: TimeSheetScreen,
    },
    {
        headerMode: 'none',
    },
    {
        initialRouteName: 'Login'
    },
);

export default createAppContainer(AppNavigator);
