import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';


const transactions = [
    { id: '3', description: 'Apple Store', subDescription: 'Entertainment', image: require('../images/apple.png'), amount: '- $12.99' },
    { id: '4', description: 'Spotify', subDescription: 'Music', image: require('../images/spotify.png'), amount: '- $5.99' },
    { id: '1', description: 'Money Transfer', subDescription: 'Bank of America', image: require('../images/money.png'), amount: ' $88' },
    { id: '2', description: 'Grocery Shopping', subDescription: 'Walmart', image: require('../images/grocery.png'), amount: '- $5.99' },
    { id: '5', description: 'Amazon', subDescription: 'Online Shopping', image: require('../images/amazon.png'), amount: ' $99.99' },
    { id: '6', description: 'Starbucks', subDescription: 'Coffee', image: require('../images/starbucks.png'), amount: '- $4.50' },
    { id: '7', description: 'Uber', subDescription: 'Ride', image: require('../images/uber.png'), amount: '- $15.00' },
    { id: '8', description: 'Electric Bill', subDescription: 'Utility', image: require('../images/bill.png'), amount: '- $50.00' },
    { id: '9', description: 'Gym Membership', subDescription: 'Monthly Fee', image: require('../images/gym.png'), amount: ' $20.00' },
    { id: '10', description: 'Netflix', subDescription: 'Monthly Subscription', image: require('../images/netflix.png'), amount: ' $9.99' },
];

const TransactionItem = ({ description, subDescription, amount, image }) => {
    const { isEnabled } = useContext(ThemeContext);  
    return (
        <View style={isEnabled && styles.darkContainer}>
            <View style={[styles.transactionItem, isEnabled && styles.darkContainer]}>

                <View style={{ height: 60, width: 60, backgroundColor: "#ddd", borderRadius: 50, padding: 15, marginRight: 10 }}>
                    <Image source={image} style={{width: 30, borderRadius: 40, height: 30}}/>              
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.description, isEnabled && styles.blueContainer]}>{description}</Text>
                    <Text style={styles.subDescription}>{subDescription}</Text>
                </View>
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    );
};

const Transactions = () => {
    return (
        <FlatList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TransactionItem
                    description={item.description}
                    subDescription={item.subDescription}
                    amount={item.amount}
                    image={item.image}

                />
            )}

            scrollEnabled={false}
        />
    );
};

export default Transactions;

const styles = StyleSheet.create({
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subDescription: {
        fontSize: 14,
        color: '#555',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f00',
    },
    darkContainer: {
        backgroundColor: 'black'
    },
    blueContainer: {
        color: 'white'
    },
});