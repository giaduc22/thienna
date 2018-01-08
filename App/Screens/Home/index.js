/* 
    Home screen
    Created by Dudv on 30/12/2017
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import TabBar from '../../Components/TabBar';
import NavBar from '../../Components/NavBar';
import Meditaion from './Meditation';
import Help from './Help';
import Library from './Library';
import Question from './Question';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);

        this.tabs = [
            { renderContent: () => <Meditaion /> },
            { renderContent: () => <Help /> },
            { renderContent: () => <Library /> },
            { renderContent: () => <Question /> }
        ]
    }

    render() {
        return(
            <View style={{ flex : 1 }}>
                <NavBar 
                    openMenu={() => this.props.navigation.navigate('DrawerOpen')}
                    onNotification={() => this.props.mainNavigation.navigate('Notification')}
                />
                <TabBar 
                    selectedTab={0}
                    structure={this.tabs}
                />
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        mainNavigation: state.navigation.mainNavigation
    }
}

export default connect(mapStateToProps)(Home);