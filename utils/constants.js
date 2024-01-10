import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@savedNews')
   
    return jsonValue != null ? JSON.parse(jsonValue) : []
  } catch(e) {
    // error reading value
    return alert('error while fetching')
  }
}



export const storeData = async (value) => {
    const prevSavedData = await getData();
   
     prevSavedData.length > 0 ? prevSavedData.find(item => item.title === value.title) ? prevSavedData : prevSavedData.push(value) : prevSavedData.push(value)
  
    // await AsyncStorage.removeItem('@savedNews')
  
    try {
      const data =JSON.stringify(prevSavedData)
      if ( data !== null) {
        await AsyncStorage.setItem( '@savedNews', data );
        alert('News Saved')
        
      }
      
      return 
    } catch (e) {
      // saving error
      return alert('error while saving')
    }
  
  }
