import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navigation fra React Navigation dokumentation - fungerer
function DetailsScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
      <Text>Details screen</Text>
      <Button title='Gå til flere detaljer'
      onPress={()=> navigation.push('Details') } >
      </Button>
      <Button title='Gå til hjem'
      onPress={() => navigation.navigate('Hjem')} >

      </Button>
    </View>
  );
}

function HjemScreen({navigation}){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
<Text>Hjemme skærm</Text>
<Button title='Gå til opgave'
onPress={() => navigation.navigate('Details')} >
</Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Hjem'>
    <Stack.Screen name='Hjem' component={HjemScreen} />
    <Stack.Screen name='Details' component={DetailsScreen}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}
//Navigation fra React Native dokumentation - fungerer 

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
// const AssignmentScreen=({navigation, route}) => {
//   return <Text>This is {route.params.name} screen</Text>
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
