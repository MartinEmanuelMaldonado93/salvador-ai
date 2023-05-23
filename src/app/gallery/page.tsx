"use client";
import { PostsType } from "@/types";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { childrenGallery, parentGallery } from "./page.motion";
import Loading from "./loading";
import { downloadImage } from "@/helpers";
import css from "./page.module.css";
import useSWR from "swr";
import { baseUrl } from "@/swr";
import ErrorSession from "./error";

export default function Gallery() {
  const [gallery, setGallery] = useState<PostsType[] | null>(null);
  const { data: dataSession, status } = useSession();

  const { data, error, isLoading } = useSWR(
    dataSession?.user?.name ? "gallery" : null,
    (key) =>
      fetch(`${baseUrl}/${key}/api?user=${dataSession?.user?.name}`, {
        method: "GET",
      })
  );

  useEffect(() => {
    (async () => {
      const responseData = await data?.json();
      responseData && setGallery(responseData);
    })();
  }, [data]);

  return (
    <div className="mt-6 flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, translateY: "10%", height: "0%" }}
          animate={{
            opacity: 1,
            translateY: 0,
            height: "100%",
            transition: { ease: "easeOut", delay: 0.5 },
          }}
        >
          {dataSession?.user?.name}
        </motion.div>
        {dataSession?.user?.image && (
          <motion.img
            initial={{ opacity: 0, translateX: "10%", height: "0%" }}
            animate={{
              opacity: 1,
              translateX: 0,
              height: "100%",
              transition: { ease: "easeOut", delay: 0.5 },
            }}
            className="rounded-full object-cover"
            width={"30px"}
            src={dataSession?.user?.image}
            alt="user_profile_photo"
          />
        )}
      </div>
      {isLoading && <Loading />}
      {error && <ErrorSession />}
      {gallery && (
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-8 px-4"
          variants={parentGallery}
          initial="hidde"
          animate="show"
        >
          {gallery.map((post) => (
            <motion.div
              variants={childrenGallery}
              key={Math.random().toString()}
              className={css.imageContainer}
            >
              <motion.img
                layout
                src={post.photo_url}
                className={`photoUrl w-32 rounded-md sm:w-40 ${css.photoUrl}`}
              />
              <button
                className={`downloadBtn w-full rounded-md border px-2 py-1 shadow-md active:translate-y-[1px] ${css.downloadBtn}`}
                onClick={() => downloadImage({ photo_url: post?.photo_url })}
              >
                Download
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
      {status == "unauthenticated" && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, translateY: "20%" }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          Couldn&apos;t show your images please login{" "}
        </motion.div>
      )}
    </div>
  );
}
