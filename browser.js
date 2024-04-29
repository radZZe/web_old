d3.select('#addBrowser').on('click', function() {
    const browsers = [{"title":"Яндекс браузер","rate":7.47},{"title":"Firefox","rate":2.2}];
    checkPage(browsers);
});

function checkPage(browsers) {
    const table = d3.select('#browserTable');
    const tbody = table.select('tbody');

    let existingData = [];
    tbody.selectAll('tr').each(function(d, i) {
        existingData.push({ title: d3.select(this).select('td:nth-child(1)').text(), rate: d3.select(this).select('td:nth-child(2)').text() });
    });

    browsers = existingData.concat(browsers);

    const rows = tbody.selectAll('tr')
        .data(browsers)
        .enter()
        .append('tr')
        .each(function(d) {
            let row = d3.select(this);
            row.selectAll('td').remove();
            Object.keys(d).forEach(function(key) {
                row.append('td').text(d[key]);
            });
        });
}
