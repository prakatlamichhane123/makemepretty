// import axios from "axios"
// import { useState } from "react"
// import { Cookies } from "react-cookie";



// export default function usePostRequest() {

//         const [data, setData] = useState([]);
//         const [hasError, setHasError] = useState(false);
//         const [errorMessage, setErrorMessage] = useState("");
//         const [isLoading, setIsLoading] = useState(true);
//         const cookies = new Cookies();
//         const postRequest = async (endpoint , data) => {

//               try {
//                 setIsLoading(true);
//                 const response =  await axios.post("http://127.0.0.1:8000/api/" + endpoint,data, {
//                     headers: {
//                         Authorization: "Bearer " + cookies.get("token"),
//                         Accept: "application/json",
//                     },
//                 });
//                 if (response.data.status === true) {
//                     const data = response.data;
//                     setData(data);
//                     setIsLoading(false);
//                     console.log("Data fetched successfully:");
//                 } else {
//                     setHasError(true);
//                     setIsLoading(false);
//                     setErrorMessage(response.data.message || "An error occurred while fetching data.");
//                     console.log("Fetch Failed");
//                 }
//             } catch (error) {
//                 setHasError(true);
//                 setIsLoading(false);
//                 setErrorMessage("An error occurred while fetching data.");
//                 console.error("Error getting data:", error);

//             }
//         }

//   return { data, hasError, errorMessage, isLoading , postRequest};
// }



import axios from "axios";
import { useState } from "react";
import { Cookies } from "react-cookie";

export default function usePostRequest() {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ default is false
  const cookies = new Cookies();

  const postRequest = async (endpoint, payload) => {
    setIsLoading(true);
    setHasError(false);
    setErrorMessage("");
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/${endpoint}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            Accept: "application/json",
          },
        }
      );

      if (response.data?.status === true) {
        setData(response.data);
        console.log("✅ Post request successful");
      } else {
        setHasError(true);
        setErrorMessage(response.data.message || "Request failed.");
        console.log("⚠️ Post request returned an error response");
      }

      return response; // ✅ Return full response for use in component

    } catch (error) {
      setHasError(true);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      console.error("❌ Error in post request:", error.message);
      throw error; // Optional: Let component handle it too
    } finally {
      setIsLoading(false);
    }
  };

  return { data, hasError, errorMessage, isLoading, postRequest };
}
