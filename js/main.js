let data = {};
let currentPage = 1;

const fetchData = () => {
    return fetch('/info.json')
        .then(response => response.json());
};

const updatePageContent = () => {
    const totalPages = data.pages;
    const pagesContent = data['pages-content'];
    const title = data.title;
    const scrollingText = data['scrolling-text'];
    const secondsPerPage = data['seconds-per-page'];
    
    const titleElement = document.getElementById('title');
    const scrollingTextElement = document.getElementById('scrolling-text');
    const timeElement = document.getElementById('time');
    const infoElement = document.getElementById('info');

    titleElement.innerText = title;
    scrollingTextElement.innerText = scrollingText;
    timeElement.innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    infoElement.innerHTML = '';

    pagesContent[currentPage].forEach((rowText) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        const rowTextElement = document.createElement('p');
        rowTextElement.className = 'row-text';
        rowTextElement.innerHTML = rowText;
        rowElement.appendChild(rowTextElement);
        infoElement.appendChild(rowElement);
    });
};

const updatePage = () => {
    updatePageContent();
    currentPage = currentPage % data.pages + 1;
};

const initializePage = () => {
    fetchData()
        .then(responseData => {
            data = responseData;
            updatePage();
            setInterval(updatePage, data['seconds-per-page'] * 1000);
        })
        .catch(error => console.error('Error fetching data:', error));
};

initializePage();
