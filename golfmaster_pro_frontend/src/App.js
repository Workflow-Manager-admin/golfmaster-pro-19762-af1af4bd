import React, { useState } from 'react';
import './App.css';

/*
  GolfMaster Pro Main Container
  - Dashboard layout with top navbar
  - Tabs for Tournament, Side Games, Scoring, Leaderboard
  - Placeholder components for future feature modules
  - Responsive and clean layout using the template's CSS variables/colors
*/

// Feature tab names
const TABS = [
  "Tournaments",
  "Side Games",
  "Score Entry",
  "Leaderboard"
];

// PUBLIC_INTERFACE
function App() {
  const [activeTab, setActiveTab] = useState("Tournaments");

  // Navbar with branding
  function Navbar() {
    return (
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo">
            <span className="logo-symbol" style={{ color: "#1A936F" }}>&#9971;</span> {/* golf flag symbol */}
            <span style={{ fontWeight: 700, marginLeft: 4 }}>GolfMaster Pro</span>
          </div>
          <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>for Tournament Directors</span>
        </div>
      </nav>
    );
  }

  // Main tab navigation
  function TabMenu() {
    return (
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
        {TABS.map(tab =>
          <button
            key={tab}
            className="btn"
            style={{
              backgroundColor: activeTab === tab ? "#1A936F" : "var(--kavia-dark)",
              color: activeTab === tab ? "#fff" : "var(--text-secondary)",
              border: activeTab === tab ? "2px solid #FFD166" : "1px solid var(--border-color)",
              fontWeight: activeTab === tab ? 600 : 400,
              boxShadow: activeTab === tab ? "0 0 0 2px #FFD16655" : "none"
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        )}
      </div>
    );
  }

  // Placeholder content for each tab
  function TabContent() {
    switch (activeTab) {
      case "Tournaments":
        return <TournamentModule />;
      case "Side Games":
        return <SideGameModule />;
      case "Score Entry":
        return <ScoreEntryModule />;
      case "Leaderboard":
        return <LeaderboardModule />;
      default:
        return null;
    }
  }

  // === Feature Module Placeholders ===

  // PUBLIC_INTERFACE
  function TournamentModule() {
    return (
      <section>
        <div className="subtitle" style={{ color: "#1A936F", textAlign: "center" }}>Tournament Management</div>
        <h2 className="title" style={{ fontSize: "2.3rem", margin: "0 0 8px 0", textAlign: "center" }}>Create & Manage Tournaments</h2>
        <p className="description" style={{ textAlign: "center" }}>
          Set up new golf tournaments, configure formats, rules, and invite players. More to come!
        </p>
        {/* Placeholder for create/join UI */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-large">+ New Tournament</button>
          <button className="btn btn-large" style={{ backgroundColor: "#FFD166", color: "#222" }}>Join Tournament</button>
        </div>
      </section>
    );
  }

  // PUBLIC_INTERFACE
  function SideGameModule() {
    return (
      <section>
        <div className="subtitle" style={{ color: "#114B5F", textAlign: "center" }}>Side Game Management</div>
        <h2 className="title" style={{ fontSize: "2rem", textAlign: "center" }}>Add & Track Side Bets</h2>
        <p className="description" style={{ textAlign: "center" }}>
          Nassau, Wolf, skins, and other betting formats managed here. (Module coming soon)
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-large" style={{ backgroundColor: "#114B5F" }}>New Side Game</button>
        </div>
      </section>
    );
  }

  // PUBLIC_INTERFACE
  function ScoreEntryModule() {
    return (
      <section>
        <div className="subtitle" style={{ color: "#E87A41", textAlign: "center" }}>Score Tracking</div>
        <h2 className="title" style={{ fontSize: "2rem", textAlign: "center" }}>Real-Time Score Entry</h2>
        <p className="description" style={{ textAlign: "center" }}>
          Enter and track player scores hole-by-hole. Live updates in future versions!
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-large" style={{ backgroundColor: "#E87A41" }}>Enter Scores</button>
        </div>
      </section>
    );
  }

  // PUBLIC_INTERFACE
  function LeaderboardModule() {
    return (
      <section>
        <div className="subtitle" style={{ color: "#FFD166", textAlign: "center" }}>Leaderboard & Results</div>
        <h2 className="title" style={{ fontSize: "2rem", textAlign: "center" }}>Live Standings</h2>
        <p className="description" style={{ textAlign: "center" }}>
          Check rankings for tournaments and side games. Visual leaderboards coming soon!
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-large" style={{ backgroundColor: "#FFD166", color: "#222" }}>View Leaderboard</button>
        </div>
      </section>
    );
  }

  // ====== Main render
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="container" style={{ paddingTop: 100, paddingBottom: 64 }}>
          <TabMenu />
          <TabContent />
        </div>
      </main>
    </div>
  );
}

export default App;