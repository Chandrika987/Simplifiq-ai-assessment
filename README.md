# AI Lead Enrichment & Audit Automation Platform

## Live Demo

Add your deployed Vercel URL here:

```bash
https://your-project.vercel.app
```

---

# Project Overview

This project is an AI-powered lead enrichment and business audit automation platform built as part of the SimplifiQ AI Software Developer Intern Assessment.

The platform automates the complete workflow from lead submission to AI-generated business analysis and outreach automation.

When a prospect submits company details through the form, the system:

* Collects lead information
* Scrapes publicly available website content
* Uses AI to generate a personalized business audit
* Generates downloadable PDF reports
* Sends automated email responses
* Logs lead data for CRM-style tracking

The goal was to create a clean, scalable, and practical automation workflow that demonstrates problem-solving ability, engineering decisions, and product thinking.

---

# Features

## Core Workflow

* Lead capture form
* Website scraping using Cheerio
* AI-generated business audits
* Dynamic audit rendering
* Downloadable PDF report generation
* Automated email delivery
* Responsive modern UI
* Live deployment on Vercel

## Automation Features

* Automated AI analysis pipeline
* Email outreach automation
* Structured audit generation
* Multi-step backend workflow

## UI Features

* Glassmorphism-inspired modern interface
* Responsive design
* Loading overlays and feedback states
* Dynamic AI result cards
* Smooth transitions and animations

---

# Tech Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Lucide React Icons

## Backend

* Next.js API Routes
* OpenRouter API
* Resend Email API

## AI & Automation

* OpenRouter
* GPT-based business analysis

## Utilities

* Axios
* Cheerio
* jsPDF

## Deployment

* Vercel

---

# Architecture

```bash
User Form Submission
        ↓
Website Scraping
        ↓
AI Business Analysis
        ↓
Dynamic Audit Rendering
        ↓
PDF Generation
        ↓
Automated Email Delivery
```

---

# Folder Structure

```bash
src/
 ├── app/
 │    ├── api/
 │    │     └── analyze/
 │    │           └── route.ts
 │    ├── globals.css
 │    ├── layout.tsx
 │    └── page.tsx
 │
 ├── components/
 │    ├── AuditCard.tsx
 │    ├── Hero.tsx
 │    ├── LeadForm.tsx
 │    └── Workflow.tsx
 │
 ├── lib/
 │    ├── ai.ts
 │    ├── scrape.ts
 │    ├── email.ts
 │    └── sheets.ts
```

---

# API Requirements

Create a `.env.local` file in the root directory.

## Required Environment Variables

```env
OPENROUTER_API_KEY=your_openrouter_key
RESEND_API_KEY=your_resend_key
```

## Optional

```env
SHEETDB_API_URL=your_sheetdb_url
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/yourusername/simplifiq-ai-assessment.git
```

## Navigate Into Project

```bash
cd simplifiq-ai-assessment
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Engineering Decisions

## Why OpenRouter?

OpenRouter was selected because it provides:

* Simple AI model access
* Stable API workflow
* Fast integration
* Flexible model switching

## Why Next.js?

Next.js allowed:

* Fullstack architecture
* API routes within same project
* Fast deployment workflow
* Strong TypeScript support

## Why jsPDF Instead of Screenshot PDFs?

A structured text-based PDF generation approach was used for:

* Better reliability
* Reduced rendering issues
* Multi-page support
* Cleaner export workflow

---

# Tradeoffs & Assumptions

* Website scraping is limited to publicly available content
* AI output quality depends on scraped website information
* Some websites may block scraping requests
* Lightweight architecture was prioritized due to time constraints
* Email delivery currently uses Resend sandbox sender
* PDF generation prioritizes reliability over visual complexity

---

# Limitations

* No authentication system
* No database persistence
* Limited scraping depth
* No retry queue for failed emails
* AI responses may vary between runs

---

# Future Improvements

* Add database integration
* Add CRM dashboard
* Add authentication
* Add queue-based job processing
* Add advanced AI personalization
* Add analytics dashboard
* Add PDF templates and branding
* Add vector search and embeddings

---

# Screenshots

Add screenshots here:

* Landing Page
* Generated AI Audit
* PDF Report
* Email Delivery
* Deployment Preview

---

# Professional Submission Summary

This project demonstrates a complete AI-powered workflow automation system designed to streamline lead enrichment and personalized outreach.

The platform combines website scraping, AI-generated business analysis, PDF reporting, automated email delivery, and workflow orchestration into a single modern application.

The implementation prioritizes:

* Clean architecture
* Practical automation
* Maintainable code structure
* User experience
* Reliability under real-world constraints

The solution was designed and deployed as a scalable fullstack application using Next.js, TypeScript, OpenRouter, and Resend.

---

# Repository

Add your GitHub repository link here:

```bash
https://github.com/yourusername/simplifiq-ai-assessment
```

---

# Live Deployment

Add your Vercel deployment URL here:

```bash
https://your-project.vercel.app
```
