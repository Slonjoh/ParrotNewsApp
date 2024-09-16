import React, { Component } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

class StoryCard extends Component {
  shouldComponentUpdate(nextProps) {
    // Update only if `isRead` or `item.id` changes
    return (
      nextProps.isRead !== this.props.isRead ||
      nextProps.item.id !== this.props.item.id
    );
  }

  render() {
    const { item, openStory, isRead } = this.props;

    return (
      <Card
        style={{
          margin: 10,
          backgroundColor: isRead ? '#f0f0f0' : '#fff', // Change background color based on read status
        }}
        onPress={item.url ? () => openStory(item.url, item.id) : null} // Only set onPress if there's a URL
      >
        <Card.Content>
          <Title style={{ fontSize: 18, color: isRead ? '#555' : '#000' }} allowFontScaling={false}>{item.title}</Title>
          <Paragraph style={{ fontSize: 14, color: isRead ? '#777' : '#333' }} allowFontScaling={false}>By {item.by}</Paragraph>
          <Paragraph style={{ fontSize: 14, color: isRead ? '#777' : '#333' }} allowFontScaling={false}>Score: {item.score}</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}

export default StoryCard;
