import { list } from "@vercel/blob";

export default async function Page() {
  const response = await list();

  return (
    <>
      {response.blobs.map((blob) => (
        <div key={blob.pathname}>
          <img src={blob.pathname}></img>
          <a  href={blob.downloadUrl}>
            {blob.pathname} try
          </a>
        </div>
      ))}
    </>
  );
}
