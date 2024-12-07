const votes = {};

function castVote() {
    const wattageInput = document.getElementById('wattage-input');
    const wattage = parseInt(wattageInput.value, 10);

    if (isNaN(wattage) || wattage < 1 || wattage > 1000) {
        alert('Please enter a valid wattage between 1 and 1000.');
        return;
    }

    votes[wattage] = (votes[wattage] || 0) + 1;

    wattageInput.value = '';
    updateResults();
}

function updateResults() {
    const resultsTable = document.getElementById('results-table');
    resultsTable.innerHTML = '';

    Object.entries(votes)
        .sort(([, a], [, b]) => b - a)
        .forEach(([wattage, voteCount]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-4 py-3 border-b border-gray-200">${wattage}W</td>
                <td class="px-4 py-3 border-b border-gray-200">${voteCount}</td>
            `;
            resultsTable.appendChild(row);
        });
}

updateResults();
