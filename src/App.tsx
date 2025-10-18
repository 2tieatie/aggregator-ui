"use client";

import { type JSX, useEffect, useState } from "react";
import {Rocket, ShoppingBag} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { motion, AnimatePresence } from "framer-motion";
import WebApp from "@twa-dev/sdk";
type Category = "casino" | "markets" | "utils";

const items: Record<
  Category,
  { img: string; name: string; users: string; link: string; icon: string }[]
> = {
  casino: [
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Portals",
      users: "1000",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/R89z5gQ/photo-2025-10-18-3-08-29-AM.jpg",
      name: "Virus",
      users: "500",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Portals",
      users: "1000",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/R89z5gQ/photo-2025-10-18-3-08-29-AM.jpg",
      name: "Virus",
      users: "500",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Portals",
      users: "1000",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/R89z5gQ/photo-2025-10-18-3-08-29-AM.jpg",
      name: "Virus",
      users: "500",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Portals",
      users: "1000",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/R89z5gQ/photo-2025-10-18-3-08-29-AM.jpg",
      name: "Virus",
      users: "500",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Portals",
      users: "1000",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/R89z5gQ/photo-2025-10-18-3-08-29-AM.jpg",
      name: "Virus",
      users: "500",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Portals",
      users: "1000",
      link: "#",
      icon: "🎰",
    },
    {
      img: "https://i.ibb.co/R89z5gQ/photo-2025-10-18-3-08-29-AM.jpg",
      name: "Virus",
      users: "500",
      link: "#",
      icon: "🎰",
    },
  ],
  markets: [
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Market 1",
      users: "1500",
      link: "#",
      icon: "🛒",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Market 2",
      users: "800",
      link: "#",
      icon: "🛒",
    },
  ],
  utils: [
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Utils 1",
      users: "300",
      link: "#",
      icon: "🛠️",
    },
    {
      img: "https://i.ibb.co/Kz841pHN/2025-10-17-7-04-36-PM.jpg",
      name: "Utils 2",
      users: "700",
      link: "#",
      icon: "🛠️",
    },
  ],
};

function App() {
  const [category, setCategory] = useState<Category>("casino");
  const [showHeader, setShowHeader] = useState(false);

  const categoryList: { key: Category; icon: JSX.Element; name: string }[] = [
    { key: "casino", icon: <Rocket />, name: "Casino" },
    { key: "markets", icon: <ShoppingBag />, name: "Markets" },
    { key: "utils", icon: <Rocket />, name: "Utils" },
  ];

  useEffect(() => {
    WebApp.disableVerticalSwipes();

    const userAgent = navigator.userAgent;
    if (/Telegram-Android/i.test(userAgent) || /iPhone|iPad/i.test(userAgent)) {
      WebApp.requestFullscreen();
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-6 flex flex-col w-screen bg-gradient-to-b">
      {/* <CHANGE> Animated header with slide down effect */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100, // упругость
              damping: 20,
              duration: 0.1,
            }}
            className="fixed top-0 left-0 w-full h-12 px-4 flex items-center justify-center
                       bg-white/75 backdrop-blur-md border-b-[1px]"
          >
            <span className="z-10 font-bold text-base">
              {categoryList.find((c) => c.key === category)?.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <CHANGE> Animated list with staggered entrance */}
      <div className="flex flex-col pb-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.1 },
              },
            }}
          >
            {items[category].map((item, index) => (
              <motion.div
                key={`${category}-${index}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                className="flex flex-col mb-2"
              >
                <div className="flex flex-row h-15">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full aspect-square object-cover rounded-xl"
                  />
                  <div className="flex-1 px-4 pt-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.users} users</p>
                  </div>
                </div>
                <Separator
                  orientation="horizontal"
                  className="ml-19 mt-2 h-[1px] bg-gray-200"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* <CHANGE> Animated footer with slide up effect */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100, // упругость
          damping: 20,
          duration: 0.01,
        }}
        className="fixed bottom-0 left-0 w-full h-20 px-4 flex justify-around items-center
                   bg-white/75 backdrop-blur-md  border-t-[1px]"
      >
        {categoryList.map((cat) => (
          <motion.button
            key={cat.key}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`z-10 flex flex-col items-center justify-center rounded-lg transition-all px-2 py-1 bg-transparent
                        ${category === cat.key ? "text-blue-500" : "text-gray-700"}`}
            onClick={() => setCategory(cat.key)}
          >
            <span className="text-lg">{cat.icon}</span>
            <span className="mt-1 font-semibold text-xs">{cat.name}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
