import React, { useState, useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const OnboardingStarter = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideContent, setSlideContent] = useState([
        {
            heading: 'Lorem Ipsum',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
            ImageBackground: require('../assets/images/LandingScreen.png'),
        },
        {
            heading: 'Lorem Ipsum ',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
            ImageBackground: require('../assets/images/LandingScreen2.png'),
        },
        {
            heading: 'Lorem Ipsum ',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
            ImageBackground: require('../assets/images/LandingScreen3.png'),
        },
    ]);
    
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').width
    const navigation = useNavigation();
    const scrollViewRef = useRef();
    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffset / Dimensions.get('window').width);
        setActiveIndex(currentIndex);
    };

    const renderDots = () => {
        return slideContent.map((_, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => scrollToIndex(index)}
                style={[
                    styles.dot,
                    {
                        width: index === activeIndex ? 30 : 10,
                        backgroundColor: index === activeIndex ? '#007BFF' : '#D3D3D3',
                    },
                ]}
            />
        ));
    };

    const scrollToIndex = (index) => {
        scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    };

    const handleNext = () => {
        const nextIndex = activeIndex + 1;
        if (nextIndex < slideContent.length) {
            scrollToIndex(nextIndex);
            setActiveIndex(nextIndex);
        } else if (nextIndex === slideContent.length) {
            navigation.navigate('LoginOrRegister');
        }
    };

    return (
        <View style={{ flex: 1 }}>           
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={300}
                style={styles.scrollView}
            >
                {slideContent.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                      
                        {slide.ImageBackground && (
                            <ImageBackground
                                source={slide.ImageBackground}
                                style={{flex:1, width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,}} 
                                resizeMode="cover"
                            />
                        )}
                          <View style={styles.textContainer}>
                            <Text style={styles.heading}>{slide.heading}</Text>
                            <Text style={styles.slideText}>{slide.text}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.dotsContainer}>{renderDots()}</View>
                <LinearGradient colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }} style={styles.linearGradient}>
                    <TouchableOpacity onPress={handleNext} style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={{ fontSize: 18, color: 'white', justifyContent: 'center', marginLeft: 15, marginHorizontal: 85 }}> Next</Text>
                        <Icon name="arrow-forward-sharp" size={25} color="white" />
                    </TouchableOpacity>
                </LinearGradient>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    slide: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        height:Dimensions.get('window').height*0.72,   
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 70,
        backgroundColor:'white'
    },
    textContainer: {
        padding: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        margin: 25,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    heading: {
        marginBottom: 2,
        color: 'black',
        fontSize: 25,
        fontWeight: '400',
    },
    slideText: {
        textAlign: 'justify',
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    Imagcontainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    linearGradient: {
        borderWidth: 2,
        borderColor: 'white',
        borderBottomLeftRadius: 24,
        borderTopLeftRadius: 24,
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/15,
    },
    slideImage: {       
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 7.24,   
    },
});

export default OnboardingStarter;



