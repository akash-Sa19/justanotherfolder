import React, { useState } from "react";
import { coins } from "../constants";

const Pagination = () => {
  const postPerPage = 8;
  const [res, setRes] = useState(coins); // Initialize with the coins or an empty array
  const [currentPage, setCurrentPage] = useState(1);

  // Uncomment to fetch data from API
  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     const response = await axios.get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //     );
  //     setRes(response.data);
  //     console.log(response.data);
  //   };
  //   fetchCoins();
  // }, []);

  // Calculate the indices based on current page
  const startingIndex = (currentPage - 1) * postPerPage;
  const endingIndex = startingIndex + postPerPage;

  // Handle going to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle going to the next page
  const handleNextPage = () => {
    const totalPages = Math.ceil(res.length / postPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };
  // Handle going to the last page
  const handleLastPage = () => {
    const totalPages = Math.ceil(res.length / postPerPage);
    setCurrentPage(totalPages);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap items-center gap-20 justify-evenly">
        {res.slice(startingIndex, endingIndex).map((coin) => {
          return (
            <Card
              key={coin.id}
              img={coin.image}
              name={coin.name}
              price={coin.current_price}
            />
          );
        })}
      </div>
      <div className="flex mt-5 text-3xl justify-evenly">
        <div onClick={handleFirstPage}>First</div>
        <div onClick={handlePrevPage}>Prev</div>
        <div>
          <p>{currentPage}</p>
        </div>
        <div onClick={handleNextPage}>Next</div>
        <div onClick={handleLastPage}>Last</div>
      </div>

      <div className="flex justify-center">
        Analysis : {startingIndex} - {endingIndex}
      </div>
    </div>
  );
};
const Card = ({ img, name, price }) => {
  return (
    <div className="w-1/6 p-4 bg-gray-100 rounded-lg shadow-lg">
      <img
        src={img}
        alt={name}
      />
      <p className="text-xl text-black">{name}</p>
      <p className="text-xl text-black">{price} $</p>
    </div>
  );
};

export default Pagination;
