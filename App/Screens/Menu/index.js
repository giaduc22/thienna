/* 
    Side Menu
    Created by Dudv on 04/01/2018
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getImage } from '../../Themes/Images';
import { connect } from 'react-redux';

const CLOSE_ICON = require('../../Assets/Icons/ic-close.png');

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../../Assets/Images/menu.jpg')}
                    style={styles.imageBg}
                />
                <View style={styles.contentWrapper}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => this.props.navigation.navigate('DrawerClose')}
                        >
                            <Image 
                                source={CLOSE_ICON}
                                style={styles.closeIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.userWrapper}>
                            <View style={styles.avatarWrapper}>
                                <Image 
                                    source={{ uri: 'http://akns-images.eonline.com/eol_images/Entire_Site/201581/rs_600x600-150901121640-rs_600x600-150901121532-600.jon-snow-game-of-thrones-kit-harrington.ls.9115.jpg' }}
                                    style={styles.avatar}
                                    // resizeMethod='resize'
                                />
                            </View>
                            <Text style={styles.name}>John Snow</Text>
                            <Text style={styles.mail}>hello@johnsnow.com</Text>
                        </View>
                    </View>
                    <View style={styles.menuWrapper}>
                        <View style={styles.topMenuWrapper}>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={() => this.props.mainNavigation.navigate('GiveFeedback')}
                            >
                                <Text style={styles.menuLabel}>Đóng góp ý kiến</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.menuButton}
                            >
                                <Text style={styles.menuLabel}>Đánh giá sản phẩm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={() => this.props.mainNavigation.navigate('Notification')}
                            >
                                <Text style={styles.menuLabel}>Thông báo</Text>
                                <View style={styles.badgeWrapper}>
                                    <Text style={styles.badge}>00</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.menuButton} 
                                onPress={() => this.props.mainNavigation.navigate('AuthorIntroduce')}
                            >
                                <Text style={styles.menuLabel}>Giới thiệu tác giả</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.menuButton}
                        >
                            {getImage('ic_logout', 20, false, '#c0c1c4')}
                            <Text style={styles.logoutLabel}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        mainNavigation: state.navigation.mainNavigation
    }
} 

export default connect(mapStateToProps)(Menu);
