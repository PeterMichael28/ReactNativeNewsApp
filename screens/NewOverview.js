import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Details from '../components/Details';
import { Button } from 'react-native-paper';

import { storeData } from '../utils/constants';






const NewOverview = ({navigation, route}) => {

  const { title, description, image_url, content } = route?.params;
//   const [alreadySaved, setAlreadySaved] = useState(false)
  





  // useEffect( () => {
  //   const getAlreadySaved = async () => {
  //     const data = await getData();
  //    return setAlreadySaved( data.find(p => p.title === title))
  //   }

  //   getAlreadySaved()
  // }, [])

  
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={ () => storeData( {
       title, content, description, image_url
     })}>Save</Button>
    });
  }, []);


 


  return (

      <Details title={title} content={content} image_url={image_url}/>

    
  )
}

export default NewOverview

const styles = StyleSheet.create({})