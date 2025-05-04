"use client";

import Image from "next/image";

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
    <div className="flex flex-col gap-8 px-3 py-16">
      <h3 className="text-center text-4xl font-bold md:text-left md:text-5xl">
        專業服務與方案
      </h3>

      {service.map((item) => (
        <article key={item.title} className="relative">
          <div className="relative h-[176px] md:h-[320px] md:w-1/2">
            <Image src={item.img} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="-translate-x-1/4 -translate-y-1/4 space-y-3 p-6 md:absolute md:right-0 md:top-0 md:w-1/2 md:translate-y-1/2 md:border md:bg-white">
            <span className="text-primary text-4xl">一</span>
            <h3 className="text-3xl font-bold">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
export default Service;
