import { resumes } from "constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeX" },
    { name: "description", content: "Score, Analyze, and Improve Your Resume!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Score, Analyze, and Improve Your Resume! </h1>
        <h2>Get Instant AI-Powered Resume Feedback.</h2>
      </div>
    </section>


{resumes.map((resume) => (
  <div >
    <h1>{resume.jobTitle}</h1>
  </div>
))}

  </main>
}
 