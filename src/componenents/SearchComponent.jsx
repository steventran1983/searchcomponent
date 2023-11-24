import React, { useState } from "react";

const SearchComponent = ({ records }) => {
  const [query, setQuery] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(records);
  console.log(["records"], records);
  const handleSearch = () => {
    const searchResults = records
      .filter(
        (record) =>
          record.question.toLowerCase().includes(query.toLowerCase()) ||
          record.date.toLowerCase().includes(query.toLowerCase()) ||
          record.answer.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 100); // Limiting to 100 records
    setFilteredRecords(searchResults);
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md flex-grow"
          value={query}
          onChange={(e) => handleSearch(setQuery(e.target.value))}
          placeholder="Search..."
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{record.date}</td>
                <td className="px-6 py-4">{record.question}</td>
                <td className="px-6 py-4">{record.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchComponent;
