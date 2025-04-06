import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { ICONS } from "../../static/icons";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "customerFeedback"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  const toggleCard = (id) => {
    setActiveCard((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="w-[85%] mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Admin Dashboard
        </h2>

        <div className="bg-white w-[30%] mx-auto text-center newsreader shadow-md rounded-md p-4 mb-6">
          <p className="text-lg">
            Total Customer Feedback:{" "}
            <span className="font-bold text-blue-600">{feedbacks.length}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-md p-4 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <button
                  onClick={() => toggleCard(item.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {activeCard === item.id ? (
                    <ICONS.eyelock size={20} />
                  ) : (
                    <ICONS.eye size={20} />
                  )}
                </button>
              </div>

              <p className="text-sm text-gray-500 ">
                <span className="font-semibold pr-1 text-black">
                  Company Name:
                </span>
                {item.companyName}
              </p>
              <p className="text-sm text-gray-500 py-1">
                <span className="font-semibold pr-1 text-black">
                  Job title:
                </span>
                {item.jobTitle}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold pr-1 text-black">Email:</span>
                {item.email}
              </p>
              <p className="text-sm text-gray-500 py-1">
                <span className="font-semibold pr-1 text-black">Country:</span>
                {item.country}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold pr-1 text-black">
                  Phone Number:
                </span>
                {item.phone}
              </p>

              {activeCard === item.id && (
                <div className="mt-3">
                  <p className="text-gray-700 text-sm whitespace-pre-line">
                    <strong>Job Details:</strong> {item.jobDetails}
                  </p>
                  <p className="text-xs text-green-600 mt-2 font-medium">
                    Read
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
