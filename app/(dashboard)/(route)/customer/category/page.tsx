"use client";
import React from "react";
import Brands from "../_components/Brands";

import { category_brands, colors } from "../_constants/customerData";
import { offerCard } from "../_constants/customerData";
import OfferCard from "../_components/Offers";
import Link from "next/link";
import Searchbar from "../_components/Searchbar";

const page = () => {
  return (
    <div className="p-6">
      <h2 className="py-[1rem] text-2xl text-[#424040] capitalize font-bold">
        category
      </h2>
      <Searchbar />
      <p className="text-[#818080] text-[18px] capitalize">
        find and explore categories that suits your needs{" "}
      </p>

      <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-[1rem]">
        {category_brands.map((category, index) => {
          return (
            <Link href={`/customer/category/${category.text}`} key={category.id}>
              <aside
                className="rounded-lg p-[1rem] h-[150px] flex items-center justify-center flex-col"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <img src={category.img.src} alt="" />
                <p className="text-center p-[0.5rem]">{category.text}</p>
              </aside>
            </Link>
          );
        })}
      </section>
      <Brands />
      <div className="flex justify-between my-[1rem] px-[2rem]">
        <span className="text-[#A09F9F]">Explore top offers and discounts</span>
        <span className=" font-bold">See all</span>
      </div>
      <div className="flex overflow-x-auto gap-4">
        {offerCard.slice(0, 4).map((offer) => (
          <div className="md:w-1/3 ">
            <OfferCard offer={offer} detailsLink={`/customer/category/offers`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
