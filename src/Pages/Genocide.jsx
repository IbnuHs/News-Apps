import React, { useEffect, useState } from "react";
import { api } from "../Data/Api";
import icon from "../assets/camera-icon.jpg";

export default function Genocide() {
  const img =
    "https://images.unsplash.com/photo-1683009427666-340595e57e43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(`everything?q=genocide&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const limitData = data.slice(2, 8);

  return (
    <div className="px-4 py-12 font-zila lg:py-12">
      <h1 className="font-semibold mb-7 text-[20px] md:text-center  text-red-800 underline lg:mb-8 lg:text-[24px] xl:text-[30px]">
        About Genocide
      </h1>
      <div className="flex flex-col gap-3 md:w-[80%] m-auto md:grid md:grid-cols-2 md:gap-2 lg:gap-10 ">
        {data[0] && (
          <article className="relative ">
            <img
              src={data[0].urlToImage || icon}
              alt=""
              className="object-cover object-center h-full w-full"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 text-white px-5 flex bg-[#0e152072] hover:bg-transparent">
              <div className="absolute left-0 right-0 bottom-0 px-4 py-3 lg:px-8 lg:py-7">
                <a
                  href={data[0].url}
                  target="_blank"
                  className="text-[16px] line-clamp-1 font-semibold underline underline-offset-2 md:text-[18px] m-auto md:line-clamp-3 lg:text-[22px]"
                >
                  {data[0].title}
                </a>
                <p className="text-[12px] md:text-[12px] lg:text-[18px] lg:mt-2">
                  {data[0].publishedAt.substring(0, 10)}
                </p>
              </div>
            </div>
          </article>
        )}
        {data[1] && (
          <article className="relative ">
            <img
              src={data[1].urlToImage}
              alt=""
              className="object-cover object-center h-full w-full"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 text-white px-5 flex bg-[#0e152072] hover:bg-transparent">
              <div className="absolute left-0 right-0 bottom-0 px-4 py-3 lg:px-8 lg:py-7">
                <a
                  href={data[1].url}
                  target="_blank"
                  className="text-[16px] line-clamp-1 font-semibold underline underline-offset-2 md:text-[18px] m-auto md:line-clamp-2 lg:text-[22px]"
                >
                  {data[1].title}
                </a>
                <p className="text-[12px] md:text-[12px] lg:text-[18px] lg:mt-2">
                  {data[1].publishedAt.substring(0, 10)}
                </p>
              </div>
            </div>
          </article>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2 md:grid md:grid-cols-2 md:w-[80%] m-auto md:gap-2 lg:mt-8 xl:gap-5">
        {limitData.map((item, index) => {
          return (
            <article
              key={index}
              className="flex flex-row gap-2 px-2 border-b-2 pb-4 lg:border-b-4 lg:gap-5"
            >
              <img
                src={item.urlToImage || icon}
                alt=""
                className="aspect-4/3 max-w-28 object-cover object-center h-full m-auto lg:max-w-32 xl:max-w-44"
              />
              <div className="flex-col flex gap-2 xl:gap-4">
                <a
                  href={item.url}
                  target="_blank"
                  className="text-[16px] line-clamp-2 font-semibold underline underline-offset-2 lg:text-[18px] xl:text-[26px]"
                >
                  {item.title}
                </a>
                <p className="text-[12px] lg:text-[14px] xl:text-[18px] text-red-700">
                  {item.publishedAt.substring(0, 10)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
