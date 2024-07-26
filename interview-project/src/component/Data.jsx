import { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center h-auto w-96 bg-slate-700 rounded-md shadow-lg p-4">
        <h1 className="text-white text-2xl font-semibold mb-4">Interview App</h1>
        <div className="w-full bg-gray-200 rounded-md p-4 overflow-y-auto" style={{ maxHeight: "50vh" }}>
          {data.length > 0 ? (
            <ul className="w-full">
              {data.map((item) => (
                <li key={item.id} className="bg-white p-4 my-2 rounded shadow-sm">
                  <h2 className="text-lg font-bold text-gray-700">{item.name}</h2>
                  <p className="text-gray-600">{item.email}</p>
                  <p className="text-gray-600">{item.company.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
