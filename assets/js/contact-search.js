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

document.addEventListener('DOMContentLoaded', function () {
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
