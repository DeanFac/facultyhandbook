/* document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('contactSearch');
  const table = document.getElementById('contactsTable');
  const rows = Array.from(table.getElementsByTagName('tr')).slice(1); // skip header

  function stripHighlight(el) {
    const marks = el.querySelectorAll('mark');
    marks.forEach(m => {
      const parent = m.parentNode;
      parent.replaceChild(document.createTextNode(m.textContent), m);
      parent.normalize();
    });
  }


function highlightCell(node, term) {
  if (!term || term.trim() === '') return;

  if (node.nodeType === Node.TEXT_NODE) {
    const idx = node.textContent.toLowerCase().indexOf(term.toLowerCase());
    if (idx >= 0) {
      const before = document.createTextNode(node.textContent.slice(0, idx));
      const match = document.createElement('mark');
      match.textContent = node.textContent.slice(idx, idx + term.length);
      match.style.backgroundColor = 'rgba(165, 42, 42, 0.2)'; // transparent brown
      match.style.color = 'red';
      match.style.fontWeight = 'bold';
      const after = document.createTextNode(node.textContent.slice(idx + term.length));
      const parent = node.parentNode;
      parent.replaceChild(after, node);
      parent.insertBefore(match, after);
      parent.insertBefore(before, match);
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    node.childNodes.forEach(child => highlightCell(child, term));
  }
}


  function filterRows() {
    const q = searchInput.value.trim().toLowerCase();
    rows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      let matched = false;
      // remove previous highlights
      Array.from(cells).forEach(c => stripHighlight(c));
      for (let i = 0; i < cells.length; i++) {
        const text = cells[i].innerText.toLowerCase();
        if (q && text.includes(q)) {
          matched = true;
        }
      }
      row.style.display = (!q || matched) ? '' : 'none';
      if (matched && q) {
        Array.from(cells).forEach(c => {
          if (c.innerText.toLowerCase().includes(q)) highlightCell(c, q);
        });
      }
    });
  }

  searchInput.addEventListener('input', filterRows);
  new Tablesort(document.getElementById('contactsTable'));

});

document.getElementById('downloadExcel').addEventListener('click', function() {
  const table = document.getElementById('contactsTable');
  const searchTerm = document.getElementById('contactSearch').value.trim().replace(/\s+/g, '_');
  const filename = searchTerm ? `contacts_${searchTerm}.csv` : 'contacts.csv';

  let csv = [];
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => {
    if (row.style.display === 'none') return;  // skip hidden rows
    const cols = row.querySelectorAll('td, th');
    let rowData = [];
    cols.forEach(col => {
      let text = col.innerText.replace(/"/g, '""'); // escape quotes
      rowData.push('"' + text + '"');
    });
    csv.push(rowData.join(','));
  });

  const csvString = csv.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});*/

