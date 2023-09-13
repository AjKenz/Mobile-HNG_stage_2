import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CVView from './components/CV_components/cvView';
import CVEdit from './components/CV_components/cvEdit';

export default function App() {
  const initialCVData = {
    fullName: 'Ajibise Kehinde Ifeoluwa',
    slackUsername: 'AjKenz',
    githubHandle: 'AjKenz',
    bio: 'Software Developer',
  };

  const [cvData, setCvData] = useState(initialCVData);
  const [edit, setEdit] = useState(false);

  const goToEdit = () => {
    setEdit(true);
  };

  const saveChanges = (newData) => {
    setCvData(newData);
    setEdit(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#F6F8FA" barStyle="dark-content" />
        <Text style={styles.headerTitle}>My CV</Text>
      </View>

      <View style={styles.body}>
        {edit ? (
          <CVEdit cvData={cvData} onSave={saveChanges} />
        ) : (
          <CVView cvData={cvData} goToEdit={goToEdit} />
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
  header: {
    backgroundColor: '#00ACED',
    paddingTop: 50 + StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  body: {
    flex: 1,
    top: 50,
  }
});
