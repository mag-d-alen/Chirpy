import Header from "@/app/components/layout/header";
import { Unauthorised } from "@/app/components/layout/unauthorised";
import React from "react";
import CategoryCard from "./[name]/categoryCard";

const Library = () => {
  return (
    <Unauthorised>
      <Header>What subject would you like to work on today?</Header>
      <section className="flex flex-wrap  justify-center gap-8 w-full h-full md:w-[75%] px-8 pb-8">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </section>
    </Unauthorised>
  );
};
export default Library;
const categories = [
  {
    name: "React",
    icon: "/react.svg",
    description:
      "One of the most popular front-end JavaScript libraries for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
  },
  {
    name: "JavaScript",
    icon: "/js.svg",
    description:
      "A programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code",
  },
  {
    name: "HTML and CSS",
    icon: "/css.svg",
    description: `HTML, or HyperText Markup Language, is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. 
       CSS, or Cascading Style Sheets, is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML`,
  },
  {
    name: "Other",
    icon: "/react.svg",
    description: "",
  },
];
