document.addEventListener('DOMContentLoaded', function() {
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
});
