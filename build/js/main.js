const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}




document.addEventListener('DOMContentLoaded', initApp);

const date = () => {

    let date_main = new Date("Nov, 04, 2022 , 10:50:58");
    // console.log(date_main);
    let current_date = new Date();
    // console.log(current_date);
    let date_day = parseInt((date_main - current_date) / 1000 / 60 / 60 / 24);
    let date_hou = parseInt((date_main - current_date) / 1000 / 60 / 60) % 24;
    let date_min = parseInt((date_main - current_date) / 1000 / 60) % 60;
    let date_sec = parseInt((date_main - current_date) / 1000) % 60;
    // console.log(date_sec);
    document.getElementsByClassName('time')[0].innerHTML = `
             <span>${date_day} <br>
             <h6>DAYS</h6>
             </span>
             <h5>:</h5>
             <span>${date_hou} <br>
                 <h6>HOURS</h6>
             </span>
             <h5>:</h5>
             <span>${date_min} <br>
                 <h6>MINUTES</h6>
             </span>
             <h5>:</h5>
             <span>${date_sec} <br>
                 <h6>SECONDS</h6>
             </span>
    `
}

setInterval(date, 1000);







fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin%2Ccardano%2Ctether&vs_currencies=usd&include_24hr_change=true')
    .then(res => res.json())
    .then(json => {

        const container = document.querySelector('.coin_container');
        const coins = Object.getOwnPropertyNames(json);

        for (let coin of coins) {

            const coinInfo = json[`${coin}`];
            const price = coinInfo.usd;
            const change = coinInfo.usd_24h_change.toFixed(5);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="img/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
            `;

            

        }

    });


