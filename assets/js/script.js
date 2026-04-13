
const NAMESPACE = 'catusb37_site'; 

// перегляд сторінки
function trackViews(pageName) {
    const key = `views_${pageName}`;
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${key}`)
        .then(res => res.json())
        .then(data => {
            const el = document.getElementById('view-count');
            if (el) el.innerText = `Переглядів: ${data.value}`;
        })
        .catch(() => console.log("Error"));
}

// скаячування
function trackDownload(fileName) {
    const key = `dl_${fileName}`;
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${key}`)
        .then(res => res.json())
        .then(data => {
            const el = document.getElementById(`count-${fileName}`);
            if (el) el.innerText = `Скачувань: ${data.value}`;
        })
        .catch(() => console.log("Помилка лічильника скачувань"));
}

// відображеня кількості скачувань
function showDownloadCounts(fileName) {
    const key = `dl_${fileName}`;
    fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${key}`)
        .then(res => res.json())
        .then(data => {
            const el = document.getElementById(`count-${fileName}`);
            if (el) el.innerText = `Скачувань: ${data.value || 0}`;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const pagePath = window.location.pathname.split("/").pop() || 'index.html';
    const pageName = pagePath.replace('.html', '');

    trackViews(pageName);

    if (document.getElementById('count-m5stick')) showDownloadCounts('m5stick');
    if (document.getElementById('count-winlocker')) showDownloadCounts('winlocker');
});