import CalendarStrip from 'react-native-calendar-strip';
import {View, StyleSheet} from 'react-native';

  //skriv show assignment i terminal når man trykker på et tal i kalender - virker ikke
const onPressHandler = () => {
    console.log("Show assignment");
};

const CalendarScreen = () => (
    <View style={styles.container}>
<CalendarStrip
scrollable
onDateSelected={onPressHandler}
style={{height:200, paddingTop:20, paddingBottom:10}}
calendarColor={'#3343CE'}
calendarHeaderStyle={{color:'white'}}
dateNumberStyle={{color:'white'}}
dateNameStyle={{color:'white'}}
iconContainer={{flex:0.1}}
/>
    </View>
);

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {flex:1}
});