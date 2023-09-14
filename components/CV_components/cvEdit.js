import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Keyboard, ScrollView } from 'react-native';

const CVEdit = ({ cvData, onSave }) => {
  const [fullName, setFullName] = useState(cvData.fullName);
  const [slackUsername, setSlackUsername] = useState(cvData.slackUsername);
  const [githubHandle, setGithubHandle] = useState(cvData.githubHandle);
  const [bio, setBio] = useState(cvData.bio);
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      const keyboardHeight = event.endCoordinates.height;
      setKeyboardOffset(keyboardHeight);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOffset(0);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const saveChanges = () => {
    onSave({ fullName, slackUsername, githubHandle, bio });
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: keyboardOffset }}
      style={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.idContainer}>
        <Text style={styles.title}>Full Name</Text>
        <TextInput
          placeholder="Enter Your Full Name"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.title}>Slack Username</Text>
        <TextInput
          placeholder="Enter Your Slack Username"
          value={slackUsername}
          onChangeText={setSlackUsername}
          style={styles.input}
        />
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.title}>GitHub Handle</Text>
        <TextInput
          placeholder="Enter Your Full GitHub Handle"
          value={githubHandle}
          onChangeText={setGithubHandle}
          style={styles.input}
        />
      </View>
      <View style={styles.idContainer}>
        <Text style={[styles.title, { marginBottom: 10 }]}>Bio</Text>
        <TextInput
          placeholder="Enter Your bio"
          value={bio}
          onChangeText={setBio}
          multiline
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={saveChanges} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  idContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5BBCBF',
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
  },
});

export default CVEdit;
