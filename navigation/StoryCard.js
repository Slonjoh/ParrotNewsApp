import React, { memo } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

// Memoized StoryCard Component
const StoryCard = memo(({ item, openStory, isRead }) => (
  <Card
    style={{
      margin: 10,
      backgroundColor: isRead ? '#e0e0e0' : '#fff', // Change background color based on read status
    }}
    onPress={item.url ? () => openStory(item.url, item.id) : null} // Only set onPress if there's a URL
  >
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>By {item.by}</Paragraph>
      <Paragraph>Score: {item.score}</Paragraph>
    </Card.Content>
  </Card>
), (prevProps, nextProps) => {
  // Only re-render if `isRead` or `item` changes
  return prevProps.isRead === nextProps.isRead && prevProps.item.id === nextProps.item.id;
});

export default StoryCard;
