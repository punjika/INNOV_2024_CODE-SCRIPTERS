document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'f0f38d01abc14a7e89f2673072be7905'; 
    const newsContainer1 = document.getElementById('news-container-1');
    const newsContainer2 = document.getElementById('news-container-2');

    const topic1 = 'fitness routine'; 
    const topic2 = 'workout '; 
    const pageSize = 7; 

    fetch(`https://newsapi.org/v2/everything?q=${topic1}&pageSize=${pageSize}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                displayNews(data.articles, newsContainer1);
            } else {
                console.error('Error fetching technology news:', data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching technology news:', error);
        });

    fetch(`https://newsapi.org/v2/everything?q=${topic2}&pageSize=${pageSize}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                displayNews(data.articles, newsContainer2);
            } else {
                console.error('Error fetching sports news:', data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching sports news:', error);
        });

    function displayNews(articles, container) {
        container.innerHTML = articles.map(article => {
            const publishedDate = new Date(article.publishedAt);
            const formattedDate = publishedDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' });

            return `
                <div class="news-item" data-aos="slide-left">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <p class="published-date">Published on: ${formattedDate}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `;
        }).join('');
    }
});