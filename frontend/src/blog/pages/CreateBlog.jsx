/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import upload from "../../utils/upload";
import BlogSection from "./BlogSection";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { initialState, reducer } from "../reducers/blogReducer";
import axios from "axios";
import {
  showToastDangerMessage,
  showToastSuccessMessage,
} from "../../utils/Toast";
import { Oval } from "react-loader-spinner";
import GetUser from "../context/userContext";

const CreateBlog = () => {
  const user = GetUser();

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    blogTitle,
    showTitleInputSection,
    coverImage,
    coverImageUrl,
    isLoading,
    createBlogLoading,
    isCoverImagePresent,
    blogCategory,
    showBlogCategorySection,
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

  const [blogObject, setblogObject] = useState(new Map());

  const handleSetBlogTitle = (e) => {
    e.preventDefault();
    if (blogTitle === "") {
      showToastDangerMessage("Title can't be empty!!!");
      return;
    }
    let newBlogObject = new Map(blogObject);
    newBlogObject.set("blogTitle", blogTitle);
    setblogObject(newBlogObject);
    dispatch({
      type: "SHOW_TITLE_INPUT_SECTION",
      payload: false,
    });
    showToastSuccessMessage("Blog Title Added!!!");
  };

  const handleAddCategory = () => {
    if (blogCategory === "") {
      showToastDangerMessage("selecte a blog category!!!");
      return;
    }
    let newBlogObject = new Map(blogObject);
    newBlogObject.set("category", blogCategory);
    setblogObject(newBlogObject);
    dispatch({
      type: "SHOW_CATEGORY_INPUT_SECTION",
    });
    showToastSuccessMessage("Blog category added!!!");
  };

  const handleCoverImageUpload = async () => {
    if (coverImage === null) {
      showToastDangerMessage("Please upload a cover image!!!");
      return;
    }
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const url = await upload(coverImage);
      dispatch({ type: "COVER_IMAGE_URL", payload: url });
      let newBlogObject = new Map(blogObject);
      newBlogObject.set("coverImage", url);
      setblogObject(newBlogObject);
      showToastSuccessMessage("Cover Image Uploaded Successfully!!!");
    } catch (error) {
      console.log(error);
      showToastDangerMessage("There was an error uploading the cover image!!!");
    }
    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
  };

  const handleInputTextSubmit = (e) => {
    e.preventDefault();
    if (inputText == "") {
      showToastDangerMessage("Blog Text Can't Be Empty!!!");
      return;
    }
    let index = textIndex;
    let key = `text${index}`;
    let newBlogObject = new Map(blogObject);
    newBlogObject.set(key, inputText);
    setblogObject(newBlogObject);
    dispatch({ type: "INCREASE_TEXT_INDEX", payload: textIndex + 1 });
    dispatch({ type: "TEXT_CHANGE", payload: "" });
    dispatch({ type: "SHOW_SELECT_INPUT_SECTION", payload: false });
    showToastSuccessMessage("Text Added Successfully!!!");
  };

  const handleInputImageSubmit = async (e) => {
    if (inputImage === null) {
      showToastDangerMessage("Please upload a cover image!!!");
      return;
    }
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      e.preventDefault();
      let index = imageIndex;
      let key = `image${index}`;
      const url = await upload(inputImage);
      let newBlogObject = new Map(blogObject);
      newBlogObject.set(key, url);
      setblogObject(newBlogObject);
      dispatch({ type: "INCREASE_IMAGE_INDEX", payload: imageIndex + 1 });
      dispatch({ type: "IMAGE_CHANGE", payload: null });
      dispatch({ type: "SHOW_SELECT_INPUT_SECTION", payload: false });
    } catch (error) {
      console.log(error);
      showToastDangerMessage("There was an error uploading the cover image!!!");
    }
    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
  };

  const createBlogHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_BLOG_LOADING",
      payload: true,
    });
    const blogData = Object.fromEntries(blogObject);
    console.log(blogData);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/blog/${user._id}`,
        { blogContent: blogData },
        config
      );

      showToastSuccessMessage(data.msg);
    } catch (error) {
      console.log(error);
      showToastDangerMessage("There was an error creating the blog!!!");
    }
    dispatch({
      type: "CREATE_BLOG_LOADING",
      payload: false,
    });
  };

  return (
    <div className="min-h-[100vh] mt-[90px]">
      <div className="h-full w-full py-10 px-5 lg:px-3">
        <div className="max-w-[1250px] mx-auto flex align-middle flex-col justify-center gap-12">
          <div className="flex align-middle justify-center">
            <p className="text-3xl font-bold">Add a Blog...</p>
          </div>

          <BlogSection blogObject={blogObject} />
          {/* main div for the whole of input section */}
          <div className="flex flex-col gap-7">
            {/* blog title section */}
            {showTitleInputSection && (
              <>
                <div className="flex flex-col justify-start items-start gap-4">
                  <h3>Enter Blog Title</h3>
                  <input
                    type="text"
                    placeholder="Enter blog title..."
                    value={blogTitle}
                    onChange={(e) =>
                      dispatch({
                        type: "BLOG_TITLE_CHANGE",
                        payload: e.target.value,
                      })
                    }
                  />
                  <button
                    className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1]"
                    onClick={handleSetBlogTitle}
                  >
                    Add Title
                  </button>
                </div>
                <hr />
              </>
            )}

            {/* blog category section */}
            {showBlogCategorySection && (
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <p>Add Blog Category</p>
                    <select
                      name="category-options"
                      id="category-options"
                      className="w-1/2 bg-gray-200 py-2 px-2"
                      onChange={(e) =>
                        dispatch({
                          type: "ADD_BLOG_CATEGORY",
                          payload: e.target.value,
                        })
                      }
                    >
                      <option value="Software">Software</option>
                      <option value="Web Development">Web Development</option>
                      <option value="AI">AI</option>
                    </select>

                    <button
                      className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1] w-fit"
                      onClick={handleAddCategory}
                    >
                      Add Category
                    </button>
                  </div>
                </div>
                <hr />
              </>
            )}
            {/* div for the cover image */}
            {!isCoverImagePresent && (
              <>
                <div className="flex flex-col justify-start items-start gap-4">
                  <p>Select the cover image from the blog:</p>
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
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Oval
                        height={30}
                        width={30}
                        color="#000"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#fff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    ) : (
                      "upload"
                    )}
                  </button>
                </div>
              </>
            )}
            <hr />
            {showTextInputSection && (
              <>
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
                <hr />
              </>
            )}
            {showImageInputSection && (
              <>
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
                  <button
                    className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1]"
                    onClick={handleInputImageSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Oval
                        height={30}
                        width={30}
                        color="#000"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#fff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    ) : (
                      "upload"
                    )}
                  </button>
                </div>
                <hr />
              </>
            )}
            {showCodeInputSection && (
              <>
                <h3>insert code</h3> <hr />
              </>
            )}
            {/* add a new input section element */}
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
          <button
            className="p-3 px-8 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1] flex justify-center items-center"
            onClick={createBlogHandler}
            disabled={createBlogLoading || isLoading}
          >
            {createBlogLoading ? (
              <Oval
                height={30}
                width={30}
                color="#000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#fff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              "Create Blog"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
