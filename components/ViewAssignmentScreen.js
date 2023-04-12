import React, {useEffect, useState} from 'react';
import { View, Text, ActivityIndicator, FlatList } from "react-native";



// function ViewAssignmentScreen(){
//     return(
//         <View>
//             <Text>Hello from Opgave</Text>
//         </View>
//     );
// }

const ViewAssignmentScreen = () =>{
const [isLoading, setLoading] = useState(true);
const [data, setData]= useState([]);

const getAssignments = async () => {
    try{
        const response = await
        fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        setData(json.movies);
    }catch(error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
useEffect(() => {
    getAssignments();
}, []);

return(
<View style={{flex:1, padding:24}} >
    {isLoading ? (
    <ActivityIndicator />
    ) : (
    <FlatList
    data={data}
    keyExtractor={({id}) => id }
    renderItem={({item})=> (
        <Text>
            {item.title}, {item.releaseYear}
        </Text>
    )}  
    />
    )}
</View>
);
};

export default ViewAssignmentScreen;