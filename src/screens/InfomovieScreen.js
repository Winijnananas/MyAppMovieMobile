import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function InfomovieScreen({ navigation, route: { params: { item } } }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <SafeAreaView
            style={styles.container}>
            <ScrollView>
                {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Detail ♥</Text> */}
                <Image source={{ uri: item.url }} style={styles.poster} resizeMode="cover" />
                <View style={styles.containDetail}>
                    <View style={styles.containTitle}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', flexDirection: "row",shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 1, }}>{item.title}</Text>
                        <View style={{
                            width: 50, height: 48, backgroundColor: "#d9d9d9", borderRadius: 25, justifyContent: 'space-between', alignItems: 'center', shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 2,
                            shadowRadius: 1,
                        }}>
                            <Text style={{ fontSize: 30, marginTop: 8, fontWeight: 'bold' }}>{item.rate}</Text>
                        </View>
                    </View>
                </View>

                <View>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labeltile}>Type</Text>
                    {/* <Text style={{ backgroundColor: 'grey', width: "35%", textAlign: 'center', borderRadius: 20, padding: 1, marginTop: 2, color: '#FFF', fontWeight: 'bold' }}>{item.type}</Text> */}
                    <Text style={[styles[item.type], styles.type]}>{item.type}</Text>
                    <Text style={styles.labeltile}>Producer</Text>
                    <Text>{item.produce}</Text>

                </View>

                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Overview</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2' }}>{item.desc}</Text>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labeltile}>Trailer</Text>
                </View>
                <View>
                    <Video
                        ref={video}
                        source={{
                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        style={{ width: 400, height: 200 }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 5 }}
                    onPress={() => navigation.navigate('App')}
                >
                    <Text style={{
                        backgroundColor: "#BF1700", padding: 10, fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', width: "100%", borderRadius: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 5,
                        shadowRadius: 4.65,
                    }}>Back to Home</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFF',
    },
    poster: {
        width: "100%",
        height: 281,
        justifyContent: "flex-start",
        backgroundColor: "red",

    },
    labeltile: {
        fontSize: 20, fontWeight: 'bold'
    },
    labelOverview: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    containDetail: {
        padding: 4,
        flex: 1,
    },
    containTitle: {
        flexWrap: "wrap",
        padding: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Action: {
        backgroundColor: 'red',
        width: "20%", textAlign: 'center', borderRadius: 20, padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold'
    },
    Funny: {
        backgroundColor: 'green',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    ActionAdventure: {
        backgroundColor: 'orange',
        width: "35%", textAlign: 'center', borderRadius: 20, padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold'
    },
    Fantasy: {
        backgroundColor: 'purple',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    Comedy:{
        backgroundColor: '#e6e600',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    }

});