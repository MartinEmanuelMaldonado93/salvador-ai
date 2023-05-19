"use client";
import { getImagesByUser } from "@/db_mongo/actions";
import { useSession } from "next-auth/react";
import { useState } from "react";

type posts = {
  photo_url: string;
  title: string;
  user_name: string;
  _id: string;
};
export default function Collections() {
  const [gallery, setGallery] = useState<posts[] | null>(null);
  const { data } = useSession();

  return (
    <div>
      <button
        className="w-min border"
        onClick={async () => {
          const res = (await getImagesByUser("martincito")) as posts[];
          console.log(res);
          setGallery(res);
        }}
      >
        see gallery
      </button>
      {gallery &&
        gallery.map((post) => (
          <div key={Math.random().toString()} className="transition-all">
            <div>{post.title}</div>
            <img src={post.photo_url} />
          </div>
        ))}
    </div>
  );
}
