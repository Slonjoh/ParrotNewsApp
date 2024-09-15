import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View, Linking } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setTopStories } from '../actions/storyActions';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track the current page
  const [storiesPerPage] = useState(7); // Number of stories per page
  const [storyIds, setStoryIds] = useState([]); // Store story IDs to paginate
  const dispatch = useDispatch();
  const topStories = useSelector(state => state.stories.topStories);

  useEffect(() => {
    fetchStoryIds();
  }, []);

  useEffect(() => {
    if (storyIds.length > 0) {
      fetchTopStories();
    }
  }, [page, storyIds]);

  const fetchStoryIds = async () => {
    try {
      // Step 1: Fetch top story by IDs and store them for pagination
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const ids = await response.json();
      setStoryIds(ids);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchTopStories = async () => {
    try {
      setLoading(true);

      // To calculate start and end index for pagination
      const start = (page - 1) * storiesPerPage;
      const end = start + storiesPerPage;
      
      // Fetch details for the stories on the current page
      const stories = await Promise.all(
        storyIds.slice(start, end).map(async (id) => {
          const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return storyResponse.json();
        })
      );

      // Append new stories to the existing stories in Redux store
      dispatch(setTopStories([...topStories, ...stories]));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const loadMoreStories = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openStory = (url) => {
    if (url) {
      Linking.openURL(url); // Opens the story in the browser
    } else {
      console.error("No URL for this story.");
    }
  };

  if (loading && page === 1) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={topStories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }} onPress={() => openStory(item.url)}>
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>By {item.by}</Paragraph>
            <Paragraph>Score: {item.score}</Paragraph>
          </Card.Content>
        </Card>
      )}
      onEndReached={loadMoreStories}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default HomeScreen;
