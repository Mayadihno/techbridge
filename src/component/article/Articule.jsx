import React from "react";
import { article } from "../../static/bannerData";
import { Link } from "react-router-dom";

const Articule = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#1C1E24] w-full py-6 text-center text-white">
        <h3 className="md:text-5xl text-2xl text-[#FF6300] font-bold md:w-[25%] w-full mx-auto pt-3">
          Techbridge Insights
        </h3>
        <p className="text-base font-medium md:w-[55%] w-[95%] mx-auto newsreader pt-4">
          Techbridge Insights bring you the latest in digital product
          development for the BFSI industry and beyond, featuring expert
          opinions from our team of experts as well as thought leaders in the
          field.
        </p>
      </div>
      <div className="md:w-[85%] w-[95%] mx-auto my-6 md:my-12">
        <div className="grid md:grid-cols-3 gap-8">
          {article.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-[#FF6300] text-white px-3 py-1 text-sm rounded">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-700 mt-3">{article.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-500">By {article.author}</p>
                  <Link
                    to={article.link}
                    className="text-[#FF6300] font-bold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Articule;
