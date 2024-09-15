import { SET_TOP_STORIES } from '../actions/storyActions';

const initialState = {
  topStories: [],
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_STORIES:
      return {
        ...state,
        topStories: action.payload,
      };
    default:
      return state;
  }
};

export default storyReducer;
