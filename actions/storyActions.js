export const SET_TOP_STORIES = 'SET_TOP_STORIES';

export const setTopStories = (stories) => ({
  type: SET_TOP_STORIES,
  payload: stories,
});

export const markStoryAsRead = (storyId) => ({
  type: 'MARK_STORY_AS_READ',
  payload: storyId,
});