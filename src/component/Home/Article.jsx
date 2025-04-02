import React from "react";
import { article } from "../../static/bannerData";
import { Link } from "react-router-dom";

function Article() {
  const data = article.slice(0, 6);
  return (
    <div className="py-12 bg-gray-100">
      <section className=" w-[88%] mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Latest Insights from TechBridge
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((article) => (
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
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-[#FF6300] cursor-pointer text-white font-semibold rounded-md hover:bg-[#dc143cb7] transition duration-300">
            View More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Article;
