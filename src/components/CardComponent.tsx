import { useNavigate } from "react-router-dom";

const CardComponent = () => {
  const navigate = useNavigate();

  const cardArray = [
    { id: 1, name: "Dashboard", nav: "dashboard" },
    { id: 2, name: "Products", nav: "products" },
    { id: 3, name: "Users", nav: "users" },
    { id: 4, name: "Orders", nav: "orders" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
        {cardArray.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.nav)}
            className="cursor-pointer transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-800 rounded-2xl px-6 py-8 shadow-xl flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-500 shadow-md mb-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-gray-900 dark:text-white text-lg sm:text-xl font-semibold">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
