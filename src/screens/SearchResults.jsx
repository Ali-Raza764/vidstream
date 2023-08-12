import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Results from "../components/results/Results";
import FetchFromApi from "../api/FetchFromApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchResult = () => {
  let { id } = useParams();
  const [response, setResponse] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const fetch = async (setResponse) => {
    setIsLoading(true);
    const response = await FetchFromApi(`search?query=${id}&geo=US&lang=en`);
    try {
      setResponse(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetch(setResponse);
  }, []);

  return (
    <>

      <p className="home-head">Results</p>

      {isloading == true ? (

        <div>

          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="160px" count={20} />
          </SkeletonTheme>

        </div>
        
      ) : (
        <div>{response.length > 0 ? <Results data={response} /> : ""}</div>
      )}
    </>
  );
};

export default SearchResult;
