/* 
    fix size for images
    Created by Dudv on 02/01/2018
*/

import React from 'react';
import { Image } from 'react-native';

/* 
    Images object
    Each object has key, data: source image, origin width, origin height of image
*/

const images = {
    ic_menu: { source: require('../Assets/Icons/ic-menu.png'), width: 64, height: 54 },
    ic_download: { source: require('../Assets/Icons/ic-download.png'), width: 64, height: 55 },
    ic_arrow: { source: require('../Assets/Icons/arrow.png'), width: 64, height: 55 },
    ic_chat: { source: require('../Assets/Icons/ic-chat.png'), width: 64, height: 52 },
    ic_right_arrow: { source: require('../Assets/Icons/ic-preview.png'), width: 40, height: 67 },
    ic_logout: { source: require('../Assets/Icons/ic-logout.png'), width: 52, height: 64 },
    logo: { source: require('../Assets/Images/logo.png'), width: 1124, height: 918 },
    first_introduce: { source: require('../Assets/Images/first-introduce.png'), width: 443, height: 443 },
    second_introduce: { source: require('../Assets/Images/second-introduce.png'), width: 334, height: 334 },
    third_introduce: { source: require('../Assets/Images/third-introduce.png'), width: 399, height: 399 },
    help_step_1: { source: require('../Assets/Images/step_1_1.png'), width: 249, height: 147 },
    help_step_2: { source: require('../Assets/Images/step_1_2.png'), width: 234, height: 156 },
    help_step_3: { source: require('../Assets/Images/step_1_3.png'), width: 585, height: 780 },
    help_step_4: { source: require('../Assets/Images/step_1_4.png'), width: 478, height: 284 },
    help_step_5: { source: require('../Assets/Images/step_1_5.png'), width: 795, height: 500 },
    help_step_6: { source: require('../Assets/Images/step_2_1.png'), width: 368, height: 492 },
    help_step_7: { source: require('../Assets/Images/step_2_2.png'), width: 466, height: 350 },
    help_step_8: { source: require('../Assets/Images/step_2_3.png'), width: 438, height: 585 },
    help_step_9: { source: require('../Assets/Images/step_2_4.png'), width: 378, height: 504 },
    help_step_10: { source: require('../Assets/Images/step_2_5.png'), width: 960, height: 540 },
    help_completed: { source: require('../Assets/Images/step-completed.png'), width: 373, height: 308 },
}

/* 
    key: key of object
    targetSize: the target width or height to be set
    isTargetWidth: true if the targetSize is target for width
*/

export const getImage = (key, targetSize, isTargetWidth, tintColor) => {
    const { height, width, source } = images[key]; 
    return(
        <Image 
            source={source}
            style={{
                width: isTargetWidth ? targetSize : (targetSize * width / height),
                height: !isTargetWidth ? targetSize : (targetSize * height / width),
                tintColor: tintColor || null
            }}
        />
    );
}   