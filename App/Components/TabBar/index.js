/* 
    Custom Tab Bar
    Created by Dudv on 30/12/2017
*/

import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from './CustomTabBar';
import { connect } from 'react-redux';
import { setNavBarLabel } from '../../Actions/NavBar';

class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            structure: this.props.structure,
			selectedTab: this.props.selectedTab,
        }
    }

    _onChangeTab = ({ i, ref, from }) => {
        this.props.setNavBarLabel(i);
    }

    render() {
        return(
            <ScrollableTabView renderTabBar={() => <CustomTabBar />}
                                onChangeTab={this._onChangeTab}
                                tabBarPosition={'bottom'}
                                initialPage={this.state.selectedTab}>
                {this.state.structure.map((tabProps, tabIndex) => 
                    <View 
                        style={{flex:1}}
                        key={tabIndex}>
                            {tabProps.renderContent()}
                    </View>
                )}
            </ScrollableTabView>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { setNavBarLabel })(TabBar);
