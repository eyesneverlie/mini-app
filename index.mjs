import axios from "axios";
import { writeFile } from "fs/promises";

// Replace with your actual values
const API_URL =
  "https://cae64d75-2.b-cdn.net/api/v1/sales?limit=20&is_sell=true&sort_by=created_at&sort_dir=desc";
const AUTH_TOKEN = "";

async function fetchAllPages() {
  let currentPage = 0;
  let totalPages = 1;
  const allItems = [];

  while (currentPage <= totalPages) {
    try {
      const response = await axios.get(
        `${API_URL}&offset=${currentPage * 20}`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      const { pagination, results } = response.data;

      if (!results || results.length === 0) {
        console.log(`No items found on page ${currentPage}. Stopping.`);
        break;
      }

      totalPages = pagination.pages;
      console.log(
        `Fetched page ${currentPage} of ${totalPages}: ${results.length} items`
      );
      allItems.push(...results);

      currentPage++;
    } catch (error) {
      console.error(
        `Error on page ${currentPage}:`,
        error.response?.data || error.message
      );
      break;
    }
  }

  console.log(`✅ Done. Total items collected: ${allItems.length}`);

  try {
    await writeFile("collected_data.json", JSON.stringify(allItems, null, 2));
    console.log(
      `✅ Data saved to collected_data.json (${allItems.length} items)`
    );
  } catch (err) {
    console.error("❌ Failed to write file:", err.message);
  }

  return allItems;
}

fetchAllPages();
