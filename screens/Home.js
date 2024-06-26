import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransactionItem from '../components/TransactionItem';
import { ThemeContext } from '../components/ThemeContext';
import { useContext } from 'react';


const Home = () => {
    const { isEnabled } = useContext(ThemeContext);
    return (
        <ScrollView style={isEnabled && styles.darkContainer}>
        <SafeAreaView style={[styles.container, isEnabled && styles.darkContainer]}>
            <View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={[{ display: "flex", flexDirection: "row" , }]}>
                        <View>
                        <Image source={require('../images/profile.png')} style={styles.marks} />
                        </View>
                        <View style={{ marginHorizontal: 4, marginVertical: 5 , marginLeft: 5 , marginTop: 5 }}>
                            <Text style={[styles.welcome, isEnabled && styles.whiteContainer ]}>Welcome back,</Text>
                            <Text style={[styles.name, isEnabled && styles.whiteContainer]}>Marks Spencer</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, width: 60, backgroundColor: "#ddd3", borderRadius: 50, padding: 15 }}>
                    <Image source={require('../images/search.png')} style={{ height: 30, width: 30}} />
                    </View>
                </View>

            <View style={{ marginTop: 20, alignItems: 'center'}}>
                <Image source={require('../images/Card.png')} />
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", marginVertical: 40}}>
            <View style={{ alignItems: "center"}}>
                <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 25, marginRight: 10 }}>
                    <Image source={require('../images/send.png')}  />                
                </View>
                <Text style={[ isEnabled && styles.whiteContainer,{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8, }]}>Sent</Text>
            </View>
            <View style={{ alignItems: "center"}}>
                <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 25, marginRight: 10 }}>
                    <Image source={require('../images/recieve.png')} />        
                </View>
                <Text style={[ isEnabled && styles.whiteContainer, { marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8}]}>Received</Text>
            </View>
            <View style={{ alignItems: "center"}}>
                <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 22, marginRight: 10 }}>
                    <Image source={require('../images/loan.png')} />             
                </View>
                <Text style={[ isEnabled && styles.whiteContainer, { marginRight: 16, marginVertical: 10, fontSize: 18, opacity: 0.8}]}>Loan</Text>
            </View>
            <View style={{ alignItems: "center"}}>
                <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }}>
                    <Image source={require('../images/topUp.png')} />
                </View>
                <Text style={[ isEnabled && styles.whiteContainer, { marginRight: 16, marginVertical: 10, fontSize: 18, opacity: 0.8}]}>Topup</Text>
            </View>
        </View>
        <View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                            <Text style={isEnabled && styles.whiteContainer}>Transactions</Text>
                            <Text style={{ color: "#4F8EF7" }}>See All</Text>
                        </View>
                        <TransactionItem />
                    </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 10,
        backgroundColor: 'white'
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    whiteContainer: {
        color: 'white',
    },
    welcome: {
        fontSize: 17,
        opacity: 0.6,
        marginTop: 3
    },
    name: {
        fontSize: 24,
        fontWeight: "bold"
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    card: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#ddd',
    },
    cardNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    marks: {
        height: 70, 
        width: 70,

    }

});

export default Home;