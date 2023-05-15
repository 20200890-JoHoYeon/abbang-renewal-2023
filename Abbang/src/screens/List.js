import React from 'react';
import {Button, View, Image} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  {_id: 1, name: '1'},
  {_id: 2, name: '2'},
  {_id: 3, name: '3'},
];

const List = ({navigation}) => {
  const _onPress = item => {
    navigation.navigate('Item', {id: item._id, name: item.name});
  };

  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item => (
        <View>
          <Button
            key={item.id}
            title={item.name}
            onPress={() => _onPress(item)}
          />
        </View>
      ))}
    </Container>
  );
};

export default List;

/* scr/screens/List.js */
