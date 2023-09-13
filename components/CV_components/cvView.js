import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CVView = ({ cvData, goToEdit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.idContainer}>
                <Text style={styles.title}>Full Name</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.displayText}>{cvData.fullName}</Text>
                </View >
            </View>
            <View style={styles.idContainer}>
                <Text style={styles.title}>Slack Username</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.displayText}>{cvData.slackUsername}</Text>
                </View >
            </View>
            <View style={styles.idContainer}>
                <Text style={styles.title}>GitHub Handle</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.displayText}>{cvData.githubHandle}</Text>
                </View >
            </View>
            <View style={styles.idContainer}>
                <Text style={styles.title}>Bio</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.displayText}>{cvData.bio}</Text>
                </View >
            </View>
            <TouchableOpacity onPress={goToEdit} style={styles.button}>
                <Text style={styles.buttonText}>Edit CV</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    idContainer: {
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    textContainer: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    
    },
    displayText: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#00ACED',
        width: '50%',
        marginTop: 30,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,

    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }
})



export default CVView;
