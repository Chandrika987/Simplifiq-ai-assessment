import Hero from "@/components/Hero";
import WorkflowTimeline from "@/components/WorkflowTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <Hero />
      <WorkflowTimeline />
    </main>
  );
}