import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const currentUser = gql`
  query currentUserGet {
    currentUserGet {
      id
      firstName
      lastName
    }
  }
`;

function HomeScreen() {
  const queryResult = useQuery(currentUser);
  const firstName = queryResult?.data?.currentUserGet?.firstName || '';
  const lastName = queryResult?.data?.currentUserGet?.lastName || '';

  return (
    <View style={styles.container}>
      <Text>
        Username is {firstName} {lastName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 50,
    backgroundColor: 'red',
  },
});

export default HomeScreen;
