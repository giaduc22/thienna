/* 
    Practician Help
    Created by Dudv on 05/01/2018
*/

import React, { Component } from 'react';
import { View, ScrollView, Animated, Easing, Text, FlatList } from 'react-native';
import ChildNavBar from '../../../../Components/ChildNavBar';
import styles from './styles';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../../../Themes/Metrics';
import { CONTENTS } from '../../../../Constants/PracticianHelpData';
import { getImage } from '../../../../Themes/Images';

export default class PracticianHelp extends Component {
    constructor(props) {
        super(props);

        this.scrollHeight = DEVICE_HEIGHT - 87;

        this.state = {
            slideAnim: new Animated.Value(0),
            currentPosition: this.scrollHeight,
        }
    }

    handleScroll = (event) => {
        console.log(event.nativeEvent);
        const { currentPosition } = this.state;
        const height = Math.abs(event.nativeEvent.contentSize.height);
        const y = Math.abs(event.nativeEvent.contentOffset.y);
        const velocity = Math.abs(event.nativeEvent.velocity.y);
        Animated.spring(
            this.state.slideAnim,
            {
                toValue: (y + this.scrollHeight) / height,
                duration: (y + this.scrollHeight - currentPosition) * velocity,
            }
        ).start(() => this.setState({ currentPosition: y + this.scrollHeight }));
    }

    _renderItem(item) {
        if (item.text) {
            return(
                <Text 
                    style={item.isNote ? styles.noteText : [styles.contentText, {textAlign: item.isCenterContent ? 'center' : null}]}
                    adjustsFontSizeToFit    
                >
                    {item.text}
                </Text>
            );
        } else if (item.title) {
            return <Text style={styles.headerText}>{item.title}</Text>
        } else if (item.img) {
            return getImage(item.img, DEVICE_WIDTH - 20, true)
        } else {
            return <View style={{ width: DEVICE_WIDTH, height: 6 }} />
        }
    }

    render() {
        const width = this.state.slideAnim.interpolate({
            inputRange: [0, 1], 
            outputRange: [0, DEVICE_WIDTH],
        });
        return(
            <View style={styles.container}>
                <ChildNavBar label="Dành cho người nhiều thời gian" onBack={() => this.props.navigation.goBack()} />
                <Animated.View style={{ height: 3, backgroundColor: '#37c77d', width }} />
                <View style={styles.contentWrapper}>
                    <FlatList 
                        onScroll={this.handleScroll}
                        showsVerticalScrollIndicator={false}
                        data={CONTENTS}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </View>
                
            </View>
        );
    }
}

// <ScrollView style={{ flex: 1 }} onScroll={this.handleScroll} onMomentumScrollEnd={() => console.log('end')}>
//     <View style={styles.contentWrapper}>
//         <Text style={styles.contentText}>ĐỘNG TÁC BẮT ĐẦU BUỔI TỌA THIỀN</Text>
//         <Text style={styles.headerText}>LỄ PHẬT</Text>
//     </View>
// </ScrollView>