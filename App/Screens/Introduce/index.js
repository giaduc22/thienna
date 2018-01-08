/* 
    Introduce App
    Created by Dudv on 04/01/2018
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import FirstIntroduce from './FirstIntroduce';
import SecondIntroduce from './SecondIntroduce';
import ThirdIntroduce from './ThirdIntroduce';
import FourthIntroduce from './FourthIntroduce';
import FifthIntroduce from './FifthIntroduce';
import SixthIntroduce from './SixthIntroduce';

export default class Introduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        }
    }

    _control() {
        const { currentIndex } = this.state;
        if ( currentIndex !== 5 ) {
            this._swipe.scrollBy(1, true);
        } else {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        const { currentIndex } = this.state;
        return(
            <View style={styles.container}>
                <Swiper 
                    style={styles.wrapper} 
                    ref={(swipe) => this._swipe = swipe}
                    onIndexChanged={(currentIndex) => this.setState({ currentIndex })}
                    loop={false}
                    paginationStyle={styles.pagination}
                    activeDotColor='#e66562'
                    dotColor='#efefef'
                >
                    <FirstIntroduce />
                    <SecondIntroduce />
                    <ThirdIntroduce />
                    <FourthIntroduce />
                    <FifthIntroduce />
                    <SixthIntroduce />
                </Swiper>
                <TouchableOpacity
                    style={styles.controlButton}
                >
                    <Text 
                        style={styles.controlText}
                        onPress={() => this._control()}
                    >
                        { currentIndex === 5 ? 'Bắt đầu' : 'Tiếp tục' }
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
