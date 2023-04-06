import * as React from 'react';
import { TextInput, Button } from 'react-native';

function CreatePostScreen({navigation,route}){
    const [postText, setPostText] = React.useState('');
  //"skriv kommentar"
    return(
      <>
     <TextInput multiline placeholder='Skriv en kommentar'
     style={{height:200, padding:10, backgroundColor:'blue'}}
     value={postText}
     onChangeText={setPostText}
     ></TextInput>
     <Button title='Opret'
     onPress={()=> {
      //pass and merge params back to home screen
      navigation.navigate({
        name: 'Hjem',
        params: {post: postText},
        merge: true,
      });
     }}
      >
     </Button>
      </>
    );
  }
  export default CreatePostScreen;