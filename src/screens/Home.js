import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image ,FlatList} from 'react-native'
import React, { Component, useEffect, useState } from 'react';
import reminderBow from 'react-native-ico-material-design/src/data/material-design/reminder-bow';
import Movie from '../models/Movie';
import axios from 'axios';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { ListItem, SearchBar } from 'react-native-elements';
//const API_URL="https://www.themoviedb.org/movie/";

//const API_MOVIE="http://192.168.1.31:3000/movies";

const Home = ({ navigation }) => {
 //const API_MOVIE = "http://192.168.1.31:3000/movies";
 const API_MOVIE = "http://192.168.47.1:3000/movies";
 //const API_POP = "http://192.168.1.31:3000/populars";
  const API_POP = "http://192.168.47.1:3000/populars";
  const [movie, setMovie] = useState([]);
  const [moviesPop, SetPopular] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  // const [isLoading, setIsLoading] =useState(true);
  // const [search, setSearch] = useState('');
  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  // const [masterDataSource, setMasterDataSource] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    fetch(API_MOVIE)
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });

        

    if(isFocused){
      axios.get(API_POP)
      .then(function (response) {
        SetPopular(response.data)
        
      })
      .catch(function (error) {
        console.log('Can not connect',error.message);
      })
    }
    
  },[isFocused]
  );
  // useEffect(() => {
  //   if(isFocused){
  //     axios.get(`http://192.168.47.1:3000/movies`)
  //     .then(function (response) {
  //       setMovie(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //   }
    
  // },[isFocused]
  // );

useEffect(()=>{
const fetchMovies =async()=>{
  const response = await axios(API_MOVIE);
  const data = await response.data;
  setMovie(data);
  //console.log(data)
};
fetchMovies();
},[]);



//get profile


//   //function Search
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSourcejobTitle
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  //item view
  const ItemView = ({ item }) => {
    return (
      // Flat List Item
        <SafeAreaView>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}          
          >
            <TouchableOpacity  onPress={() => navigation.navigate('Info',{item})}>
              
              <View>
              <Image source={{ uri: item.url }} style={{width:100 , height:150,borderRadius:10,marginTop:5}} resizeMode="cover" />
              <Text style={{textAlign:'center'}}>{ item.title }</Text>
          
              </View>
            </TouchableOpacity>                     
          </ScrollView>
        </SafeAreaView>
    );
  };
  //flatlist
  const ItemSeparatorView = () => {
    
    return (
      
      // Flat List Item Separator
      <View
      
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#333333',
        }}
      />
    );
  };
//getItem
const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + 'title: ' + item.title);
  };



if (typeof search === 'string' && search.length === 0) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <SearchBar
        round
        clearIcon={true}
        cancelButtonTitle='Cancel'
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search here"
          value={search}
        />
      </View>
      <View>
        <Text style={styles.header}>Top rated movies most watched TODAY🔥</Text>
      </View>
      <ScrollView 
      vertical
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    style={{textAlign:'left'}}
    > 
      { moviesPop.map((item, key) => {
          return (
            <TouchableOpacity
            style={{marginLeft:5}}
              key={key} onPress={() => navigation.navigate('Info', { item })}>
              <Image source={{ uri: item.url }} style={styles.poster} resizeMode="cover" />
            </TouchableOpacity>
        
          )
          
        })
      }
      
    </ScrollView>
    <View>
        <Text style={styles.headerNormal}>Now Showing</Text>
      </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    style={{textAlign:'left'}}
    > 
      { movie.map((item, key) => {
          return (
            <TouchableOpacity
            style={{marginLeft:5}}
              key={key} onPress={() => navigation.navigate('Info', { item })}>
              <Image source={{ uri: item.url }} style={styles.poster} resizeMode="cover" />
            </TouchableOpacity>
        
          )
          
        })
      }
      
   
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
} else {
  return (
    <SafeAreaView>
      <View>
        <SearchBar
          round
           showLoading={false}
          clearIcon={true}
          cancelButtonTitle='Cancel'
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="SEARCH"
          value={search}
        />
        <FlatList
        style={{backgroundColor:"white"}}
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
}
};







//   return (
//     // <View
//     //   style={styles.container}>
//     //   <Text style={{fontSize:30,fontWeight:'bold'}}>Home ♥</Text>
//     //   </View>

//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <View style={styles.labelSearch}>
//         <Text style={{color:"white"}}>
//           Search
//         </Text>
//         <MaterialCommunityIcons name="magnify" size={25} color="white"/>
//       </View>
//       <View>
//         <Text style={styles.header}>Top rated movies most watched TODAY🔥</Text>
//       </View>
//     <ScrollView
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
//     style={{textAlign:'left'}}
//     >
//      { moviesPop.map((item, key) => {
//           return (
//             <TouchableOpacity
//             style={{marginLeft:5}}
//               key={key} onPress={() => navigation.navigate('Info', { item })}>
//               <Image source={{ uri: item.url }} style={styles.poster} resizeMode="cover" />
//             </TouchableOpacity>
        
//           )
          
//         })
//       }  
      
//     </ScrollView>
   
//     </ScrollView>
//     </SafeAreaView>

//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    paddingVertical: 20,
    backgroundColor: "#4d4d4d",
  },
  text: {
    flexDirection: "column",
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white"


  },
  poster: {

    width: 150, height: 250,
    marginTop: 5,
    borderRadius: 10,
    marginRight: 5,
    shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 5,
  shadowRadius: 4.65
    
  },
  header: {
    marginTop: 0,
    fontSize: 15,
    backgroundColor: "#BF1700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 0,
    color: "#fff",
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: "100%",
    fontWeight: 'bold',
    shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 5,
  shadowRadius: 4.65


    //fontWeight:'bold'


  },
  headerNormal: {
    marginTop: 5,
    fontSize: 15,
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: "#fff",
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    width: "100%",
    fontWeight: 'bold',
    shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 2,
  shadowRadius: 4.65
    //marginBottom:200,
  },
  labelSearch: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flexDirection: "row",
    backgroundColor: '#1B1B1B',
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 0,




  }
})


export default Home;
