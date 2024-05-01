"use client";
import React, {useState, useRef, useEffect} from "react";
import {Button} from "@/components/ui/moving-border";
import parse from "html-react-parser";
import {styles} from "@/app/styles";
import UploadModal from "@/components/UploadModal";
import axios from "axios";
import TagSelect from "@/components/TagSelect/TagSelect";
import Category from "@/components/Dropdown/category";

const BlogCreate = () => {
  const [JoditEditor, setJoditEditor] = useState(null);

  const [data, setData] = useState({
    title: "",
    description: "",
    blog_contents: "",
    created_by: "",
    tags: [],
    category: "",
    blog_thumbnail: "",
    reading_time: "",
    blog_of_the_day: false,
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    // Dynamically import JoditEditor only on the client side
    import("jodit-react").then((Jodit) => {
      setJoditEditor(Jodit.default);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const Token = localStorage.getItem("AccessToken");
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await axios({
        method: "post",
        url: "https://erex-backend.onrender.com/admin/blog",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": `${Token}`,
        },
      });

      console.log("Form Submitted Successfully");
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  const handleThumbnailUpload = (image) => {
    setData((prevData) => ({...prevData, blog_thumbnail: image}));
  };

  const handleTagsChange = (newTagsArray) => {
    setData((prevData) => ({...prevData, tags: newTagsArray}));
    console.log("object", newTagsArray);
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    setData((prevData) => ({...prevData, blog_of_the_day: isChecked}));
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setData((prevData) => ({...prevData, category: category}));
  };
  return (
    <>
      <section className="relative flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark">
        <div className="w-full max-w-screen-2xl">
          <div
            className={` ${styles.yPadding}   ${styles.xMargin}
                  2xl:border-y-4  md:border-x-2 border-watermark  mt-20 flex  flex-col lg:flex-row relative  bg-background `}>
            <div className="flex flex-col items-center justify-center px-4 lg:w-1/2">
              <div className="px-3 py-3 rounded-lg bg-primary">
                <h2 className="font-medium font-federo">Create Your Blog with Ease</h2>
                <p className="font-normal font-public">
                  Unleash Your Creativity and Voice Through Personalized Blogging
                  Platforms
                </p>
              </div>
              <div onSubmit={(e) => e.preventDefault()} className="w-full">
                <div className="flex flex-col gap-3 px-4 py-4 mt-8 rounded-lg bg-lightwhite lg:px-16 md:gap-3">
                  <label
                    className="font-medium md:text-base xl:text-xl font-public text-subheading"
                    htmlFor="title">
                    Title
                  </label>
                  <input
                    className="w-full p-3 text-sm font-normal border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    type="text"
                    placeholder="Title..."
                    value={data.title}
                    onChange={(e) =>
                      setData((prevState) => ({...prevState, title: e.target.value}))
                    }
                  />
                  {/* Add input fields for the new properties */}
                  <label
                    className="font-medium md:text-base xl:text-xl font-public text-subheading"
                    htmlFor="createdBy">
                    Created By
                  </label>
                  <input
                    className="w-full p-3 text-sm font-normal border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    type="text"
                    placeholder="Created By..."
                    value={data.created_by}
                    onChange={(e) =>
                      setData((prevState) => ({...prevState, created_by: e.target.value}))
                    }
                  />
                  {/* Repeat the above pattern for other fields */}
                  {/* ... */}
                  <div
                    style={{maxWidth: 500, margin: "0 auto"}}
                    className="flex flex-col max-w-full gap-4 pb-4 overflow-hidden text-secondary">
                    {JoditEditor && (
                      <JoditEditor
                        ref={editorRef}
                        value={data.blog_contents}
                        onChange={(newContent) =>
                          setData((prevState) => ({
                            ...prevState,
                            blog_contents: newContent,
                          }))
                        }
                      />
                    )}
                  </div>
                  <label
                    className="font-medium md:text-base xl:text-xl font-public text-subheading"
                    htmlFor="title">
                    Description
                  </label>
                  <input
                    className="w-full p-3 text-sm font-normal border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    type="text"
                    placeholder="Description..."
                    value={data.description}
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        description: e.target.value,
                      }))
                    }
                  />{" "}
                  <label
                    className="font-medium md:text-base xl:text-xl font-public text-subheading"
                    htmlFor="title">
                    Tags
                  </label>
                  <TagSelect
                    initialTags={["Digital Marketing"]}
                    onTagsChange={handleTagsChange}
                  />
                  <label
                    className="font-medium md:text-base xl:text-xl font-public text-subheading"
                    htmlFor="reading_time">
                    Reading Time
                  </label>
                  <input
                    className="w-full p-3 text-sm font-normal border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    type="text"
                    placeholder="Reading Time..."
                    value={data.reading_time}
                    onChange={(e) =>
                      setData((prevState) => ({
                        ...prevState,
                        reading_time: e.target.value,
                      }))
                    }
                  />
                  <UploadModal handleUploadedImage={handleThumbnailUpload} />
                  <div className="flex gap-2 pb-4">
                    <div className="checkbox-wrapper-40">
                      <div className="flex items-center gap-4">
                        <label
                          className="font-normal md:text-base xl:text-lg font-public text-subheading"
                          htmlFor="myCheckbox">
                          Blog of the day
                        </label>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          defaultValue={data?.blog_of_the_day}
                          onClick={(e) => {
                            handleCheckbox();
                          }}
                        />
                        <span className="checkbox"></span>
                      </div>
                    </div>
                  </div>
                  <Category onCategoryChange={handleCategoryChange} />
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    value="Send"
                    className="relative flex items-center justify-center py-3 overflow-hidden text-white transition-all border-none before:absolute before:h-0 before:w-0 before:rounded-full bg-primary before:bg-secondary before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10 font-public text-[16px]">
                      UPLOAD BLOG
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full p-8 mx-auto mt-5 break-normal border border-gray-200 lg:w-1/2 lg:mt-0 lg:mr-4 bg-lightwhite rounded-xl">
              <div className="w-full border-b border-bordercolor">
                <h2 className="mb-2 text-sm font-medium leading-6 text-secondary">
                  Blog View
                </h2>
              </div>
              <div>
                <div className="mt-2">
                  <p className="text-2xl font-bold text-secondary">{data.title}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base font-normal text-secondary">{data.description}</p>
              </div>
              <div className="mt-4 text-secondary">{parse(data.blog_contents)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCreate;
