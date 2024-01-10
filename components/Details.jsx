import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text as CardText, useTheme } from 'react-native-paper';



const Details = ({title, image_url, content}) => {


    const width = Dimensions.get('window').width;

    const theme = useTheme()


  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}} >
      <CardText variant='headlineMedium' style={{color: 'black', marginVertical: 10, padding: 10}}>{title}</CardText>

      <Card contentStyle={{width: width}} style={{backgroundColor: theme.colors.background}}>
        <Card.Cover source={{ uri:image_url || 'https://picsum.photos/700'}} borderRadius={10}/>
        <Card.Content >
            <CardText variant='headlineSmall' textBreakStrategy='highQuality' style={{textAlign: 'left', marginVertical: 10}}>{content}</CardText>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({})