const axios = require("axios");
const fs = require("fs").promises;

const webScrape = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Referer: "https://www.msamb.com/ApmcDetail/APMCPriceInformation",
      "Accept-Language": "en-US,en;q=0.9",
      Cookie:
        "kcsremuser=Language=E&username=Administrator&password=&userid=0&fullname=&rememberme=&roleid=0",
    },
  };

  const cityName = [
    { ApmcCode: "079", ApmcNameE: "ACHALPUR" },
    { ApmcCode: "007", ApmcNameE: "AHMEDNAGAR" },
    { ApmcCode: "047", ApmcNameE: "AKKOLKOT" }
  ];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < cityName.length; i++) {
    const city = cityName[i];
    const headersData = 'Commodity,Variety,Unit,Quantity,Lrate,Hrate,Modal\n';
    await fs.appendFile(`${city.ApmcNameE}.csv`, headersData);

    const url = `https://www.msamb.com/ApmcDetail/DataGridBind?commodityCode=null&apmcCode=${city.ApmcCode}`;
    const response = await axios.get(url, config);
    const data = response.data.split("<tr>");

    for (const ele of data) {
      const values = [];
      const regex = /<td.*?>(.*?)<\/td>/g;
      let str = "";

      let match;
      while ((match = regex.exec(ele)) !== null) {
        str += match[1].trim() + ",";
      }

      await fs.appendFile(`${city.ApmcNameE}.csv`, str + "\n");
    }

    console.log(`Data appended to file: ${city.ApmcNameE}.csv`);

    // Add a delay of 1 second (1000 milliseconds) between each API call
    if (i < cityName.length - 1) {
      await delay(3000);
    }
  }

  console.log("All requests completed.");
};

webScrape();
