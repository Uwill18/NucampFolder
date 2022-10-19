import { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    Switch,
    StyleSheet,
    Button,
    Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';

const ReservationScreen = () => {
    const [campers, setCampers] = useState(1);
    const [hikeIn, setHikeIn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const alert_msg =`Number of Campers : ${campers}
    \nHike-In? ${hikeIn ? true : false} 
    \nDate :${date.toLocaleDateString('en-US')}`;
    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleReservation = () => {

        Alert.alert(
            'Begin Search?',
            alert_msg,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => { () => resetForm() }
                },
                {
                    text: 'OK',
                    onPress: () => { () => resetForm() }
                }
            ],
            { cancelable: false }
        );
        console.log('campers:', campers);
        console.log('hikeIn:', hikeIn);
        console.log('date:', date);

    };

    const resetForm = () => {
        setCampers(1);
        setHikeIn(false);
        setDate(new Date());
        setShowCalendar(false);
    };

    return (
        <ScrollView>
            <Animatable.View
                animation='zoomIn'
                duration={2000}
                delay={1000} >
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Campers:</Text>
                    <Picker style={styles.formItem}
                        selectedValue={campers}
                        onValueChange={(itemValue) => setCampers(itemValue)}
                    >
                        <Picker.Item label='1' value={1} />
                        <Picker.Item label='2' value={2} />
                        <Picker.Item label='3' value={3} />
                        <Picker.Item label='4' value={4} />
                        <Picker.Item label='5' value={5} />
                        <Picker.Item label='6' value={6} />
                    </Picker>
                </View>
            </Animatable.View>
            <Animatable.View
                animation='zoomIn'
                duration={2000}
                delay={1000} >
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Hike In?</Text>
                    <Switch
                        value={hikeIn}
                        trackColor={{ true: '#5637DD', false: null }}
                        onValueChange={(value) => setHikeIn(value)}
                    />
                </View>
            </Animatable.View>
            <Animatable.View
                animation='zoomIn'
                duration={2000}
                delay={1000} >
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date:</Text>
                    <Button
                        onPress={() => setShowCalendar(!showCalendar)}
                        title={date.toLocaleDateString('en-US')}
                        color='#5637DD'
                        accessibilityLabel='Tap me to select a reservation date'
                    />
                </View>
            </Animatable.View>
            {showCalendar && (
                <DateTimePicker
                    value={date}
                    mode='date'
                    display='default'
                    onChange={onDateChange}
                />
            )}
            <Animatable.View
                animation='zoomIn'
                duration={2000}
                delay={1000} >
                <View style={styles.formRow}>
                    <Button
                        onPress={() => handleReservation()}
                        title='Search Availability'
                        color='#5637DD'
                        accessibilityLabel='Tap me to search for available campsites to reserve'
                    />
                </View>
            </Animatable.View>


            {/* <Animatable.View
               animation='zoomIn'
               duration={2000}
               delay={1000} >
                <View>
                    <Text>
                        Search Campsite Reservations
                    </Text>
                    <Text>
                        Number of Campers: {campers}
                    </Text>
                    <Text>
                        Hike-In?: {hikeIn ? 'Yes' : 'No'}
                    </Text>
                    <Text>
                        Date: {date.toLocaleDateString('en-US')}
                    </Text>
                    <Button
                        onPress={() => {handleReservation(Alert)}}
                        color='#5637DD'
                        title='Close'
                    />
                </View>
                </Animatable.View>  */}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default ReservationScreen;