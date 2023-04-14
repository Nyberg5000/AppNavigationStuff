import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePostScreen from './components/CreatePostScreen';
import ViewAssignmentScreen from './components/ViewAssignmentScreen';
import CalendarScreen from './components/CalendarScreen';


const Stack = createNativeStackNavigator();

//Navigation fra React Navigation dokumentation - fungerer
// function DetailsScreen({route, navigation}){
//   const {itemId, otherParam} = route.params;
//   return(
//     <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
//       <Text>Details screen</Text>
//       <Text>itemId:{JSON.stringify(itemId)}</Text>
//       <Text>otherParam:{JSON.stringify(otherParam)}</Text>
//       <Button title='Gå til flere detaljer'
//       onPress={()=> navigation.push('Details',{
//         itemId: Math.floor(Math.random()*100),
//         otherParam: 'Noget nyt',
//       }) } >
//       </Button>
//       <Button title='Gå til hjem'
//       onPress={() => navigation.navigate('Hjem')} >

//       </Button>
//     </View>
//   );
// }

// function HjemScreen({navigation}){
//   return(
//     <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
// <Text>Hjemme skærm</Text>
// <Button title='Gå til opgave'
// onPress={() => navigation.navigate('Details', {
//   itemId: 20,
//   otherParam: 'noget andet',
// })} >
// </Button>
//     </View>
//   );
// }

//passing params to a previous screen
//""skriv kommentar"""
function HjemScreen({navigation,route}){
  React.useEffect(()=>{
    if(route.params?.post){
      //når post er skrevet, skal der gøres noget med route.params.post- fx send post til server
    }
  }, [route.params?.post]);
  //"skriv kommentar"
  return (
    <View style={{flex:1, alignItems: 'flex-start', justifyContent:'flex-start'}} >
     <View>
      <TouchableOpacity
      style={styles.assignmentButton}
       onPress={()=> navigation.navigate('Opgave')}>
      <Text>Dagens opgave</Text>
      </TouchableOpacity>
     </View>

      <Button title="Skriv kommentar"
      onPress={()=> navigation.navigate('Kommentar') } >
      </Button>
      <Text style={{margin:10}} >
Kommentar: {route.params?.post}
      </Text>
      <Button title="Kalender"
      onPress={()=> navigation.navigate('Calendar')} >
        </Button>
    </View>
  );
}
//"skriv kommentar"
// function CreatePostScreen({navigation,route}){
//   const [postText, setPostText] = React.useState('');
// //"skriv kommentar"
//   return(
//     <>
//    <TextInput multiline placeholder='Skriv en kommentar'
//    style={{height:200, padding:10, backgroundColor:'blue'}}
//    value={postText}
//    onChangeText={setPostText}
//    ></TextInput>
//    <Button title='Opret'
//    onPress={()=> {
//     //pass and merge params back to home screen
//     navigation.navigate({
//       name: 'Hjem',
//       params: {post: postText},
//       merge: true,
//     });
//    }}
//     >
//    </Button>
//     </>
//   );
// }


//"Denne kodebid går igen for de forskellige navigations"
export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator mode='modal' >
    <Stack.Screen name='Hjem' component={HjemScreen} />
    {/* <Stack.Screen name='Details' component={DetailsScreen}/> */}
    <Stack.Screen name='Kommentar' component={CreatePostScreen}/>
    <Stack.Screen name='Opgave' component={ViewAssignmentScreen}/>
    <Stack.Screen name='Calendar' component={CalendarScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

//Navigation fra React Native dokumentation - fungerer 
//"første navigation kode"
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//         name='Home'
//         component={HomeScreen}
//         options={{title: 'Velkommen'}}
//         />
//         <Stack.Screen
//         name="Assignment"
//         component={AssignmentScreen}
//         />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//"første navigation kode"
// const HomeScreen =({navigation})=> {
//   return (
//     <Button
//     title='Go to assignment'
//     onPress={() =>
//       navigation.navigate('Assignment', {name: 'assignment'})
//     }
//     />
//   )
// }

//"første navigation kode"
// const AssignmentScreen=({navigation, route}) => {
//   return <Text>This is {route.params.name} screen</Text>
// }



//"bruges ikke til navigation - udkommenteret fra det gamle"
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//test - styling af opgave touchable
const styles= StyleSheet.create({
  assignmentButton:{
    backgroundColor: '#01553D',
    width:392,
    height:40,
    borderRadius:5,
    paddingTop: 15,
    paddingLeft:5
  }
});
