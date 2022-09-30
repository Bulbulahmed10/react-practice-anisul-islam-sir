import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Fatching Unsuccessfull...");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsloading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, [url]);
  return {data, isLoading, error}
};

export default useFetch;
