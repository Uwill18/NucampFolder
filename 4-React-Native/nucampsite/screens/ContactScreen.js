import {ScrollView,Card,Text } from 'react-native-elements';

const ContactScreen = () => {
    
  return (
    <ScrollView>
             <Card wrapperStyle={{margin: 10}}>
            <Card.Title>
              Contact
            </Card.Title>
            <Card.Divider/>
            <Text> 1 Nucamp Way</Text>
            <Text>  Seattle, WA 98001</Text>
            <Text style={{marginBottom:10}}>U.S.A</Text>
            <Text> Phone: 1-206-555-1234 </Text>
            <Text style={{marginBottom:10}}> Email: campsites@nucamp.co</Text>
        </Card>
    </ScrollView>
  );


}



export default ContactScreen;