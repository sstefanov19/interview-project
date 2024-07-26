import { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <div className="flex flex-col justify-center items-center h-auto w-4/5 bg-slate-800 rounded-lg shadow-2xl p-6">
        <h1 className="text-white text-3xl mb-6 font-extrabold">Interview App</h1>
        <div className="w-full bg-gray-300 rounded-md p-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
          {loading ? (
            <p className="text-gray-600">Loading data...</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {data.map((item) => (
                <li key={item.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Name: {item.name}</h2>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Username:</span> {item.username}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Email:</span> {item.email}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Company:</span> {item.company.name}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">City:</span> {item.address.city}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Street:</span> {item.address.street}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Zipcode:</span> {item.address.zipcode}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Phone:</span> {item.phone}</p>
                  <p className="text-gray-700 mb-1"><span className="font-bold">Website:</span> {item.website}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
