"use client";
import { getImagesByUser } from "@/db_mongo/actions";
import { PostsType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { childrenVariants, parentVariants } from "./motion_variants";

export default function Gallery() {
  const [gallery, setGallery] = useState<PostsType[] | null>(null);
  const [photoImageUrl, setPhotoImageUrl] = useState<string>("");
  const { data, status } = useSession();

  useEffect(() => {
    data && data.user && setPhotoImageUrl(data.user.image!);
    (async () => {
      try {
        const res = await getImagesByUser(data?.user?.name);
        console.log(res);
        setGallery(res);
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    })();
  }, [data?.user]);

  return (
    <div className="mt-6 flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-8">
        {data?.user?.name}
        {photoImageUrl && (
          <img
            className="rounded-full object-cover"
            width={"30px"}
            src={photoImageUrl}
            alt="userprofilephoto"
          />
        )}
      </div>
      {status == "unauthenticated" && (
        <AnimatePresence>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
          >
            Couldn't show your images please login{" "}
          </motion.div>
        </AnimatePresence>
      )}
      {gallery && (
        <motion.div
          className="flex flex-wrap justify-center gap-8 px-4"
          variants={parentVariants}
          initial="hidde"
          animate="show"
        >
          {gallery.map((post) => (
            <motion.div
              variants={childrenVariants}
              key={Math.random().toString()}
            >
              <img src={post.photo_url} className="w-32 rounded-md sm:w-52" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
