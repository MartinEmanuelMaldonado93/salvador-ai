"use client";
import { getImagesByUser } from "@/db_mongo/actions";
import { PostsType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { childrenVariants, parentVariants } from "./motion_variants";
import Loading from "./loading";
import { downloadImage } from "@/helpers";
import css from "./page.module.css";
import useSWR from "swr";
import { baseUrl } from "@/swr";

export default function Gallery() {
  const [gallery, setGallery] = useState<PostsType[] | null>(null);
  const { data, status } = useSession();
  const {
    data: dataGallery,
    error,
    isLoading,
    isValidating,
  } = useSWR("gallery", (key) =>
    fetch(`${baseUrl}/gallery/api`, {
      method: "POST",
      body: JSON.stringify("martin maldonado"),
    })
  );

  useEffect(() => {
    (async function () {
      const data = await dataGallery?.json();
      data && setGallery(data);
    })();
  }, [dataGallery]);

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
          {data?.user?.name}
        </motion.div>
        {data?.user?.image && (
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
            src={data?.user?.image}
            alt="user_profile_photo"
          />
        )}
      </div>
      {status == "unauthenticated" && (
        <AnimatePresence>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, translateY: "20%" }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            Couldn&apos;t show your images please login{" "}
          </motion.div>
        </AnimatePresence>
      )}
      {isLoading && <Loading />}
      {gallery && (
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-8 px-4"
          variants={parentVariants}
          initial="hidde"
          animate="show"
        >
          {gallery.map((post) => (
            <motion.div
              variants={childrenVariants}
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
    </div>
  );
}
