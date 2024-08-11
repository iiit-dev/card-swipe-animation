import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Avatar, IconButton, Paragraph, Title, Subheading } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const CardComp = () => {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        title="John Doe"
        subtitle="August 1, 2024"
        left={(props) => <Avatar.Icon {...props} icon="folder" style={{ backgroundColor: 'red' }} />}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
      />
      <Card.Content>
        <Image
          source={{ uri: 'https://www.example.com/static/images/cards/paella.jpg' }}
          style={styles.image}
        />
        <Paragraph>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <IconButton icon="heart" onPress={() => {}} />
        <IconButton icon="share-variant" onPress={() => {}} />
        <IconButton
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          onPress={handleExpandClick}
        />
      </Card.Actions>
      {expanded && (
        <Card.Content>
          <Title>Method:</Title>
          <Paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
          </Paragraph>
          <Paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Paragraph>
          <Paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Paragraph>
          <Paragraph>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Paragraph>
        </Card.Content>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
  },
  image: {
    height: 194,
    width: '100%',
    marginBottom: 10,
  },
});

export default CardComp;