/*document.addEventListener('DOMContentLoaded', async function () {
  const searchInput = document.getElementById('contactSearch');
  const resultsTable = document.getElementById('resultsTable');
  const resultsBody = document.getElementById('resultsBody');
  const downloadBtn = document.getElementById('downloadCsv');

  // Fetch contacts JSON
  const response = await fetch('/assets/contacts.json');
  const contacts = await response.json();

  // Add IDs if missing
  contacts.forEach((c, idx) => { if (!c.id) c.id = idx; });

  // Build Lunr index
  const idx = lunr(function () {
    this.ref('id');
    this.field('Name');
    this.field('Designation');
    this.field('Extension');
    this.field('Location');
    this.field('Email');
    this.field('Cellphone');
    this.field('Unit');
    contacts.forEach(c => this.add(c));
  });

  let lastResults = [];

  function renderResults(results) {
    resultsBody.innerHTML = '';
    if (results.length === 0) {
      resultsTable.style.display = 'none';
      downloadBtn.style.display = 'none';
      return;
    }

    lastResults = results;
    lastResults.forEach(c => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${c["Name"] || "Not applicable"}</td>
        <td>${c["Designation"] || "Not applicable"}</td>
        <td>${c["Extension"] || "Not applicable"}</td>
        <td>${c["Location"] || "Not applicable"}</td>
        <td>${c["Email"] || "Not applicable"}</td>
        <td>${c["Cellphone"] || "Not available"}</td>
        <td>${c["Unit"] || "Not applicable"}</td>
      `;
      resultsBody.appendChild(row);
    });

    resultsTable.style.display = 'table';
    downloadBtn.style.display = 'inline-block';
  }

  // Hybrid search (Lunr + substring fallback with multi-word support)
  searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      resultsBody.innerHTML = '';
      resultsTable.style.display = 'none';
      downloadBtn.style.display = 'none';
      return;
    }

    let results = [];

    try {
      // Lunr fuzzy search
      const lunrResults = idx.search(query + "*");
      results = lunrResults.map(r => contacts.find(c => c.id == r.ref));
    } catch (e) {
      results = [];
    }

    // Fallback: substring search with multi-word
    if (results.length === 0) {
      const words = query.split(/\s+/); // split on spaces
      results = contacts.filter(c => {
        const allFields = Object.values(c).join(" ").toLowerCase();
        return words.every(word => allFields.includes(word));
      });
    }

    renderResults(results);
  });

  // CSV download
  downloadBtn.addEventListener('click', function () {
    if (!lastResults.length) return;

    const headers = ["Name", "Designation", "Extension", "Location", "Email", "Cell Phone", "Unit"];
    let csv = [headers.join(",")];

    lastResults.forEach(c => {
      const row = headers.map(h => {
        let val = c[h] || (h === "Cellphone" ? "Not available" : "Not applicable");
        return `"${String(val).replace(/"/g, '""')}"`;
      });
      csv.push(row.join(","));
    });

    const csvString = csv.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contacts_filtered.csv";
    link.click();
  });
});*/

/*document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('contactSearch');
  const tableBody = document.querySelector('#contactsTable tbody');
  const downloadBtn = document.getElementById('downloadExcel');
  let contacts = [];
  let idx;

  // Fetch contacts.json
  fetch('/assets/contacts.json')
    .then(response => response.json())
    .then(data => {
      contacts = data.map((c, i) => ({
        id: i,
        Name: c.Name || "",
        Designation: c.Designation || "Not applicable",
        Extension: c.Extension || "",
        Location: c.Location || "",
        Email: c.Email || "",
        CellPhone: c["Cell Phone"] || "Not available",
        Unit: c.Unit || ""
      }));

      // Build lunr index
      idx = lunr(function () {
        this.ref('id');
        this.field('Name');
        this.field('Extension');
        this.field('Email');
        this.field('Unit');
        this.field('Designation');
        this.field('Location');
        this.field('CellPhone');
        contacts.forEach(c => this.add(c));
      });

      renderTable(contacts);
      new Tablesort(document.getElementById('contactsTable'));
    });

  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(c => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${c.Name}</td>
        <td>${c.Extension}</td>
        <td><a href="mailto:${c.Email}">${c.Email}</a></td>
        <td>${c.Unit}</td>
        <td>${c.Designation}</td>
        <td>${c.Location}</td>
        <td>${c.CellPhone}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function filterContacts(query) {
    if (!query.trim()) {
      renderTable(contacts);
      return;
    }

    // Lunr search
    let results = idx.search(query + "*").map(r => contacts.find(c => c.id == r.ref));

    // Add fallback substring search (multi-word)
    const qLower = query.toLowerCase();
    const substringMatches = contacts.filter(c =>
      Object.values(c).some(v =>
        String(v).toLowerCase().includes(qLower)
      )
    );

    // Merge both results (unique)
    const merged = [...new Map([...results, ...substringMatches].map(c => [c.id, c])).values()];

    renderTable(merged);
  }

  searchInput.addEventListener('input', function () {
    filterContacts(this.value);
  });

  // Download filtered table as CSV
  downloadBtn.addEventListener('click', function () {
    const rows = tableBody.querySelectorAll('tr');
    let csv = [["Name", "Designation", "Extension", "Location", "Email", "Cell Phone", "Unit"]];

    rows.forEach(row => {
      const cols = row.querySelectorAll('td');
      let rowData = Array.from(cols).map(col => `"${col.innerText.replace(/"/g, '""')}"`);
      csv.push(rowData);
    });

    const csvString = csv.map(r => r.join(",")).join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contacts.csv";
    link.click();
  });
});
*/
// contact-search.js

