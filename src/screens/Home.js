import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { LocalSvg } from 'react-native-svg';
import data from '../json/data.json';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../constants/Styles';

const Home = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);

    const [text, setText] = useState('');
    const [showData, setShowData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const clearText = () => {
        setText('');
    };

    useEffect(() => {
        setIsLoading(true);
        const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setTimeout(() => {
            setShowData(filteredData);
            setIsLoading(false);
        }, 1000);
    }, [text]);

    const handlePress = () => {
        navigation.navigate('SearchPage');
    };

    return (
        <ImageBackground
            source={require('../../assets/gradient.png')}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={[
                        styles.searchContainer,
                        { borderColor: isFocused ? '#007DD0' : '#557184' },
                    ]}
                    onPress={handlePress}
                >
                    <View style={styles.searchIcon}>
                        <LocalSvg width={36} height={36} asset={require("../../assets/search1.svg")} style={styles.searchIconSvg} />
                    </View>

                    <View style={styles.searchContent}>
                        <EvilIcons name="search" size={24} color="#557184" style={styles.icon} />
                        <Text style={styles.searchPlaceholder}>Search</Text>
                    </View>
                    <View style={styles.searchIcon}>
                        <LocalSvg width={36} height={36} asset={require("../../assets/search2.svg")} style={styles.searchIconSvg} />
                    </View>
                </TouchableOpacity>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {showData.length > 0 ? (
                        <View>
                            <Text style={[Styles.xxlBoldText, styles.spacesTitle ]}>Spaces</Text>
                            {showData.map((item) => (
                                <Card key={item.id} data={item} />
                            ))}
                        </View>
                    ) : null}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    searchContainer: {
        width: '100%',
        paddingVertical: 6,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchIcon: {
        marginLeft: 8,
        marginRight: 8,
    },
    searchIconSvg: {
        marginLeft: 8,
        marginRight: 8,
    },
    searchContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        paddingLeft: 6,
    },
    searchPlaceholder: {
        fontStyle: 'italic',
        color: '#557184',
        fontSize: 12,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    spacesTitle: {
        fontSize: 30,
        color: '#004F84',
        marginTop: 10,
    },
});

export default Home;
