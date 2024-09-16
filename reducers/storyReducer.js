import { SET_TOP_STORIES } from '../actions/storyActions';

const initialState = {
  topStories: [],
  readStories: [],
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_STORIES:
      return {
        ...state,
        topStories: action.payload,
      };
      case 'MARK_STORY_AS_READ':
        return {
          ...state,
          readStories: [...state.readStories, action.payload],
        };

    default:
      return state;
  }
};

export default storyReducer;
