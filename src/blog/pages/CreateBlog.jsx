/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import upload from "../../utils/upload";
import BlogSection from "./BlogSection";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateBlog = () => {
  // initial state
  // setting temp data
  const initialState = {
    coverImage: null,
    coverImageUploading: false,
    // coverImageUrl: null,
    coverImageUrl:
      "https://res.cloudinary.com/dmnosl5ir/image/upload/v1686767005/fiverr/rj6d1r9sl1bew2efhsso.png",
    isCoverImagePresent: true,
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

  // reducer function
  function reducer(state, { type, payload }) {
    switch (type) {
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
      default:
        return state;
    }
  }

  // reducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  // destructuring elements from the reducer state
  const {
    coverImage,
    coverImageUrl,
    isCoverImagePresent,
    showSelectInputSection,
    showTextInputSection,
    showImageInputSection,
    showCodeInputSection,
    currentInputType,
    textIndex,
    imageIndex,
    codeIndex,
    inputText,
    inputImage,
    inputCode,
  } = state;

  // uploading cover image in the cloudinary and getting image url
  const handleCoverImageUpload = async () => {
    try {
      const url = await upload(coverImage);
      dispatch({ type: "COVER_IMAGE_URL", payload: url });
    } catch (error) {
      console.log(error);
    }
  };

  // blog object
  const [blogObject, setblogObject] = useState({ coverImage: coverImageUrl });

  const handleInputTextSubmit = (e) => {
    e.preventDefault();
    let index = textIndex;
    let key = `text${index}`;
    const newBlogObject = { ...blogObject, [key]: inputText };
    setblogObject(newBlogObject);
    dispatch({ type: "INCREASE_TEXT_INDEX", payload: textIndex + 1 });
    dispatch({ type: "TEXT_CHANGE", payload: "" });
    dispatch({ type: "SHOW_SELECT_INPUT_SECTION", payload: false });
  };

  return (
    <div className="min-h-[100vh] pt-[85px]">
      <div className="h-full w-full py-10 px-5 md:px-0 md:py-20">
        <div className="max-w-[1250px] mx-auto flex align-middle flex-col justify-center gap-12">
          <div className="flex align-middle justify-center">
            <p className="text-3xl font-bold">Add a Blog...</p>
          </div>

          <BlogSection blogObject={blogObject} />
          {/* main div for the whole of input section */}
          <div className="flex flex-col gap-7">
            {/* div for the cover image */}
            {!isCoverImagePresent && (
              <div className="flex flex-col justify-start items-start gap-4">
                <p className="text-[20px]">
                  --{`>`}Select the cover image from the blog:
                </p>
                <input
                  type="file"
                  onChange={(e) =>
                    dispatch({
                      type: "INPUT_COVER_IMAGE",
                      payload: e.target.files[0],
                    })
                  }
                />
                <button
                  className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1]"
                  onClick={handleCoverImageUpload}
                >
                  Upload
                </button>
              </div>
            )}
            <hr />
            {showTextInputSection && (
              <div className="flex flex-col justify-start items-start gap-4">
                <p>Enter the text:</p>
                <textarea
                  className="w-full"
                  name="desc-input"
                  cols="30"
                  rows="10"
                  value={inputText}
                  placeholder="Enter the text"
                  onChange={(e) => {
                    dispatch({
                      type: "TEXT_CHANGE",
                      payload: e.target.value,
                    });
                  }}
                ></textarea>
                <button
                  className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1]"
                  onClick={handleInputTextSubmit}
                >
                  Add Text
                </button>
              </div>
            )}
            {showImageInputSection && (
              <div className="flex flex-col justify-start items-start gap-4">
                <p>Insert an Image:</p>
                <input
                  type="file"
                  name="image-input"
                  onChange={(e) =>
                    dispatch({
                      type: "IMAGE_CHANGE",
                      payload: e.target.files[0],
                    })
                  }
                />
                <button className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1]">
                  Upload Image
                </button>
              </div>
            )}
            {showCodeInputSection && <h3>insert code</h3>}
            {/* add a new input section element */}
            <hr />
            <div className="flex flex-col justify-start items-start gap-4">
              <div
                className="flex gap-4 align-middle justify-start items-center cursor-pointer w-fit"
                onClick={() =>
                  dispatch({
                    type: "SHOW_SELECT_INPUT_SECTION",
                    payload: true,
                  })
                }
              >
                <AiOutlinePlusCircle />
                <p>Add an input section:</p>
              </div>
              {showSelectInputSection && (
                <div className="w-1/2 flex flex-col gap-3">
                  <select
                    name="input-options"
                    id="input-options"
                    className="w-full bg-gray-200 py-2 px-2"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_INPUT_TYPE",
                        payload: e.target.value,
                      })
                    }
                  >
                    <option value="text">Text</option>
                    <option value="image">Image</option>
                    <option value="code">Code</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

// !TODO: on user clicking the button to add the text or image with current index, use onClick on the button to add the text or image in the blog object and also make the state null for these inputs and increase the index.