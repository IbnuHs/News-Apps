import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import icon from "../assets/camera-icon.jpg";
import { Pagination } from "flowbite-react";
import { api } from "../Data/Api";
import { Dropdown } from "flowbite-react";

export default function ByCategoryPages() {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(
        `top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then(res => {
        setData(res.data.articles);
        setTotalPages(res.data.articles.length / 5);
      })
      .catch(e => {
        console.log(e);
      });
  }, [category]);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = currentPage * 5;
  const limitData = data.slice(startIndex, endIndex);
  const onPageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-[80vh] px-4 py-7 m-auto md:w-[80%] xl:w-[70%] font-zila ">
      {/* <div className="absolute right-0 mt-[-20px]">
        <Dropdown label="" dismissOnClick={false} size="sm">
          <Dropdown.Item>US</Dropdown.Item>
          <Dropdown.Item>ID</Dropdown.Item>
          <Dropdown.Item>AE</Dropdown.Item>
          <Dropdown.Item>IN</Dropdown.Item>
        </Dropdown>
      </div> */}
      <div className="">
        <h1 className="text-[24px] font-semibold pb-1 underline text-red-500 md:text-[28px] md:pb-3 lg:text-[32px]">
          Top News <span className="text-black capitalize">{category}</span>
        </h1>
        {data[0] && (
          <div className="relative">
            <img
              src={data[0].urlToImage || icon}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0e152083] hover:bg-[#0e15203e] transition-all">
              <a
                href={data[0].url}
                target="_blank"
                className="text-white line-clamp-2 text-center absolute bottom-5 left-0 right-0 px-5 underline underline-offset-2 md:bottom-11 md:text-[26px] xl:text-[38px] xl:bottom-20 ">
                {data[0].title}
              </a>
            </div>
          </div>
        )}
        <div className="mt-4 border-t-2 border-black pt-5 leading-5">
          <h1 className="text-[18px] text-center font-semibold pb-1 underline md:text-[22px] mt-5 mb-3 lg:text-[24px]">
            More News
          </h1>
          {limitData.map((item, index) => {
            return (
              <article
                key={index}
                className="flex gap-5 py-3 border-b-2 lg:py-7">
                <img
                  src={item.urlToImage || icon}
                  alt=""
                  className="max-w-28 h-full object-cover object-center aspect-square md:max-w-72 md:aspect-4/3"
                />
                <div className="flex flex-col gap-2 justify-evenly py-2 md:py-5 lg:gap-5">
                  <a href={item.url} target="_blank" className="underline">
                    <h1 className="font-semibold text-[16px] md:text-[20px] line-clamp-2 lg:text-[24px] md:line-clamp-3">
                      {item.title}
                    </h1>
                  </a>
                  <p className="md:line-clamp-3 lg:line-clamp-4 hidden">
                    {item.description}
                  </p>

                  <div className="font-semibold text-[12px] md:text-[16px] ">
                    <p>
                      {item.author}{" "}
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
      <div className="flex overflow-x-auto sm:justify-center mt-5 lg:mt-10 lg:mb-5">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
