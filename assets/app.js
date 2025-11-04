const search = document.getElementById('search');
const searchKey = document.createElement('input');
const mainNewsValue = document.querySelectorAll('h1');
const button = document.createElement('button');
const buttonSearch = document.getElementById('button-search');
const buttonHome = document.getElementById('button-home');
const buttonTc = document.getElementById('button-tc');
const buttonAbout = document.getElementById('button-about');




button.textContent = 'Search';
button.classList.add = 'search-btn'

searchKey.setAttribute('type', 'text');
searchKey.setAttribute('placeholder', 'Search...');

search.addEventListener('click', () => {
    search.appendChild(searchKey);

    searchKey.focus();
    search.appendChild(button);
});

buttonSearch.addEventListener('click', () => {
    search.appendChild(searchKey);

    searchKey.focus();
    search.appendChild(button);
});

function searchNews() {


    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let searchText = searchKey.value.trim().toLowerCase();

            // Check if any "news" value matches
            const found = data.some(item => item.news.toLowerCase().includes(searchText)); // ???????????????

            const matchedItem = data.find(item =>
                item.news.toLowerCase().includes(searchText)
            );

            if (searchText === '') {
                alert("⚠️ Please enter some text!");
                return;
            }


            if (found) {
                
                window.location.href = `https://news.inbondz.com/news/${matchedItem.news}`;

            }
            else {
                alert("❌ News Not Found.");
            }
        })



};


button.addEventListener('click', () => {


    searchNews();
});


searchKey.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchNews();
    }
});


// for tabs ------------------------------------------------------------------>
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => {
            t.classList.remove('active')
        });
        tab.classList.add('active');


    });


});

 buttonAbout.addEventListener('click' , ()=>{
    window.location.href = 'about.html'
 });
 buttonHome.addEventListener('click' , ()=>{
    window.location.href = 'index.html'
 });
