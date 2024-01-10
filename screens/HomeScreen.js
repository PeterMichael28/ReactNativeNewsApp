import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Chip, Button, useTheme } from 'react-native-paper';
import Cards from '../components/Card';
import { ProgressBar, MD3Colors } from 'react-native-paper';


const HomeScreen = ({navigation, route}) => {

  const categories = ['Business', 'Entertainment', 'Environment', 'Food', 'Health', 'Politics', 'Science', 'Sports', 'Technology', 'Top', 'Tourism', 'World']

  const url = 'https://newsdata.io/api/1/news?apikey='

  const Api_Key = 'pub_224533cee62d6c722a3453f59fd21b682140a'

  const [selectedCategories, setSelectedCategories] = useState([])
  const [data, setData] = useState([])
  const [nextKey, setNextKey] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSelectCategory = (value) => {
    setSelectedCategories(pre => pre.find(p => p === value) ? pre.filter(category => category !== value) : [...pre, value])
  }

  const handleSubmit = () => {
    setLoading(true)
    const fetchUrl = `${url}${Api_Key}&country=ng&language=en&category=${ selectedCategories.length > 0 ? selectedCategories.join(',').toLowerCase() : 'entertainment,food,sports'}${nextKey?.length > 0 ? `&page=${nextKey}` : ''}`


    fetch( fetchUrl ).then( res => res.json() ).then( data => {
      setData(pre => [...pre, ...data.results]);
      setNextKey(data.nextPage)
     
    } ).catch( error => console.log( error ) ).finally(() => setLoading(false))
  }
  // https://newsdata.io/api/1/news?apikey=pub_224533cee62d6c722a3453f59fd21b682140a&q=YOUR-QUERY&page=XXXPPPXXXXXXXXXX
  // https://newsdata.io/api/1/news?apikey=pub_224533cee62d6c722a3453f59fd21b682140a&country=ng&language=en&category=entertainment,food,sports 
  const theme = useTheme()

 
  return (
    <View style={styles.container}>
       <Appbar.Header>
      <Appbar.BackAction  />
      <Appbar.Content title="Home" />
      {/* <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical"  /> */}
    </Appbar.Header>
      <View style={{marginBottom: 10}}>
        <View style={styles.filters}>
            { categories.map( category => (
              <Chip
                key={ category }
                mode='outlined'
                style={ StyleSheet.chipItem }
                textStyle={ { fontWeight: 400, color: 'white', padding: 1 } }
                showSelectedOverlay
                selected={selectedCategories.find(cat => category === cat) ? true : false}
                onPress={() => handleSelectCategory(category)}
              >
                {category}
              </Chip>
          ))}
        </View>
            <Button icon={ 'sync' } style={styles.button} mode='outlined' labelStyle={ { fontSize: 17, margin: 'auto', color: 'black'}} onPress={handleSubmit}>Refresh</Button>
        
    </View>
      <ProgressBar progress={ 0.5 } color={ MD3Colors.error50 } indeterminate visible={loading } />
      <FlatList
      onEndReached={() => handleSubmit()}
        style={ styles.flatlist }
        data={ data }
        renderItem={ ( { item } ) => <Cards data={ item } navigation={ navigation } route={ route } /> }
        keyExtractor={ (item, index) => index }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  chipItem: {
    margin: 5,
  },
  button: {
    maxWidth: 300,
    padding: 0,
    maxHeight: 40,
    marginHorizontal: 70
  },
  flatlist: {
    flex: 1,
    height: 'auto'
  }
})