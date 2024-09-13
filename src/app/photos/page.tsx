import Card from "@/Components/Card";
import { getPhotos } from "@/lib/getRequest";
import React from "react";

const Photos = async () => {
  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
  const photos = await getPhotos();
  console.log(photos);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
      {photos.map((photo: Photo) => (
        <Card key={photos.id} data={photo} />
      ))}
    </div>
  );
};

export default Photos;
