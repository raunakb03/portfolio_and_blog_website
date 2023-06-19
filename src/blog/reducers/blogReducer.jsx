// initial state
// setting temp data
export const initialState = {
  blogTitle: "",
  showTitleInputSection: true,
  coverImage: null,
  isLoading: false,
  createBlogLoading: false,
  coverImageUrl: null,
  // coverImageUrl:
  //   "https://res.cloudinary.com/dmnosl5ir/image/upload/v1686767005/fiverr/rj6d1r9sl1bew2efhsso.png",
  isCoverImagePresent: false,
  showSelectInputSection: false,
  currentInputType: "text",
  showTextInputSection: false,
  showImageInputSection: false,
  showCodeInputSection: false,
  textIndex: 0,
  imageIndex: 0,
  codeIndex: 0,
  inputText: "",
  inputImage: null,
  inputCode: null,
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: payload,
      };
      case "CREATE_BLOG_LOADING":
        return {
          ...state,
          createBlogLoading: payload,
        };
    case "BLOG_TITLE_CHANGE":
      return {
        ...state,
        blogTitle: payload,
      };
    case "SHOW_TITLE_INPUT_SECTION":
      return {
        ...state,
        showTitleInputSection: payload,
      };
    case "INPUT_COVER_IMAGE":
      return {
        ...state,
        coverImage: payload,
      };
    case "COVER_IMAGE_URL":
      return {
        ...state,
        coverImageUrl: payload,
        isCoverImagePresent: true,
      };
    case "CHANGE_INPUT_TYPE":
      return {
        ...state,
        currentInputType: payload,
        showTextInputSection: payload === "text",
        showImageInputSection: payload === "image",
        showCodeInputSection: payload === "code",
      };
    case "SHOW_SELECT_INPUT_SECTION":
      return {
        ...state,
        showSelectInputSection: payload,
        showTextInputSection: payload === true ? true : false,
        showImageInputSection: false,
        showCodeInputSection: false,
      };
    case "TEXT_CHANGE":
      return {
        ...state,
        inputText: payload,
      };
    case "IMAGE_CHANGE":
      return {
        ...state,
        inputImage: payload,
      };
    case "INCREASE_TEXT_INDEX":
      return {
        ...state,
        textIndex: payload,
      };
    case "INCREASE_IMAGE_INDEX":
      return {
        ...state,
        imageIndex: payload,
      };
    default:
      return state;
  }
}
