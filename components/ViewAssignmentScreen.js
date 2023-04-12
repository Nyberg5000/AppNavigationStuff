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
        fetch('https://mocki.io/v1/847f6a9a-4eb4-4d2b-be82-599014b729a1');
        const json = await response.json();
        setData(json.assignments);
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
            {item.title}, {item.address}
        </Text>
    )}  
    />
    )}
</View>
);
};

export default ViewAssignmentScreen;