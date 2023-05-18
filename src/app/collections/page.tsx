import { getImagesByUser } from "@/db_mongo/actions";

export default async function Collections() {
  const res = await getImagesByUser();
  console.log(res);
  return <div>collections</div>;
}
