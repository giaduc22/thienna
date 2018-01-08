/* 
    Meditation Screen
    Created by Dudv on 16/12/2017
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Slider from "react-native-slider";

class Meditation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderValue: 30
        }
    }

    _getSelectedTime(time) {
        time = Math.round(time);
        if ( time < 60 ) {
            time = '0:' + time;
        } else if ( time < 70 ) {
            time = '1:0' + (time - 60);
        } else {
            time = '1:' + (time - 60);
        }
        return time;
    }

    render() {
        const { sliderValue } = this.state;
        let backgroundColor = '#f8443e';
        if ( sliderValue < 30 ) {
            backgroundColor = '#f8443e';
        } else if ( sliderValue < 60 ) {
            backgroundColor = '#fdbb40';
        } else {
            backgroundColor = '#37c77d';
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Hãy chọn thời gian hành thiền</Text>
                <View style={styles.controlWrapper}>
                    <View>
                        <View style={styles.sliderWrapper}>
                            <Text style={styles.time}>0:15</Text>
                            <Slider 
                                value={this.state.sliderValue}
                                maximumValue={90}
                                minimumValue={15}
                                minimumTrackTintColor='#fe4a70'
                                maximumTrackTintColor='#dfe4ea'
                                thumbTintColor='#ffffff'
                                style={styles.sliderContainer}
                                trackStyle={styles.trackStyle}
                                onValueChange={(sliderValue) => this.setState({ sliderValue })}
                            />
                            <Text style={styles.time}>1:30</Text>
                        </View>
                        <Text style={styles.suportText}>Trượt để thay đổi thời gian (giờ)</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.selectedTimeRow}>
                            <Text style={styles.timeLabel}>Thời gian: </Text>
                            <View style={[styles.timeEvaluate, { backgroundColor }]} />
                            <Text style={styles.selectedTime}>{this._getSelectedTime(sliderValue)}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.startButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.startLabel}>BẮT ĐẦU THIỀN ĐỊNH</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Meditation;
