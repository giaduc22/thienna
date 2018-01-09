import { StackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';

import Login from '../Screens/Login';
import Introduce from '../Screens/Introduce';
import Notification from '../Screens/Notification';
import GiveFeedback from '../Screens/GiveFeedback';
import Answer from '../Screens/Answer';
import CongDuc from '../Screens/Home/Library/CongDuc';
import DaoDuc from '../Screens/Home/Library/DaoDuc';
import KhiCong from '../Screens/Home/Library/KhiCong';
import AuthorIntroduce from '../Screens/AuthorIntroduce';
import NewbieHelp from '../Screens/Home/Help/Help/Newbie';
import PracticianHelp from '../Screens/Home/Help/Help/Practician';
import Home from './Home';

export default StackNavigator({
    Login: { screen: Login },
    // Introduce: { screen: Introduce },
    Home: { screen: Home },
    NewbieHelp: { screen: NewbieHelp },
    PracticianHelp: { screen: PracticianHelp },
    Notification: { screen: Notification },
    GiveFeedback: { screen: GiveFeedback },
    AuthorIntroduce: { screen: AuthorIntroduce },
    Answer: { screen: Answer },
    CongDuc: { screen: CongDuc },
    DaoDuc: { screen: DaoDuc },
    KhiCong: { screen: KhiCong },
},
    {
        headerMode: 'none',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const width = layout.initWidth;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateX }] };
            },
        }),
    }
);