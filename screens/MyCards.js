import { View, Text, StyleSheet, Image } from "react-native"

const MyCards = () => {
    return(
        <View>
            <Text>Welcome to your available cards</Text>
            <View style={{ marginTop: 20, alignItems: 'center'}}>
                <Image source={require('../images/Card.png')} />
            </View>
        </View>
        
    )
}

export default MyCards;

const style = StyleSheet.create({
    
})