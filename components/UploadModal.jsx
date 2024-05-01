"use client";
import Image from "next/image";
import React, {useState} from "react";

export default function UploadModal({handleUploadedImage}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
    handleUploadedImage(file);
  };

  return (
    <div>
      <div className="relative inset-0 z-10 flex items-center justify-center overflow-hidden ">
        <div className="flex flex-col h-full overflow-hidden text-center ">
          <div className="inline-block align-bottom transition-all transform  rounded-[15px]  bg-white sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="w-full md:w-[400px] lg:w-[460px] h-auto ">
              <div className="relative flex w-full px-4 pt-5">
                <div className="flex items-center justify-center w-full ">
                  <p className="font-sans text-[18px] font-semibold text-black ">
                    Upload Image
                  </p>
                </div>
              </div>
              <div className={`flex flex-col items-center justify-center px-8 py-5 `}>
                <label
                  htmlFor="fileUpload"
                  className="flex flex-col items-center cursor-pointer text-secondary justify-center px-2 py-5 bg-white hover:bg-slate-100 w-full border-2 border-lightGray border-dotted rounded-[10px]">
                  {previewURL ? (
                    <Image
                      src={previewURL}
                      alt="Preview"
                      className="w-full h-auto rounded-md"
                    />
                  ) : (
                    <span>Select file to upload</span>
                  )}
                  <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept=".jpg, .jpeg, .png, .svg"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
