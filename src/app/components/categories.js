import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  let data = [
    {
      image: "/images/property/el.jpg",
      name: "Ellington Properties",
      //   listings: "46 Listings",
    },
    {
      image: "/images/property/e.jpg",
      name: "Emaar Developers",
      link: "/emaar",
      //   listings: "124 Listings",
    },
    {
      image: "/images/property/d.jpg",
      name: "Danube",
      //   listings: "265 Listings",
    },
    {
      image: "/images/property/a.jpg",
      name: "Azizi Developments",
      //   listings: "452 Listings",
    },
    {
      //   image: "/images/property/investment.jpg",
      image: "/images/property/s.jpg",
      name: "Sobha",
      //   listings: "12 Listings",
    },
  ];

  return (
    <>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title mb-4 pb-2">
            <h4 className="title mb-3">Top Developers</h4>
            <p className="text-muted para-desc mb-0">
              Discover a New Era in Dubai Real Estate: No Agents, No
              Commissions, Just Effortless Transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mt-0 h-auto ">
        {data.map((item, index) => {
          return (
            <div className="col " key={index}>
              <div className="categories position-relative overflow-hidden rounded-3 shadow h-100 ">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "150px" }}
                  className="img-fluid"
                  alt={item.name}
                />

                <div className="p-3">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="title text-dark font-base fw-medium "
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="title text-dark font-base fw-medium ">
                      {item.name}
                    </span>
                  )}
                  {/* <p className="text-muted small mb-0">{item.listings}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
