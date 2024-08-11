import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearch}
        style={styles.searchBar}
        mode="outlined"
        outlineColor="transparent"
        selectionColor="#6200ee"
        theme={{ roundness: 50 }}
        left={<TextInput.Icon name="magnify" />}
        right={
          searchQuery.length > 0 && (
            <TextInput.Icon
              name="close"
              onPress={() => setSearchQuery('')}
            />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    
  },
  searchBar: {
    height: 40,
    padding:10,
    backgroundColor: '#f0f0f0',
  },
});

export default SearchBar;
