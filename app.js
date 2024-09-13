console.log("test");

let cookieCount = 0;
let cookiesPerSecond = 0;
const cookieCountContainer = document.querySelector("#cookies-count");
const cookiesPerSecondContainer = document.querySelector("#cookies-per-second");
const upgradeContainer = document.querySelector(".upgrades-container");
const myCookieButton = document.querySelector("#cookie-button");

let shopUpgrades = [];

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  shopUpgrades = data;
  console.log(data);
  renderShop();
}

getUpgrades();

function renderShop() {
  shopUpgrades.forEach((item) => {
    let makeDiv = document.createElement("div");
    let makeButton = document.createElement("button");
    makeButton.textContent = "BUY";
    makeButton.id = `item: ${item.id}`;
    makeDiv.className = "upgradesDiv";
    makeDiv.textContent = `${item.name} cost: ${item.cost} increase: ${item.increase}`;
    upgradeContainer.appendChild(makeDiv);
    upgradeContainer.appendChild(makeButton);
  });
}

function handleCounting() {
  cookieCount = cookieCount + 1;
  console.log(cookieCount);
  cookieCountContainer.textContent = `Cookies Count: ${cookieCount}`;
}
myCookieButton.addEventListener("click", handleCounting);

setInterval(function () {
  //if (no shopUpgrades ; cookiesPerSecond increases by  1 )
  // if (shop upgrade 1 owned; then cookiesPerSecond increase by this much )
  // if (shop2 owned, CPS increase again)

  cookieCount + cookiesPerSecond;
}, 1000);

//value of CPS changes when you buy something in the shop
//the value of cookie count increases by the value of CPS every second
//
