import React, { useEffect, useState } from "react";
import { api } from "../Data/Api";

export default function ALjazeeraNews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(
        `everything?domains=aljazeera.com&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then(res => {
        setData(res.data.articles);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  const limitData = data.slice(1, 5);

  return (
    <div className="font-zila py-10 xl:m-auto bg-[#0E1520] text-[#EBEBEB] md:px-16 lg:py-14">
      <div className="lg:w-3/4 m-auto">
        <h1 className="text-center text-[20px] md:mb-10 md:text-[24px] lg:text-[32px]">
          by <span className="font-bold">Al Jazeera</span>
        </h1>
        <div className="flex md:flex-col md:w-full md:gap-3 ">
          {data[0] && (
            <article className="relative aspect-video w-full hidden md:inline-block lg:w-[90%] m-auto">
              <img
                src={data[0].urlToImage}
                alt=""
                className="object-cover aspect-video w-full"
              />
              <div className="mt-3">
                <a href={data[0].url} target="blank" className="">
                  <h1 className="text-[28px] line-clamp-2 pr-5 font-bold underline">
                    {data[0].title}
                  </h1>
                </a>
                <p className="text-[16px] text-[#EBEBEB]">
                  {data[0].publishedAt.substring(0, 10)}
                </p>
              </div>
            </article>
          )}

          <div className="mt-5">
            <h1 className="hidden md:inline-block text-[24px]">Few News</h1>
            <div className="flex flex-col justify-center items-center gap-5 py-4 px-10 w-full md:grid md:grid-cols-4 md:px-0 md:items-start md:justify-normal md:h-60 md:gap-3">
              {limitData.map((item, index) => {
                return (
                  <article
                    key={index}
                    className="relative aspect-square h-full md:h-auto w-full md:aspect-auto">
                    <img
                      src={item.urlToImage}
                      alt=""
                      className="-z-10 w-full h-full object-cover object-top md:relative md:z-0 md:aspect-video md:h-auto md:w-full"
                    />
                    <a
                      href={item.url}
                      target="blank"
                      className="absolute top-0 inline-block w-full h-full z-10 bg-[#0000005a] hover:bg-transparent md:relative md:z-0 md:bg-transparent ">
                      <h1 className="text-[#EBEBEB] absolute bottom-4 text-center text-[18px] line-clamp-2 px-2 md:relative  md:bottom-0 md:text-start md:pr-4 md:px-0 md:text-[16px] underline underline-offset-2">
                        {item.title}
                      </h1>
                      <p className="hidden md:inline-block text-[12px]">
                        {item.publishedAt.substring(0, 10)}
                      </p>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
