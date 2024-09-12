console.log("test");

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  //const wrangledData = data.data[0];
  //return wrangledData;
}

getUpgrades();
