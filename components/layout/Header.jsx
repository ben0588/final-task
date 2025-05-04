"use client";

import Link from "next/link";

const Header = () => {
  const navbar = [
    {
      title: "首頁",
      path: "/",
    },
    {
      title: "部落格",
      path: "/blog",
    },
  ];

  return (
    <header>
      <nav className="flex items-center justify-center gap-2.5 py-6">
        {navbar.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className="text-2xl font-bold hover:opacity-75 hover:duration-100"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;
