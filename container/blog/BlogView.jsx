"use client";
// import React, {useState, useEffect} from "react";

// const ScrollSpy = ({sections, activeSection, setActiveSection}) => {
//   return (
//     <div className="h-full w-1/4 bg-blue-600 py-2 overflow-y-hidden sticky top-24">
//       <ul className="flex flex-col space-y-2">
//         {sections.map((section) => (
//           <li key={section.id}>
//             <a
//               href={`#${section.id}`}
//               className={`text-black top-0 font-semibold hover:text-green-500 ${
//                 activeSection === section.id ? "text-green-500" : ""
//               }`}>
//               {section.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const BlogView = () => {
//   const [activeSection, setActiveSection] = useState("");

//   const sections = [
//     {id: "section1", title: "Section 1"},
//     {id: "section2", title: "Section 2"},
//     {id: "section3", title: "Section 3"},
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       for (const section of sections) {
//         const element = document.getElementById(section.id);
//         if (
//           element &&
//           scrollPosition >= element.offsetTop &&
//           scrollPosition < element.offsetTop + element.offsetHeight
//         ) {
//           setActiveSection(section.id);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [sections]);

//   return (
//     <div className="flex bg-green-200 relative">
//       <ScrollSpy
//         sections={sections}
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//       />
//       <div className="w-3/4 overflow-y-scroll ">
//         <div id="section1" className="h-screen bg-red-200">
//           Section 1
//         </div>
//         <div id="section2" className="h-screen bg-green-200">
//           Section 2
//         </div>
//         <div id="section3" className="h-screen bg-yellow-200">
//           Section 3
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogView;
import React, {useState, useEffect} from "react";

const ScrollSpy = ({sections}) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section.id);
          console.log("section", section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="h-full w-1/4 px-10 py-2  sticky top-24">
      <ul className="flex flex-col space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`text-black font-semibold hover:text-green-500 ${
                activeSection === section.id ? "text-red-500" : ""
              }`}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogView = () => {
  const sections = [
    {id: "section1", title: "Section 1"},
    {id: "section2", title: "Section 2"},
    {id: "section3", title: "Section 3"},
  ];

  return (
    <>
      <div className="w-full flex ">
        <ScrollSpy sections={sections} />
        <div className="w-3/4 h-full flex flex-col gap-10 overflow-y-hidden">
          <div
            id="section1"
            className="h-[50vh] flex justify-center items-center bg-red-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam
            iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam! Eveniet
            culpa beatae ullam repudiandae error blanditiis officia hic. Illo, debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam
            iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam! Eveniet
            culpa beatae ullam repudiandae error blanditiis officia hic. Illo, debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam
            iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam! Eveniet
            culpa beatae ullam repudiandae error blanditiis officia hic. Illo, debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam
            iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam! Eveniet
            culpa beatae ullam repudiandae error blanditiis officia hic. Illo, debitis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam
            iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam! Eveniet
            culpa beatae ullam repudiandae error blanditiis officia hic. Illo, debitis.
          </div>
          <div
            id="section2"
            className="h-[50vh]  flex justify-center items-center bg-green-400">
            Section 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis.
          </div>
          <div
            id="section3"
            className="h-[50vh]  flex justify-center items-center bg-yellow-200">
            Section 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            ipsam iusto cum deserunt! Vero accusantium eligendi totam sequi aliquam!
            Eveniet culpa beatae ullam repudiandae error blanditiis officia hic. Illo,
            debitis.
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
