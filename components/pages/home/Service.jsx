"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  const service = [
    {
      title: "履歷健檢",
      content:
        "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
      img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2025-web-camp/desktop/index/photo.png",
    },
    {
      title: "線上諮詢",
      content:
        "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
      img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2025-web-camp/desktop/index/photo2.png",
    },
    {
      title: "網頁開發",
      content:
        "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
      img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2025-web-camp/desktop/index/photo3.png",
    },
    {
      title: "企業內訓",
      content:
        "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
      img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2025-web-camp/desktop/index/photo4.png",
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-16">
      <h3 className="text-center text-5xl font-bold lg:text-left lg:text-4xl">
        專業服務與方案
      </h3>

      <div className="flex flex-col gap-8 px-3 lg:gap-16 lg:px-28">
        {service.map((item, index) => (
          <article
            key={item.title}
            className={`relative lg:flex ${index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
          >
            <div className="relative h-[176px] w-full lg:h-[320px] lg:w-1/2">
              <Image src={item.img} fill style={{ objectFit: "cover" }} />
            </div>
            <div
              className={`space-y-3 p-6 lg:absolute lg:top-0 lg:w-1/2 lg:translate-y-1/4 lg:bg-white ${index % 2 == 0 ? "lg:right-0 lg:-translate-x-8" : "lg:left-0 lg:translate-x-8"}`}
            >
              <span className="text-primary text-4xl">一</span>
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/"
        className="flex flex-col items-end justify-end gap-2 px-3 text-3xl font-bold hover:opacity-75 lg:flex-row lg:items-center"
      >
        聯繫我，取得更多資訊！{" "}
        <span className="inline-block rounded-full border-2 border-black p-2">
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
};
export default Service;
