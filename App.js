import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CVView from './components/CV_components/cvView';
import CVEdit from './components/CV_components/cvEdit';

export default function App() {
  const initialCVData = {
    fullName: 'Ajibise Kehinde Ifeoluwa',
    slackUsername: 'AjKenz',
    githubHandle: 'AjKenz',
    bio: 'Software developer with a passion for elegant solutions and a commitment to clean, efficient code',
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

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="#5BBCBF" barStyle="light-content" />
        <TouchableOpacity onPress={() => setEdit(false)} style={styles.backButton}>
          {edit && <Text style={styles.backArrow}>←</Text>}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My CV</Text>
        <View />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}

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
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#5BBCBF',
    paddingTop: 50 + StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  backButton: {
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    flex: 1,
    top: 10,
    padding: 10,
  },
});
