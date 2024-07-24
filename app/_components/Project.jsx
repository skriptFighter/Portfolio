"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Project({ title, description, imgList = [], href }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isHover) {
      const id = setInterval(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgList.length);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHover, imgList.length, intervalId]);

  return (
    <Link href={href} target="_blank">
      <div
        className="bg-gradient-to-b from-black/50 to-black/50 hover:bg-gradient-to-b hover:from-black/50 hover:to-indigo-950/95 rounded-2xl p-3 pb-4 flex flex-col gap-4 shadow shadow-slate-300/15"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          setCurrentImgIndex(0);
        }}
      >
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={imgList[currentImgIndex]}
            alt="test"
            fill
            className="rounded-2xl bg-gradient-to-b from-zinc-200 to-zinc-400 object-cover"
          />
        </div>

        <div className="pl-2 h-24">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Project;
