
import React from 'react';
import { View, Image } from 'react-native';

const Header = ({ firstImagePath, secondImagePath }) => {
    return (
        <View>
            <View style={{ justifyContent: 'space-between', width: 330, flexDirection: 'row' }}>
                <Image
                    style={{ height: 30, width: 30, borderRadius: 30, resizeMode: 'contain' }}
                    source={firstImagePath}
                />
                <Image
                    style={{ height: 25, width: 25, borderRadius: 30, resizeMode: 'contain' }}
                    source={secondImagePath}
                />
            </View>
        </View>
    );
};

export default Header;
