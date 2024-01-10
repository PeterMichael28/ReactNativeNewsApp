import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, Chip, Button, useTheme } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import Cards from '../components/Card';
import { getData } from '../utils/constants';

const SavedScreen = ({navigation, route}) => {

const [data, setData] = useState([])

  const focused = useIsFocused()

 

 const deleteNews = useCallback(async (value) => {
  const data = await getData()

if ( data.length > 0 ) {
   const newData = JSON.stringify(data.find(p => p.title === value.title) ? data.filter(p => p.title !== value.title) : data)

   try {
      await AsyncStorage.setItem( '@savedNews', newData );
      alert('News UnSaved')
    return 
  } catch (e) {
    // saving error
    return alert('error while saving')
  }
} else {
  return
  }
}, [data])

useEffect( () => {
  getData().then(dat => setData(dat)).catch(err => alert('Error occurred'))
}, [focused])



  return (
    <View style={styles.container}>
        <Appbar.Header>
      <Appbar.BackAction  />
      <Appbar.Content title="Saved" />
      </Appbar.Header>
     
    { data.length > 0 ? <FlatList
        style={ styles.flatlist }
        data={ data }
        renderItem={ ( { item } ) => <Cards data={ item } navigation={ navigation } route={ route } deleteNews={deleteNews}/> }
        keyExtractor={ (item, index) => index }
      /> : (<Text  style={ styles.noSaved }>No Saved News yet!!!</Text>)}
      
      
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    height: 'auto'
  },
  noSaved: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    height: '100%',
    textAlign: 'center',
    marginVertical: 30
  }
})