import * as React from 'react';
import { View, Text,TextInput,SafeAreaView,StyleSheet} from 'react-native';

const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
};
export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('AboutUs.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>AboutUs.
                
                </Text>
                    <TextInput style={styles.input}></TextInput>
                    
        </View>
        
    );
    
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      width:250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor:"grey",
    },
  });