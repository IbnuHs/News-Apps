import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { api } from "../Data/Api";
import icon from "../assets/camera-icon.jpg";

export default function Jumbotron() {
  const urlImage =
    "https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(`top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((e) => {
        console.log(e);
      });
    // .finally(() => {
    //   console.log(data);
    // });
  }, []);

  const jumbotronData = data.slice(0, 4);

  return (
    <div className="h-[425px] lg:h-[90vh]  m-auto bg-[rgba(0,30,90,0.8800770308123249)]">
      <Carousel className="rounded-none overflow-hidden " slideInterval={3000}>
        {jumbotronData.map((item, index) => {
          return (
            <article
              key={index}
              className="h-full w-full relative flex justify-end items-end border border-black"
            >
              <img
                src={item.urlToImage || icon}
                alt=""
                className="absolute -z-10 w-full h-full object-center object-cover"
              />
              <a
                href={item.url}
                className="w-full h-full block text-white  transition-all  bg-blueTransparent lg:bg-blueTransparentHover"
                target="_blank"
              >
                <h1 className="  absolute bottom-14 left-0 right-0 text-center text-[24px] lg:text-[48px]">
                  {item.title}
                </h1>
              </a>
            </article>
          );
        })}

        {/* <article className="h-full w-full relative flex justify-end items-end border border-black ">
          <img
            src={urlImage}
            alt=""
            className="absolute -z-10 w-full h-full object-center object-cover"
          />
          <a
            href={urlImage}
            className="w-full h-full block text-[#ffffff89] hover:text-white transition-all  bg-blueTransparent lg:bg-blueTransparentHover"
            target="_blank"
          >
            <h1 className="  absolute bottom-20 left-0 right-0 text-center text-[24px] lg:text-[48px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </a>
        </article> */}
      </Carousel>
    </div>
  );
}
