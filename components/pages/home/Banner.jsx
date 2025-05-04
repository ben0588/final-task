"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPodcast,
  FaYoutube,
} from "react-icons/fa6";

const Banner = () => {
  const personal = {
    name: "Alyse Wang",
    job: "前端工程師 & 職涯諮詢師",
    content: [
      "嗨，我是 Alyse 一名深耕前端技術的工程師。",
      "擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！",
    ],
    leftImg:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2025-web-camp/desktop/index/Hero%20Section.png",
    rightImg:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2025-web-camp/desktop/index/Hero%20Section2.png",
  };

  const social = [
    {
      name: "youtube",
      path: "#",
      icon: <FaYoutube />,
    },
    {
      name: "apple podcasts",
      path: "#",
      icon: <FaPodcast />,
    },
    {
      name: "facebook",
      path: "#",
      icon: <FaFacebook />,
    },
    {
      name: "linkedin",
      path: "#",
      icon: <FaLinkedin />,
    },
    {
      name: "instagram",
      path: "#",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {personal && (
          <>
            <div className="relative h-[375px] w-full md:h-[834px]">
              <Image
                src={personal.leftImg}
                fill
                style={{ objectFit: "cover" }}
                alt={personal.name}
                priority
                placeholder="empty"
              />
            </div>

            <div className="relative">
              <div className="relative h-[375px] md:h-[834px]">
                <Image
                  src={personal.rightImg}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={personal.name}
                  priority
                  placeholder="empty"
                />
              </div>
              <div className="absolute left-0 top-0 translate-x-8 translate-y-14 md:translate-y-96">
                <h1 className="text-primary text-2xl font-bold sm:text-5xl md:text-8xl">
                  {personal.name}
                </h1>
                <h2 className="text-primary mt-5 text-2xl font-medium md:text-2xl">
                  {personal.job}
                </h2>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="relative h-[181px]">
        <div className="absolute right-0 top-0 w-[97%] -translate-x-1 -translate-y-48 border bg-white px-6 py-10 md:w-2/4 md:-translate-x-20 md:-translate-y-1/2 md:px-10 md:py-20">
          <div className="flex flex-col gap-4">
            {personal.content.map((item) => (
              <p key={item} className="text-lg font-medium">
                {item}
              </p>
            ))}

            <div className="flex items-center gap-5">
              {social.map((item) => (
                <Link
                  className="text-primary text-2xl hover:opacity-75 hover:duration-100"
                  key={item.name}
                  href={item.path}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
