import { StyleSheet }  from 'react-native';
import Constants from 'expo-constants'; 

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
  headerTextBold: {
        fontWeight: 'bold',
  },

    Title: {
        fontSize: 30,
        marginTop: 45,
        marginBottom: 16,
        fontWeight: 'bold',
        color: '#13131a',
    },
    Description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    incidentList: {
        marginTop: 32,
    },

    Incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#FFF',
        marginBottom: 16
    },

    IncidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    IncidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailButtonText: {
     color: '#E02041',
     fontSize: 15,
     fontWeight: 'bold'
    },
});