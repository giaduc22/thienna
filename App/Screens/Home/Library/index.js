/* 
    Library Screen
    Created by Dudv on 03/01/2018
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import styles from './styles';
import Item from './Item';
import { librariesRef } from '../../../Firebase';
import Loading from '../../../Components/Loading';
import { connect } from 'react-redux';

const BOOK_ICON = require('../../../Assets/Icons/ic-thu-vien.png');
const DAO_DUC_ICON = require('../../../Assets/Icons/ic-dao-duc.png');
const CONG_DUC_ICON = require('../../../Assets/Icons/ic-cong-duc.png');
const KHI_CONG_ICON = require('../../../Assets/Icons/ic-khi-cong.png');
const ITEM_ICONS = [DAO_DUC_ICON, CONG_DUC_ICON, KHI_CONG_ICON];

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = {
            libraries: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        librariesRef.on('value', (childSnapshot) => {
            const libraries = [];
            childSnapshot.forEach((doc) => {
                libraries.push({
                    key: doc.key,
                    title: doc.toJSON().title,
                    subtitle: doc.toJSON().sub_title,
                    content: doc.toJSON().content,
                    media: doc.toJSON().media
                });
            });
            this.setState({ libraries, isLoading: false });
        });
    }

    _onPressItem(item, index) {
        switch ( index ) {
            case 0:
                this.props.mainNavigation.navigate('CongDuc', { item });
                break;
            case 1:
                this.props.mainNavigation.navigate('DaoDuc', { item });
                break;
            case 2:
                this.props.mainNavigation.navigate('KhiCong', { item });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                        source={BOOK_ICON}
                        style={styles.headerIcon}
                    />
                    <Text style={styles.headerText}>CHỦ ĐỀ THƯ VIỆN</Text>
                </View>
                {
                    this.state.isLoading ?
                    <Loading /> :
                    <FlatList 
                        data={this.state.libraries}
                        renderItem={({item, index}) => {
                            return(
                                <Item 
                                    image={ITEM_ICONS[index]}
                                    title={item.title}
                                    subTitle={item.subtitle}
                                    onPress={() => this._onPressItem(item, index)}
                                />
                            );
                        }}
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

export default connect(mapStateToProps)(Library);
