const FetchFromApi = async (req) => {
  const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com/";
  const YT_API_KEY = "d40c265118mshdc90194a533aa99p18842bjsn18247c206e8e";
  const options = {
    params: {
      maxResults: "100",
    },
    headers: {
      "X-RapidAPI-Key": YT_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch((BASE_URL+req), options);
    const result = await response.json();
    return await result;
  } catch (error) {
    console.error(error);
  }
};
export default FetchFromApi;

// trending?geo=US&lang=en
// search?query=${querry}&geo=US&lang=en