/*document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const resultsTableBody = document.getElementById("resultsTableBody");
  const downloadBtn = document.getElementById("downloadBtn");

  let contacts = [];
  let idx;

  // Fetch contacts.json
  fetch("/assets/contacts.json")
    .then((res) => res.json())
    .then((data) => {
      contacts = data;
      buildIndex(contacts);
      renderInitialList(50); // show first 50 on load
    });

  // Build Lunr index
  function buildIndex(data) {
    idx = lunr(function () {
      this.ref("id");
      this.field("Name");
      this.field("Designation");
      this.field("Extension");
      this.field("Location");
      this.field("Email");
      this.field("Cell Phone");
      this.field("Unit");

      data.forEach((doc) => this.add(doc));
    });
  }

  // Live search
  searchInput.addEventListener("input", doSearch);

  function doSearch() {
    const query = searchInput.value.trim();

    if (!query) {
      renderInitialList(50);
      return;
    }

    let results = [];

    try {
      // Lunr search with multi-word phrase
      results = idx.search(`"${query}"`).map((r) =>
        contacts.find((c) => c.id == r.ref)
      );
    } catch (e) {
      results = [];
    }

    // Fallback regex whole word search
    if (results.length === 0) {
      const regex = new RegExp("\\b" + query.toLowerCase() + "\\b");
      results = contacts.filter((c) =>
        Object.values(c).some((v) =>
          regex.test(String(v).toLowerCase())
        )
      );
    }

    renderResults(results);
  }

  // Render initial 50 entries
  function renderInitialList(limit) {
    renderResults(contacts.slice(0, limit));
  }

  // Render results into table
  function renderResults(results) {
    resultsTableBody.innerHTML = "";

    results.forEach((c) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${c.Name || "Not applicable"}</td>
        <td>${c.Designation || "Not applicable"}</td>
        <td>${c.Extension || "Not applicable"}</td>
        <td>${c.Location || "Not applicable"}</td>
        <td>${c.Email || "Not applicable"}</td>
        <td>${c["Cell Phone"] || "Not available"}</td>
        <td>${c.Unit || "Not applicable"}</td>
      `;
      resultsTableBody.appendChild(row);
    });

    // Apply tablesort (after rendering new rows)
    new Tablesort(document.getElementById("resultsTable"));
  }

  // CSV/Excel download
  downloadBtn.addEventListener("click", () => {
    const rows = [["Name", "Designation", "Extension", "Location", "Email", "Cell Phone", "Unit"]];

    document.querySelectorAll("#resultsTableBody tr").forEach((tr) => {
      const cols = Array.from(tr.querySelectorAll("td")).map((td) => td.innerText);
      rows.push(cols);
    });

    const csvContent = rows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts_filtered.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
}); This was good*/
/*document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const resultsTableBody = document.getElementById("resultsTableBody");
  const downloadBtn = document.getElementById("downloadBtn");

  let contacts = [];
  let idx;

  // Fetch contacts.json
  fetch("/assets/contacts.json")
    .then(response => response.json())
    .then(data => {
      contacts = data;

      // Build lunr index
      idx = lunr(function () {
        this.ref("id");
        this.field("Name");
        this.field("Designation");
        this.field("Extension");
        this.field("Location");
        this.field("Email");
        this.field("Cell Phone");
        this.field("Unit");

        data.forEach(doc => this.add(doc));
      });

      // Initial render (first 50)
      renderTable(contacts.slice(0, 50));
    });

  // 🔍 Live search
  searchInput.addEventListener("input", function () {
    const query = this.value.trim();

    if (!query) {
      renderTable(contacts.slice(0, 50)); // show first 50 if empty
      return;
    }

    // Lunr search
    const results = idx.search(query + "*"); // allows partial matches

    // Map results back to contacts
    const matchedContacts = results.map(r => contacts.find(c => c.id == r.ref));

    renderTable(matchedContacts);
  });

  // Render table
  function renderTable(data) {
    resultsTableBody.innerHTML = "";

    if (!data.length) {
      resultsTableBody.innerHTML = `<tr><td colspan="7">No results found</td></tr>`;
      return;
    }

    data.forEach(contact => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${contact["Name"] || "Not applicable"}</td>
        <td>${contact["Designation"] || "Not applicable"}</td>
        <td>${contact["Extension"] || "Not applicable"}</td>
        <td>${contact["Location"] || "Not applicable"}</td>
        <td>${contact["Email"] || "Not applicable"}</td>
        <td>${contact["Cell Phone"] || "Not available"}</td>
        <td>${contact["Unit"] || "Not applicable"}</td>
      `;
      resultsTableBody.appendChild(row);
    });

    // Reapply sorting
    new Tablesort(document.getElementById("resultsTable"));
  }

  // ⬇ Download filtered CSV
  downloadBtn.addEventListener("click", function () {
    const rows = resultsTableBody.getElementsByTagName("tr");
    if (!rows.length) return;

    let csv = "Name,Designation,Extension,Location,Email,Cell Phone,Unit\n";
    Array.from(rows).forEach(row => {
      const cols = row.getElementsByTagName("td");
      if (cols.length) {
        const vals = Array.from(cols).map(td => `"${td.innerText}"`);
        csv += vals.join(",") + "\n";
      }
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts_filtered.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
});*/
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchBox");
  const tableBody = document.querySelector("#resultsTable tbody");
  const downloadBtn = document.getElementById("downloadBtn");

  let contacts = [];
  let idx;

  // Fetch JSON data
  fetch("/assets/contacts.json")
    .then(response => response.json())
    .then(data => {
      contacts = data;

      // Build lunr index
      idx = lunr(function () {
        this.ref("id");
        this.field("Name");
        this.field("Designation");
        this.field("Extension");
        this.field("Location");
        this.field("Email");
        this.field("Cell Phone");
        this.field("Unit");

        contacts.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      // Show first 50 on load
      renderTable(contacts.slice(0, 50));
    });

  // Render table
  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(contact => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${contact["Name"] || "Not applicable"}</td>
        <td>${contact["Designation"] || "Not applicable"}</td>
        <td>${contact["Extension"] || "Not applicable"}</td>
        <td>${contact["Location"] || "Not applicable"}</td>
        <td>${contact["Email"] || "Not applicable"}</td>
        <td>${contact["Cell Phone"] || "Not available"}</td>
        <td>${contact["Unit"] || "Not applicable"}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // 🔍 Live search
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (!query) {
      renderTable(contacts.slice(0, 50)); // Show first 50 if empty
      return;
    }

    // Lunr broad search
    const results = idx.search(query + "*");

    // Map results back to contacts
    let matchedContacts = results.map(r => contacts.find(c => c.id == r.ref));

    // 🔎 Extra filtering for whole-word/phrase match
    matchedContacts = matchedContacts.filter(contact => {
      const text = (
        contact["Name"] + " " +
        contact["Designation"] + " " +
        contact["Extension"] + " " +
        contact["Location"] + " " +
        contact["Email"] + " " +
        contact["Cell Phone"] + " " +
        contact["Unit"]
      ).toLowerCase();

      // Whole word or full phrase match
      const regex = new RegExp("\\b" + query.replace(/\s+/g, "\\s+") + "\\b", "i");
      return regex.test(text);
    });

    renderTable(matchedContacts);
  });

  // CSV download of filtered results
  downloadBtn.addEventListener("click", function () {
    const rows = [["Name", "Designation", "Extension", "Location", "Email", "Cell Phone", "Unit"]];
    const currentRows = tableBody.querySelectorAll("tr");

    currentRows.forEach(tr => {
      const cells = tr.querySelectorAll("td");
      const row = Array.from(cells).map(td => td.innerText);
      rows.push(row);
    });

    let csvContent = rows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  // Enable sorting by clicking headers
  if (typeof Tablesort !== "undefined") {
    new Tablesort(document.getElementById("resultsTable"));
  }
});

