import React, { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { useScrollToTop } from '@react-navigation/native';
import { Screen } from '@serenity/components';
import { useSelector } from 'react-redux';
import { selectLikedArtistIds } from '@serenity/core';
import { FollowArtistDialog } from './components/FollowArtistDialog';
import { Artist } from './components/Artist';

export const ArtistScreen = () => {
  const ref = useRef(null);
  useScrollToTop(ref);

  const [visible, setVisible] = useState(false);
  const artists = useSelector(state => selectLikedArtistIds(state));

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };


  return (
    <Screen>
      <FlatList
        ref={ref}
        ListHeaderComponent={() => (
          <List.Item
            title="Add artist"
            left={() => (
              <Avatar.Icon
                size={54}
                // style={{ backgroundColor: colors.surface }}
                icon="plus"
              />
            )}
            onPress={showDialog}
          />
        )}
        data={artists}
        keyExtractor={(item) => item}
        renderItem={({ item }: { item: string }) => <Artist id={item} />}
      />
      <FollowArtistDialog
        visible={visible}
        hideDialog={hideDialog}
      />
    </Screen>
  );
};
