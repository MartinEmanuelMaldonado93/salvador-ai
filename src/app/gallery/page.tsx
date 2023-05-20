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

export default function Gallery() {
  const [gallery, setGallery] = useState<PostsType[] | null>(null);
  const { data, status } = useSession();

  useEffect(() => {
    if (!data || !data.user) return;
    (async () => {
      try {
        const res = await getImagesByUser(data.user?.name);
        setGallery(res);
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    })();
  }, [!!data?.user]);

  return (
    <div className="mt-6 flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, translateY: "10%" }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { ease: "easeOut" },
          }}
        >
          {data?.user?.name}
        </motion.div>
        {data?.user?.image && (
          <img
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
            Couldn't show your images please login{" "}
          </motion.div>
        </AnimatePresence>
      )}
      {gallery ? (
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
              <img
                src={post.photo_url}
                className={`photoUrl w-32 rounded-md sm:w-52 ${css.photoUrl}`}
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
      ) : (
        <Loading />
      )}
    </div>
  );
}
