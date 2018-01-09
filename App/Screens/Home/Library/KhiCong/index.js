import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ChildNavBar from '../../../../Components/ChildNavBar';
import styles from './styles';
import HTML from 'react-native-render-html';
import MediaItem from '../MediaItem';

const VIDEO_ICON = require('../../../../Assets/Icons/ic-video.png');

class KhiCong extends Component {
    _getContent(content) {
        content = content.replace(/<p>/g, '');
        content = content.replace(/<p>/g, '');
        return content;
    }

    _getTitle(title) {
        return title;
    }

    render() {
        const { content, title, media } = this.props.navigation.state.params.item;
        return (
            <View style={{ flex: 1 }}>
                <ChildNavBar label={this._getTitle(title)} onBack={() => this.props.navigation.goBack()} />
                <View style={styles.container}>
                    <HTML
                        html={this._getContent(content)}
                    />
                    <FlatList
                        data={media}
                        renderItem={({ item, index }) => {
                            return (
                                <MediaItem
                                    image={VIDEO_ICON}
                                    title={item.name}
                                    key={item[index]}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default KhiCong;
