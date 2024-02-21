import React, { useState, useEffect } from "react";
import { api } from "../Data/Api";
import icon from "../assets/camera-icon.jpg";

export default function TechnologyNews() {
  const urlImage =
    "https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const text =
    "Check out the following example to learn how to programmatically create a new Carousel object by passing the parameters, using the methods, and the callback functions. Check out the following example to learn how to programmatically create a new Carousel object by passing the parameters, using the methods, and the callback functions.Check out the following example to learn how to programmatically create a new Carousel object by passing the parameters, using the methods, and the callback functions. Check out the following example to learn how to programmatically create a new Carousel object by passing the parameters, using the methods, and the callback functions. ";
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(
        `everything?domains=techcrunch.com,thenextweb.com&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setData(res.data.articles);
        // console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const limitData = data.slice(0, 10);

  return (
    <div className="px-5 py-8 font-zila lg:w-3/4 lg:m-auto">
      <h1 className="text-center text-[24px] font-bold lg:text-[36px]">
        by TechCrunch
      </h1>
      <div className="mt-4 border-t-2 border-black pt-5 leading-5">
        {limitData.map((item, index) => {
          return (
            <article key={index} className="flex gap-5 py-3 border-b-2 lg:py-7">
              <img
                src={item.urlToImage || icon}
                alt=""
                className="max-w-28 h-full object-cover object-center aspect-square md:max-w-72 md:aspect-4/3"
              />
              <div className="flex flex-col gap-2 justify-evenly py-2 md:py-5 lg:gap-5">
                <a href={item.url} target="_blank" className="underline">
                  <h1 className="font-semibold text-[16px] md:text-[20px] lg:text-[24px]">
                    {item.title}
                  </h1>
                </a>
                <p className="md:line-clamp-3 lg:line-clamp-4 hidden">
                  {item.description}
                </p>

                <div className="font-semibold text-[12px] md:text-[16px] ">
                  <p>
                    by {item.author}{" "}
                    <span className="text-red-500">
                      {item.publishedAt.substring(0, 10)}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
