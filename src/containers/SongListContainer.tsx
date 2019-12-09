import React from 'react';
import { useDispatch } from 'react-redux';
import { SongList } from '../components/SongList';
import { addToQueue, addToPlaylist } from '../actions/playerState';
import { TrackProps } from '../types';

interface SongListContainerProps {
  data: TrackProps[];
  title: string;
  cover: string;
  fetchData(): void;
}

export function SongListContainer({
  data,
  title,
  cover,
  fetchData,
}: SongListContainerProps) {
  const dispatch = useDispatch();

  function addSongsToPlaylist(id: string, song: TrackProps) {
    dispatch(addToPlaylist(id, song));
  }

  function addSongsToQueue(songs: TrackProps[] | TrackProps) {
    dispatch(addToQueue(songs));
  }
  return (
    <SongList
      data={data}
      title={title}
      cover={cover}
      fetchData={fetchData}
      addToPlaylist={addSongsToPlaylist}
      addToQueue={addSongsToQueue}
    />
  );
}
