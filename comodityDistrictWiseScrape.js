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

  const commodityList = [
    {
      CommodityCode: "10023",
      CommodityNameE: "ALMOND",
    },
    {
      CommodityCode: "08004",
      CommodityNameE: "AMBAT CHUKA",
    },
    {
      CommodityCode: "08006",
      CommodityNameE: "AMLA",
    },
    {
      CommodityCode: "07026",
      CommodityNameE: "APPLE",
    },
    {
      CommodityCode: "08005",
      CommodityNameE: "ARVI",
    },
  ];

  for (const commodity of commodityList) {
    
    const url = `https://www.msamb.com/ApmcDetail/GetArrivalPriceInfoByDistrictWise?commodityCode=${commodity.CommodityCode}&apmcCode=null`;

    try {
      const response = await axios.get(url, config);
      const rows = response.data.split("<tr>");
      const name = commodity.CommodityNameE;
      const headersData = "Date, Varity, District, Unit, Quantity, Lrate, Hrate, Mrate\n";
      await fs.appendFile(`${name}.csv`, headersData);

      let str = "";

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];

        // Define the regex pattern to extract the desired data
        const pattern = /<td.*?>([\s\S]*?)<\/td>/g;

        // Extract the data using regex pattern
        const matches = Array.from(row.matchAll(pattern), (match) =>
          match[1].trim()
        );

        if (matches.length === 3) {
          matches.unshift(" ");
          matches.unshift(" ");
        }

        const commaSeparatedString = matches.join(", ");
        str += commaSeparatedString + "\n";
      }

      await fs.appendFile(`${name}.csv`, str + "\n");
      console.log(`Data appended to ${name}.csv`);

      // Delay before the next iteration
      await axios.delay(1000); // 1 second delay
    } catch (error) {
      console.error(`Error scraping ${commodity.CommodityNameE}: ${error.message}`);
    }
  }
};

webScrape();
