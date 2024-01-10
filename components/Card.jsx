import { View, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getData, storeData } from '../utils/constants';



const Cards = ({data, navigation, route, deleteNews}) => {

    const theme = useTheme()

 
  return (
    <Pressable
      onPress={ () => navigation.navigate( 'Overview', {
        title: data.title,
        description: data.description,
        image_url: data.image_url,
        content: data.content
      })}>
          <Card style={ { marginVertical:10, backgroundColor:theme.colors.elevation.level5}}>
          <Card.Cover source={{ uri: data.image_url || 'https://picsum.photos/700'}} borderRadius={10}/>
    <Card.Title title={data.title} subtitle={data.description && data.description.split('\n')[0]} titleNumberOfLines={1} />
        {deleteNews && <Card.Actions>
          <Button onPress={() => deleteNews({title: data.title, description: data.description, image_url: data.image_url,
        content: data.content})}>Delete</Button>
    </Card.Actions>}
  </Card>
    </Pressable>
  )
}

export default Cards

const styles = StyleSheet.create( {
 
})