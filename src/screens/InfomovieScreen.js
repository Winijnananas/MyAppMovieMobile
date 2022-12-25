import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Video } from 'expo-av';
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
                        <Text style={{ fontSize: 30, fontWeight: 'bold', flexDirection: "row" }}>{item.title}</Text>
                        <View style={{ width: 50, height: 48, backgroundColor: "#d9d9d9", borderRadius: 25, justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30 }}>{item.rate}</Text>
                        </View>
                    </View>
                </View>

                <View>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labeltile}>Type</Text>
                    <Text style={{ backgroundColor: 'grey', width: "35%", textAlign: 'center', borderRadius: 20, padding: 1, marginTop: 2, color: '#FFF', fontWeight: 'bold' }}>{item.type}</Text>
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
        fontSize: 15, fontWeight: 'bold'
    },
    labelOverview: {
        fontSize: 20,
        fontWeight: 'bold'
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

});