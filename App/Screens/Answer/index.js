/* 
    Answer Screen
    Created by Dudv on 06/01/2018
*/

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ChildNavBar from '../../Components/ChildNavBar';
import styles from './styles';
import HTML from 'react-native-render-html';
import { NORMAL_TEXT_COLOR } from '../../Themes/Colors';

class Answer extends Component {
    _getQuestion(question) {
        return question.substring(5, question.length);
    }

    render() {
        const { title, content } = this.props.navigation.state.params.item
        return (
            <View style={{ flex: 1 }}>
                <ChildNavBar label="Trả lời câu hỏi" onBack={() => this.props.navigation.goBack()} />
                <View style={styles.container}>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.question}>{this._getQuestion(title)}</Text>
                    </View>
                    <ScrollView>
                        <HTML 
                            html={content} 
                            tagsStyles={{p: {color: NORMAL_TEXT_COLOR, backgroundColor: 'transparent'}}} 
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Answer;
