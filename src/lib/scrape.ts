import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeWebsite(url: string) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    const $ = cheerio.load(data);

    const title = $("title").text();

    const metaDescription =
      $('meta[name="description"]').attr(
        "content"
      ) || "";

    const headings = $("h1, h2")
      .map((_, el) => $(el).text())
      .get()
      .join("\n");

    const paragraphs = $("p")
      .map((_, el) => $(el).text())
      .get()
      .slice(0, 10)
      .join("\n");

    return `
Title:
${title}

Meta Description:
${metaDescription}

Headings:
${headings}

Paragraphs:
${paragraphs}
`;
  } catch (error) {
    console.error("Scraping Error:", error);

    return `
Website scraping partially failed.

The website may block automated requests,
but continue generating insights based on available information.
`;
  }
}