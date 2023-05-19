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
        const res = await getImagesByUser("martincito");
        console.log(res);
        setGallery(res);
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    })();
  }, [data?.user]);

  return (
    <div className="flex h-full flex-col gap-4 mt-6">
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
      {status=="unauthenticated" && <div>please login </div>}
      <motion.div className="flex flex-wrap px-4" variants={parentVariants}>
        <AnimatePresence>
          {gallery &&
            gallery.map((post) => (
              <motion.div
                variants={childrenVariants}
                initial="hidde"
                animate="show"
                key={Math.random().toString()}
                className="transition-all"
              >
                <div>{post.title}</div>
                <img src={post.photo_url} className="w-32 rounded-md sm:w-52" />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
