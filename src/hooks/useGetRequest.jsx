import axios from "axios"
import { useState } from "react"
import { Cookies } from "react-cookie";



export default function useGetRequest() {

        const [data, setData] = useState([]);
        const [hasError, setHasError] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setIsLoading] = useState(true);
        const cookies = new Cookies();

    const getRequest = async (endpoint) => {

        try {
            setIsLoading(true);
            console.log("Loading... data from endpoint:", endpoint);
            const response =  await axios.get("http://127.0.0.1:8000/api/" + endpoint, {
                headers: {
                    Authorization: "Bearer " + cookies.get("token"),
                    Accept: "application/json",
                },
                });
                if (response.data.status === true) {
                    const data = response.data;
                    setData(data);
                    setIsLoading(false);
                    console.log("Data fetched successfully:");
                    console.log(data)
                } else {
                    setHasError(true);
                    setIsLoading(false);
                    setErrorMessage(response.data.message || "An error occurred while fetching data.");
                    console.log("Fetch Failed",response.data.message);
                }
            } catch (error) {
                setHasError(true);
                setIsLoading(false);
                setErrorMessage("An error occurred while fetching data.");
                console.error("Error getting data:-", error);

            }
    }
  return { data, hasError, errorMessage, isLoading , getRequest };
}