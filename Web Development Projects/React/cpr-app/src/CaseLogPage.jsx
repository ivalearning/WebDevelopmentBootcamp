import React, { useState } from "react";
import "./CaseLogPage.css";

export default function CaseLogPage() {
  const stores = ["Tata", "Budapest", "Győr", "Debrecen"];
  const [selectedStore, setSelectedStore] = React.useState("Tata");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const [sortConfig, setSortConfig] = useState({
  key: null,
  direction: "asc",
});

  const cases = [
    {
      id: 205534,
      product: "SODASTREAM TERRA BLACK CQC SZODAGEP",
      created: "21/11/2025",
      updated: "21/11/2025",
      status: "Submitted",
      decision: "",
      summary: "Summary",
      store: "Tata",
    },
    {
      id: 205452,
      product: "Szarvasi Mini Espresso SZV-612/3 fekete elektromos kávéfőző",
      created: "19/11/2025",
      updated: "19/11/2025",
      status: "Submitted",
      decision: "SUMMARY",
      summary: "Summary",
      store: "Budapest",
    },
    {
      id: 205367,
      product: "A PRODUCT to return",
      created: "17/11/2025",
      updated: "17/11/2025",
      status: "Closed",
      decision: "Change of Mind | SUMMARY",
      summary: "Summary",
      store: "Tata",
    },
        {
      id: 205366,
      product: "B PRODUCT  to be fixed",
      created: "18/11/2025",
      updated: "20/11/2025",
      status: "Submitted",
      decision: "To fix",
      summary: "Summary",
      store: "Tata",
    },
        {
      id: 205365,
      product: "C PRODUCT where we do not know yet ",
      created: "17/12/2025",
      updated: "17/12/2025",
      status: "Closed",
      decision: "No plans",
      summary: "Summary",
      store: "Tata",
    },
        {
      id: 205364,
      product: "D PRODUCT without issue",
      created: "07/02/2026",
      updated: "11/02/2026",
      status: "Closed",
      decision: "Working, no issue found",
      summary: "Summary",
      store: "Tata",
    },
  ];

    // Sorting handler
    const handleSort = (columnKey) => {
    setSortConfig((prev) => {
        if (prev.key === columnKey) {
        // toggle direction
        return {
            key: columnKey,
            direction: prev.direction === "asc" ? "desc" : "asc",
        };
        }
        return { key: columnKey, direction: "asc" };
    });
    };

  // Filter cases based on selected store
  const filteredCases = cases.filter((c) => c.store === selectedStore);


    // Sort
    let sortedCases = [...filteredCases];
    if (sortConfig.key) {
    sortedCases.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
    });
    }

    // Pagination
    const totalPages = Math.ceil(sortedCases.length / pageSize);

    const paginatedCases = sortedCases.slice(
        (currentPage - 1) * pageSize, currentPage * pageSize
    );

  /*  // Reset pagination when store changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStore]); */
  

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-logo"><img src="" alt="" /> Tesco logo</div>
         <div className="app-name">Customer Product Return <br></br>Tool</div>

        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <div className="sidebar-section-title">Home</div>
            <button className="nav-item nav-item-single">Dashboard</button>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-title">Returns</div>
            <button className="nav-item nav-item-active">Case log</button>
            <button className="nav-item">Search</button>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-title">Admin</div>
            <button className="nav-item">Service Centres</button>
            <button className="nav-item">App Auth Codes</button>
            <button className="nav-item">Reports</button>
            <button className="nav-item">Logout</button>
          </div>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="topbar-left">
             <div className="store-selector">
              <label htmlFor="store">Store:</label>
              <select
                id="store"
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
              >
                {stores.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>
          </div>

          
        </header>
        <section >
            <div className="middle">
                <input type="text" placeholder="Filter" />
                <button className="download-btn">Download</button>
                
            </div>
        </section>

        <section className="content">
          <div className="content-header">
            <h1 className="content-title">Case log</h1>
          </div>

          <div className="table-wrapper">
            <table className="case-table">            
              <thead>
                <tr>
                    <th onClick={() => handleSort("id")}>
                    Return ID {sortConfig.key === "id" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>

                    <th onClick={() => handleSort("product")}>
                    Product Description {sortConfig.key === "product" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>

                    <th onClick={() => handleSort("created")}>
                    Created {sortConfig.key === "created" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>

                    <th onClick={() => handleSort("updated")}>
                    Updated {sortConfig.key === "updated" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>

                    <th onClick={() => handleSort("status")}>
                    Status {sortConfig.key === "status" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>

                    <th onClick={() => handleSort("decision")}>
                    Decision {sortConfig.key === "decision" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>
                    <th></th>
                </tr>
              </thead>


              <tbody>
                {paginatedCases.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.product}</td>
                    <td>{c.created}</td>
                    <td>{c.updated}</td>
                    <td>{c.status}</td>
                    <td>{c.decision}</td>
                    <td><a href="">{c.summary}</a></td>
                  </tr>
                ))}
                {paginatedCases.length === 0 && (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                      No cases for this store
                    </td>
                  </tr>
                )} 
              </tbody>
            </table>
            {/*Pagination */}
            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    > &lt; 
                </button>
                <span>Page {currentPage} of {totalPages || 1}</span>
                <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage((p) =>  Math.min(totalPages,  p + 1))}
                    > &gt; 
                </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
