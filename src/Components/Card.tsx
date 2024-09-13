import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card h-[400px] bg-base-100 border ">
      <figure>
        <Image
          src={data.url}
          alt="Shoes"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{data.title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
