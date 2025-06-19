import axios from "axios";

// Replace with your actual values
const API_URL =
  "https://cae64d75-2.b-cdn.net/api/v1/sales?offset=0&limit=20&is_sell=true&sort_by=created_at&sort_dir=desc";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMjY0NDcxNzQiLCJ1c2VybmFtZSI6ImV5ZXNuZXZlcmxpZTExIiwiZXhwIjoxNzUwMjUxNjMxfQ.x9f6XYGtoaHlGsgbQXk2yRkhM6zfeKL17FfI4QUL0gE";

async function fetchData() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    console.log("Response data:", response.data);
  } catch (error) {
    console.log("ERROR = ", error);
    console.error("Error:", error.response?.data || error.message);
  }
}

fetchData();
