import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8">
          <Link to="/">Dashboard</Link>
          <Link to="/analysis">Analysis</Link>
          <Link to="/compare">Compare</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;