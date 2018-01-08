/* 
    Question Screen
    Created by Dudv on 03/01/2018
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import styles from './styles';
import { questionsRef } from '../../../Firebase';
import Item from './Item';
import Loading from '../../../Components/Loading';
import { connect } from 'react-redux';

const HEADER_ICON = require('../../../Assets/Icons/ic-cauhoi.png');

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            isLoading: true
        }
    }

    componentDidMount() {
        questionsRef.on('value', (childSnapshot) => {
            const questions = [];
            childSnapshot.forEach((doc) => {
                questions.push({
                    key: doc.key,
                    title: doc.toJSON().title,
                    content: doc.toJSON().content
                });
                console.log(doc.toJSON().title)
            });
            this.setState({ questions, isLoading: false });
        });
    }

    handleScroll = (event) => {
        console.log(event.nativeEvent)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                        source={HEADER_ICON}
                        style={styles.headerIcon}
                    />
                    <Text style={styles.headerText}>DANH SÁCH CÂU HỎI</Text>
                </View>
                {
                    this.state.isLoading ?
                    <Loading /> :
                    <FlatList 
                        data={this.state.questions}
                        renderItem={({item}) => {
                            return(
                                <Item 
                                    title={item.title}
                                    onPress={() => this.props.mainNavigation.navigate('Answer', { item })}
                                />
                            );
                        }}
                        onScroll={this.handleScroll}
                    />
                }
                
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        mainNavigation: state.navigation.mainNavigation
    }
}

export default connect(mapStateToProps)(Question);
