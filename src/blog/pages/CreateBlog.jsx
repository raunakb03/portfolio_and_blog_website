/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import upload from "../../utils/upload";
import BlogSection from "./BlogSection";

const CreateBlog = () => {
  // initial state
  const initialState = {
    coverImage: null,
    coverImageUploading: false,
    coverImageUrl: null,
    isCoverImagePresent: false,
  };

  // reducer function
  function reducer(state, action) {
    switch (action.type) {
      case "INPUT_COVER_IMAGE":
        return {
          ...state,
          coverImage: action.payload,
        };

      case "COVER_IMAGE_URL":
        return {
          ...state,
          coverImageUrl: action.payload,
          isCoverImagePresent: true,
        };

      default:
        return state;
    }
  }

  // reducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  // destructuring elements from the reducer state
  const { coverImage, coverImageUrl, isCoverImagePresent } = state;

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
  const blogObject = {
    coverImage: coverImageUrl,
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
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
