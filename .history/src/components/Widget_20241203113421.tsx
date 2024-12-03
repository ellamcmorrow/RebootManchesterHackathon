import React from "react";

const reminders = [
  { title: "Electricity Bill", dueDate: "2024-12-10", amount: "£75.00" },
  { title: "Spotify Subscription", dueDate: "2024-12-15", amount: "£9.99" },
  { title: "Council Tax", dueDate: "2024-12-20", amount: "£120.00" },
];

const Widget = () => {
  return (
    <div className="bg-gray p-4 max-w-md mx-auto rounded-lg shadow-lg">
      <h2 className="text-green text-xl font-semibold mb-4">Upcoming Bills</h2>
      <ul className="space-y-4">
        {reminders.map((reminder, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
          >
            <div>
              <h3 className="text-gray-dark font-medium">{reminder.title}</h3>
              <p className="text-gray text-sm">Due: {reminder.dueDate}</p>
            </div>
            <span className="text-green font-semibold">{reminder.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Widget;
