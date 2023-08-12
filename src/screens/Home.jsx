import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import FetchFromApi from "../api/FetchFromApi";
import { VideoCard } from "../components";

const Home = () => {
  const [isloading, setIsLoading] = useState(false);
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await FetchFromApi("trending?geo=US&lang=en");
    setResponse(response.data);
    console.log(response, "use Effect");
    setIsLoading(false);
  };

  useEffect(() => {

    fetchData();

  }, []);

  console.log(isloading);

  return (
    <>
      <p className="home-head">Home</p>
      {isloading === true ? ( 

        <div>
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
            </div>

      ) : response.length > 0 ? (

        <div className="container">

          {response.map((item, index) => (

            <VideoCard key={index} data={item} />
          ))}

        </div>
      ) : (
        console.log("Some error occured")
      )}
    </>
  );
};

export default Home;
