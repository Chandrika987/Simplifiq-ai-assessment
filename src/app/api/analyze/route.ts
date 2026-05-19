import { NextResponse } from "next/server";

import { scrapeWebsite } from "@/lib/scrape";
import { generateAudit } from "@/lib/gemini";
import { sendAuditEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { website, email, company } = body;

    if (!website) {
      return NextResponse.json(
        {
          error: "Website is required",
        },
        {
          status: 400,
        }
      );
    }

    const scrapedData = await scrapeWebsite(website);

    const analysis = await generateAudit(scrapedData);
    if (email && company) {
  await sendAuditEmail(
    email,
    company,
    analysis
  );
}

    return NextResponse.json({
      analysis,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}