import { list } from "@vercel/blob";
import Image from "next/image";

export default async function Page() {
  const response = await list();
  return (
    <>
      {response.blobs.map((blob) => (
        <div key={blob.pathname}>
           try <Image src={blob.url} width={50} height={50}></Image>
          <img src={blob.url}></img>
          <a href={blob.downloadUrl}>{blob.pathname} try lang </a>
        </div>
      ))}
    </>
  );
}
