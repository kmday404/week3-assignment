console.log("test");

let cookieCount = 0;
cookieCountContainer = document.getElementById("cookies-count");
let cookiesPerSecond = 0;
cookiesPerSecondContainer = document.getElementById("cookies-per-second");

let shopUpgrades = [];

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  //const wrangledData = data[0];
  //return wrangledData;
  shopUpgrades.push(...data); //reddit and stackoverflow
}

getUpgrades();

const myCookieButton = document.getElementById("cookie-button");

function handleCounting() {
  cookieCount = cookieCount + 1;
  console.log(cookieCount);
  cookieCountContainer.textContent = `Cookies Count: ${cookieCount}`;
}
myCookieButton.addEventListener("click", handleCounting);

setInterval(function () {
  //if (no shop upgrades owned; )
  cookiesPerSecond = cookieCount + 1;
  // if (shop upgrade 1 owned; then cookiesPerSecond increase by this much )
  // if (shop2 owned, CPS increase again)
  updateCookieCount();
}, 1000);

function updateCookieCount(a, b) {
  return cookieCount + cookiesPerSecond;
}

console.log(updateCookieCount);
