const createDefaults = () => ({
  items: [],
  selected: undefined,
});

const files = (state = createDefaults(), { type, payload, meta}) => {
  switch(type) {
    case '@@STUDIO/SET_FILES':
      return {
        ...state,
        items: payload,
      };
    case '@@STUDIO/SELECT_FILE': {
      return {
        ...state,
        selected: payload,
      };
    }
    default:
      return state;
  }
};

export default files;
