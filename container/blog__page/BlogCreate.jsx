"use client";
import React, {useState, useRef, useEffect} from "react";
import {Button} from "@/components/ui/moving-border";
import parse from "html-react-parser";
import {styles} from "@/app/styles";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [JoditEditor, setJoditEditor] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    // Dynamically import JoditEditor only on the client side
    import("jodit-react").then((Jodit) => {
      setJoditEditor(Jodit.default);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const newBlog = {
      title,
      description,
      value,
    };
    console.log(newBlog);
  }
  const editorConfig = {
    width: 500,
    height: 842,
  };
  return (
    <>
      <section className="flex justify-center w-full relative border-y-2 2xl:border-y-0 bg-background border-watermark">
        <div className="w-full max-w-screen-2xl">
          <div
            className={` ${styles.yPadding}   ${styles.xMargin}
                  2xl:border-y-4  md:border-x-2 border-watermark  mt-20 flex  flex-col lg:flex-row relative  bg-backgroundGray `}>
            <div className="flex justify-center px-4 items-center flex-col lg:w-1/2">
              <div className="bg-primary px-3 py-3 rounded-lg">
                <h2 className="font-federo font-medium">Create Your Blog with Ease</h2>
                <p className="font-public font-normal">
                  Unleash Your Creativity and Voice Through Personalized Blogging
                  Platforms
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col bg-lightwhite px-4 lg:px-16 py-4 rounded-lg gap-3 mt-10 md:gap-5">
                  <label
                    className="font-medium md:text-base xl:text-xl font-public text-subheading"
                    htmlFor="blog">
                    Title
                  </label>
                  <input
                    className="w-full p-3 text-sm font-normal border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    type="text"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label
                    className="font-medium md:text-sm xl:text-base font-public text-subheading"
                    htmlFor="description">
                    Tell your description
                  </label>
                  <textarea
                    className="w-full p-3 mt-2 text-sm font-normal overflow-y-hidden border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    type="text"
                    rows="4"
                    placeholder="Descriptione..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div
                    style={{maxWidth: 500, margin: "0 auto"}}
                    className="pb-4 flex flex-col max-w-full overflow-hidden text-secondary gap-4">
                    {JoditEditor && (
                      <JoditEditor
                        ref={editorRef}
                        value={value}
                        onChange={(newContent) => setValue(newContent)}
                      />
                    )}
                  </div>
                  <Button
                    type="submit"
                    value="Send"
                    className="relative flex py-3 border-none items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary before:bg-secondary before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10 font-public text-[16px]">
                      UPLOAD BLOG
                    </span>
                  </Button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2 p-8 mt-5 lg:mt-0 lg:mr-4 break-normal bg-lightwhite rounded-xl border border-gray-200 mx-auto">
              <div className="w-full border-b border-bordercolor">
                <h2 className="text-sm font-medium leading-6 text-secondary mb-2">
                  Blog View
                </h2>
              </div>
              <div>
                <div className="mt-2">
                  <p className="text-2xl text-secondary font-bold">{title}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-secondary font-normal">{description}</p>
              </div>
              <div className="mt-4 text-secondary">{parse(value)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCreate;
