const surveyData = [
    { s_no: 1, name: "M. Siva Nagalakshmi", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 2, name: "Sk. Shafi", owned: "Yes", w2: "No", w3: "Yes", w4: "No" },
    { s_no: 3, name: "G. Vijaya Bharathi", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 4, name: "G. Uma", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 5, name: "B. Srihari", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 6, name: "K. Lakshmi Narayana", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 7, name: "P. Sumanth", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 8, name: "Sk. Chamundeswari", owned: "Yes", w2: "No", w3: "Yes", w4: "No" },
    { s_no: 9, name: "Sk. Safrool", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 10, name: "Ch. Swarnalatha", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 11, name: "Sk. Mahamad Basha", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 12, name: "Y. Syamala", owned: "Yes", w2: "No", w3: "No", w4: "Yes" },
    { s_no: 13, name: "K. Harsha", owned: "Yes", w2: "Yes", w3: "Yes", w4: "No" },
    { s_no: 14, name: "G. Mahendra Reddy", owned: "Yes", w2: "Yes", w3: "Yes", w4: "Yes" },
    { s_no: 15, name: "Sk. Sameera", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 16, name: "H. Jagadeesh Kumar", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 17, name: "M. Venkateshwarlu", owned: "Yes", w2: "No", w3: "Yes", w4: "No" },
    { s_no: 18, name: "M. Vinay Kumar Yadav", owned: "Yes", w2: "Yes", w3: "Yes", w4: "No" },
    { s_no: 19, name: "M. Muni Swami Naidu", owned: "Yes", w2: "Yes", w3: "No", w4: "Yes" },
    { s_no: 20, name: "A. Hari", owned: "No", w2: "No", w3: "No", w4: "No" },
    // Additional entries
    { s_no: 21, name: "E. Suresh Kumar", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 22, name: "M. Venkateswarulu", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 23, name: "G. Yedukonadalu", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 24, name: "B. Kondaiah", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 25, name: "T. Pothuraju", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 26, name: "A. Venkatesh", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 27, name: "G. Venkata Teja", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 28, name: "M. Muniraja", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 29, name: "M. Vinay Kumar", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 30, name: "P. Ramesh", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 31, name: "Sk. Mastan", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 32, name: "G. Dhana Lakshmi", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 33, name: "Ch. Babu Rao", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 34, name: "G. Aruna", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 35, name: "M. Nagaraju", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 36, name: "K. Rajesh", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 37, name: "V. Lakshmi", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 38, name: "M. Lakshmi Narayana", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 39, name: "Ch. Kiran Kumar", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 40, name: "P. Rajani", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 41, name: "T. Lakshmi Devi", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 42, name: "G. Eswaramma", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 43, name: "B. Dhanunjaya", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 44, name: "K. Bhaskar", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 45, name: "A. Sujatha", owned: "No", w2: "No", w3: "No", w4: "No" },
    { s_no: 46, name: "M. Sudhakar", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 47, name: "G. Sudheer Kumar", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 48, name: "M. Prasad", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 49, name: "V. Pradeep", owned: "Yes", w2: "Yes", w3: "No", w4: "No" },
    { s_no: 50, name: "R. Lakshman", owned: "Yes", w2: "Yes", w3: "No", w4: "No" }
];

// Populate Table
window.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#surveyTable tbody');
    surveyData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.s_no}</td>
            <td>${row.name}</td>
            <td>${row.owned}</td>
            <td>${row.w2}</td>
            <td>${row.w3}</td>
            <td>${row.w4}</td>
        `;
        tbody.appendChild(tr);
    });
});

function calculateOwnership() {
    const total = surveyData.length;
    const owners = surveyData.filter(row => row.owned === "Yes").length;
    const nonOwners = total - owners;
    const ownersPercent = ((owners / total) * 100).toFixed(1);
    const nonOwnersPercent = ((nonOwners / total) * 100).toFixed(1);

    document.getElementById('ownershipResults').innerHTML = `
        <span>Total Participants: ${total}</span><br>
        <span>Vehicle Owners: ${owners} (${ownersPercent}%)</span><br>
        <span>Non-Owners: ${nonOwners} (${nonOwnersPercent}%)</span>
    `;
}