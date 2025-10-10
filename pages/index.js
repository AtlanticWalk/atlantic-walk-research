import { useState } from "react";

export default function AtlanticWalkResearch() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "research":
        return (
          <section className="grid gap-8 md:grid-cols-2">
            <article className="border rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-2">MP Materials (NYSE: MP)</h2>
              <p className="mb-2">Published Jan 2024 • Stock up ~100% since</p>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>DCF + comps valuation</li>
                <li>Revenue driver model by production stream</li>
                <li>Tariff risk + geopolitical catalysts</li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">View writeup (PDF)</a>
                <a href="#" className="text-blue-600 hover:underline">Download model (XLSX)</a>
              </div>
            </article>

            <article className="border rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-2">ACM Research (NASDAQ: ACMR)</h2>
              <p className="mb-2">Draft under review • Semiconductor capex thematic</p>
              <ul className="list-disc list-inside text-sm mb-2">
                <li>Valuation framework with rNPV scenario matrix</li>
                <li>Backlog, class penetration, and ASP assumptions</li>
                <li>IR contact + GreenBox JV notes</li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">View writeup (PDF)</a>
                <a href="#" className="text-blue-600 hover:underline">Download model (XLSX)</a>
              </div>
            </article>
          </section>
        );
      case "about":
        return (
          <section className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">About Atlantic Walk Research</h2>
            <p className="text-base text-gray-700">
              Atlantic Walk Research is an independent equity research platform focused on deep fundamental analysis, asymmetric market opportunities, and long-term business modeling. All work is self-directed and unaffiliated with any financial institution.
            </p>
          </section>
        );
      case "contact":
        return (
          <section className="max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-base text-gray-700 mb-2">
              Reach out via email: <a href="mailto:glenn@atlanticwalk.com" className="text-blue-600 hover:underline">glenn@atlanticwalk.com</a>
            </p>
          </section>
        );
      default:
        return (
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-2">Welcome to Atlantic Walk Research</h2>
            <p className="text-lg text-gray-600 mb-6">Independent equity research by Glenn Rentrop</p>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <nav className="mb-12 flex gap-6 text-lg font-medium">
        <button onClick={() => setPage("home")} className="text-blue-700 hover:underline">Home</button>
        <button onClick={() => setPage("research")} className="text-blue-700 hover:underline">Research</button>
        <button onClick={() => setPage("about")} className="text-blue-700 hover:underline">About</button>
        <button onClick={() => setPage("contact")} className="text-blue-700 hover:underline">Contact</button>
      </nav>

      {renderPage()}

      <footer className="mt-16 text-sm text-gray-500 border-t pt-4">
        <p>&copy; 2025 Atlantic Walk Research. Independent research only. Not investment advice.</p>
      </footer>
    </div>
  );
}