import 'react-native-gesture-handler'; // Import gesture handler at the top
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SimpleCard from './Components/SimpleCard';
// import Card from './Card';

const cards = Array.from({ length: 100 }, (_, i) => `Card ${i + 1}`);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => <SimpleCard text={card} />}
        onSwiped={(cardIndex) => console.log(`${cardIndex+1} cards have been swiped`)}
        onSwipedAll={() => console.log('All cards swiped')}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: 'red',
                borderColor: 'red',
                color: 'white',
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginTop: -30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'green',
                borderColor: 'green',
                color: 'white',
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
