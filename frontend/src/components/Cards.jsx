import React from "react";

function Cards({item}) {
    console.log(item);
  return (
    <>
    <div className="mt-4 mb-4">
      <div className="card max-h-[550px] w-92 py-4 px-1 shadow-md hover:scale-105 duration-200 ease-in-out">
        <figure>
          <img
            src={item.image}
            alt="Books"
          />
        </figure>
        <div className="card-body max-h-[215px]">
          <h2 className="card-title">
            {item.name}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="">${item.price}</div>
            <div className="cursor-pointer rounded-lg border border-[2px] hover:bg-pink-500 hover:text-white duration-200 px-2 py-1">Buy Now</div>
          </div>
          <div className="badge badge-secondary">{item.category}</div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cards;
