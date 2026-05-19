import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function generateAudit(
  companyData: string
) {
  try {
    console.log("Generating AI audit...");

    const trimmedData = companyData.slice(0, 5000);

    const completion =
      await client.chat.completions.create({
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "system",
            content:
              "You are an expert AI business consultant.",
          },

          {
            role: "user",
            content: `
Analyze this company and generate a professional business audit.

Company Data:
${trimmedData}

Include:
- Company Overview
- AI Opportunities
- Recommendations
- Growth Suggestions
`,
          },
        ],
      });

    return (
      completion.choices[0].message.content ||
      "No response generated."
    );
  } catch (error) {
    console.error("OpenRouter Error:", error);

    return `
Failed to generate AI audit.

Possible reasons:
- Invalid OpenRouter API key
- API rate limits
- Network issue
`;
  }
}