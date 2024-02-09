import React, { useEffect, useState } from "react";
import JobPosting from "./component/job-posting";

const API_URL = "https://hacker-news.firebaseio.com/v0";
const PER_PAGE = 6;

const JobBoard = () => {
  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState(null);
  const [isFetchingDetails, setFetchingDetails] = useState(false);
  const [page, setPage] = useState(0);

  async function fetchItems() {
    setFetchingDetails(true);

    let itemList = itemIds;
    if (itemList === null) {
        const response = await fetch(`${API_URL}/jobstories.json`);
        itemList = await response.json();
        setItemIds(itemList);
    }
    const itemsIdforPage = itemList?.slice(page*PER_PAGE, page*PER_PAGE+PER_PAGE);

    const itemsForPage = await Promise.all(
      itemsIdforPage.map((itemId) =>
        fetch(`${API_URL}/item/${itemId}.json`).then((response) =>
          response.json()
        )
      )
    );

    setItems([...items, ...itemsForPage]);
    setFetchingDetails(false);
  }

  useEffect(() => {
    fetchItems();
  }, [page]);
  console.log(items)
  return (
    <div className="custom-app">
      <h1 className="custom-title">Hacker News Jobs Board</h1>
      {itemIds === null || items.length < 1 ? (
        <p className="custom-loading">Loading...</p>
      ) : (
        <div>
          <div className="custom-items" role="list">
            {items.map((item) => (
              <JobPosting key={item.id} {...item} />
            ))}
          </div>
          {items.length > 0 && page*PER_PAGE+PER_PAGE < itemIds.length && (
              <button
                className={`custom-load-more-button`}
                disabled={isFetchingDetails}
                onClick={() => setPage((prevPage) => prevPage+1)}
              >
                {isFetchingDetails ? "loading..." : "Load more jobs"}
              </button>
            )}
        </div>
      )}
    </div>
  );
};

export default JobBoard;
