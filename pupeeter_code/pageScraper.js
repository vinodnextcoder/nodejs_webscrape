const axios = require('axios');
const scraperObject = {
    url: 'https://www.msamb.com/ApmcDetail/APMCPriceInformation',
    async scraper(browser){
        let page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 })
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		// await page.waitForSelector('.page_inner');
        await page.waitForTimeout(5000);
        // await page.waitForSelector('.lblLanguage');
        const element = await page.$('#lblLanguage');
        await element.type('E');
        await page.waitForTimeout(2000);
        const cookies = await page.cookies();

        // Print the cookies
        // console.log(cookies);
        const config = {
            headers: {
                'Content-Type':'application/json',
                'Referer':'https://www.msamb.com/ApmcDetail/APMCPriceInformation',
                'Accept-Language':'en-US,en;q=0.9',
              'Cookie': 'kcsremuser=Language=E&username=Administrator&password=&userid=0&fullname=&rememberme=&roleid=0'
            }
          };
          console.log(config)
        const response = await axios.get('https://www.msamb.com/ApmcDetail/DataGridBind?commodityCode=null&apmcCode=079', config);
    // Handle the response
    console.log(response.data);
    }
}

module.exports = scraperObject;

let districtList = [
  {
      "DistrictCode": "16",
      "DistrictNameE": "AHMADNAGAR"
  },
  {
      "DistrictCode": "32",
      "DistrictNameE": "AKOLA"
  },
  {
      "DistrictCode": "33",
      "DistrictNameE": "AMARAVATHI"
  },
  {
      "DistrictCode": "25",
      "DistrictNameE": "AURANGABAD"
  },
  {
      "DistrictCode": "26",
      "DistrictNameE": "BEED "
  },
  {
      "DistrictCode": "36",
      "DistrictNameE": "BHANDARA"
  },
  {
      "DistrictCode": "34",
      "DistrictNameE": "BULDHANA"
  },
  {
      "DistrictCode": "37",
      "DistrictNameE": "CHANDRAPUR"
  },
  {
      "DistrictCode": "30",
      "DistrictNameE": "DHARASHIV"
  },
  {
      "DistrictCode": "17",
      "DistrictNameE": "DHULE"
  },
  {
      "DistrictCode": "38",
      "DistrictNameE": "GADCHIROLI"
  },
  {
      "DistrictCode": "44",
      "DistrictNameE": "GONDIYA"
  },
  {
      "DistrictCode": "43",
      "DistrictNameE": "HINGOLI"
  },
  {
      "DistrictCode": "18",
      "DistrictNameE": "JALGAON"
  },
  {
      "DistrictCode": "27",
      "DistrictNameE": "JALNA "
  },
  {
      "DistrictCode": "20",
      "DistrictNameE": "KOLHAPUR"
  },
  {
      "DistrictCode": "28",
      "DistrictNameE": "LATUR"
  },
  {
      "DistrictCode": "11",
      "DistrictNameE": "MUMBAI"
  },
  {
      "DistrictCode": "39",
      "DistrictNameE": "NAGPUR"
  },
  {
      "DistrictCode": "29",
      "DistrictNameE": "NANDED"
  },
  {
      "DistrictCode": "41",
      "DistrictNameE": "NANDURBAR"
  },
  {
      "DistrictCode": "19",
      "DistrictNameE": "NASIK"
  },
  {
      "DistrictCode": "45",
      "DistrictNameE": "PALGHAR"
  },
  {
      "DistrictCode": "31",
      "DistrictNameE": "PARBHANI"
  },
  {
      "DistrictCode": "21",
      "DistrictNameE": "PUNE"
  },
  {
      "DistrictCode": "12",
      "DistrictNameE": "RAIGAD"
  },
  {
      "DistrictCode": "13",
      "DistrictNameE": "RATNAGIRI"
  },
  {
      "DistrictCode": "22",
      "DistrictNameE": "SANGLI"
  },
  {
      "DistrictCode": "23",
      "DistrictNameE": "SATARA"
  },
  {
      "DistrictCode": "24",
      "DistrictNameE": "SOLAPUR"
  },
  {
      "DistrictCode": "14",
      "DistrictNameE": "THANE"
  },
  {
      "DistrictCode": "40",
      "DistrictNameE": "WARDHA"
  },
  {
      "DistrictCode": "42",
      "DistrictNameE": "WASIM"
  },
  {
      "DistrictCode": "35",
      "DistrictNameE": "YEWATMAL"
  }
];

const commodity =[
  {
      "CommodityCode": "10023",
      "CommodityNameE": "ALMOND"
  },
  {
      "CommodityCode": "08004",
      "CommodityNameE": "AMBAT CHUKA"
  },
  {
      "CommodityCode": "08006",
      "CommodityNameE": "AMLA"
  },
  {
      "CommodityCode": "07026",
      "CommodityNameE": "APPLE"
  },
  {
      "CommodityCode": "08005",
      "CommodityNameE": "ARVI"
  },
  {
      "CommodityCode": "18008",
      "CommodityNameE": "AVACADO"
  },
  {
      "CommodityCode": "07042",
      "CommodityNameE": "AWALA"
  },
  {
      "CommodityCode": "18009",
      "CommodityNameE": "BABY CORN"
  },
  {
      "CommodityCode": "02002",
      "CommodityNameE": "BAJRI"
  },
  {
      "CommodityCode": "07014",
      "CommodityNameE": "BANANA"
  },
  {
      "CommodityCode": "08040",
      "CommodityNameE": "BANANA(RAW)"
  },
  {
      "CommodityCode": "03002",
      "CommodityNameE": "BATBATI"
  },
  {
      "CommodityCode": "10025",
      "CommodityNameE": "BEDANA"
  },
  {
      "CommodityCode": "08008",
      "CommodityNameE": "BEET ROOT"
  },
  {
      "CommodityCode": "10017",
      "CommodityNameE": "BETELNUTS"
  },
  {
      "CommodityCode": "08039",
      "CommodityNameE": "BITTER GOURD"
  },
  {
      "CommodityCode": "03022",
      "CommodityNameE": "BLACK GRAM (Udid)"
  },
  {
      "CommodityCode": "10020",
      "CommodityNameE": "BLCK PAPER"
  },
  {
      "CommodityCode": "08012",
      "CommodityNameE": "BOTTLE GOURD"
  },
  {
      "CommodityCode": "08078",
      "CommodityNameE": "BRINJAL"
  },
  {
      "CommodityCode": "18004",
      "CommodityNameE": "BROCCOLI"
  },
  {
      "CommodityCode": "09013",
      "CommodityNameE": "BUFFALO"
  },
  {
      "CommodityCode": "09002",
      "CommodityNameE": "BULLACK"
  },
  {
      "CommodityCode": "08041",
      "CommodityNameE": "CABBAGE"
  },
  {
      "CommodityCode": "08049",
      "CommodityNameE": "CAPSICUM"
  },
  {
      "CommodityCode": "18002",
      "CommodityNameE": "CAPSICUM (YELLOW)"
  },
  {
      "CommodityCode": "10018",
      "CommodityNameE": "CARDAMOM"
  },
  {
      "CommodityCode": "08022",
      "CommodityNameE": "CARRET"
  },
  {
      "CommodityCode": "10010",
      "CommodityNameE": "CASHEWNUTS"
  },
  {
      "CommodityCode": "04005",
      "CommodityNameE": "CASTOR SEED"
  },
  {
      "CommodityCode": "08016",
      "CommodityNameE": "CHAVLI (PALA)"
  },
  {
      "CommodityCode": "08015",
      "CommodityNameE": "CHAVLI (SHENGA )"
  },
  {
      "CommodityCode": "07005",
      "CommodityNameE": "CHERI"
  },
  {
      "CommodityCode": "07006",
      "CommodityNameE": "CHIKOO"
  },
  {
      "CommodityCode": "10014",
      "CommodityNameE": "CHILLIES(RED)"
  },
  {
      "CommodityCode": "18006",
      "CommodityNameE": "CHINA CABBAGE"
  },
  {
      "CommodityCode": "18015",
      "CommodityNameE": "CHINESE GARLIC"
  },
  {
      "CommodityCode": "02008",
      "CommodityNameE": "CHINO"
  },
  {
      "CommodityCode": "08017",
      "CommodityNameE": "CHIV CHIV"
  },
  {
      "CommodityCode": "10022",
      "CommodityNameE": "CINAMON (DALCHINI)"
  },
  {
      "CommodityCode": "08024",
      "CommodityNameE": "CLUSTER BEAN"
  },
  {
      "CommodityCode": "04013",
      "CommodityNameE": "COCONUT"
  },
  {
      "CommodityCode": "08044",
      "CommodityNameE": "CORIANDAR "
  },
  {
      "CommodityCode": "10005",
      "CommodityNameE": "CORIANDER (DRY)"
  },
  {
      "CommodityCode": "01001",
      "CommodityNameE": "COTTON"
  },
  {
      "CommodityCode": "09005",
      "CommodityNameE": "COW"
  },
  {
      "CommodityCode": "03003",
      "CommodityNameE": "COWPEA"
  },
  {
      "CommodityCode": "08033",
      "CommodityNameE": "CUCUMBER"
  },
  {
      "CommodityCode": "10009",
      "CommodityNameE": "CUMMIN"
  },
  {
      "CommodityCode": "08031",
      "CommodityNameE": "CURRY LEAVES"
  },
  {
      "CommodityCode": "07028",
      "CommodityNameE": "CUSTARD APPLE"
  },
  {
      "CommodityCode": "08019",
      "CommodityNameE": "DHEMSE"
  },
  {
      "CommodityCode": "08069",
      "CommodityNameE": "ELEPHANT ROOT"
  },
  {
      "CommodityCode": "08081",
      "CommodityNameE": "FARSHI"
  },
  {
      "CommodityCode": "04002",
      "CommodityNameE": "FENNEL"
  },
  {
      "CommodityCode": "10012",
      "CommodityNameE": "FENUGREEK"
  },
  {
      "CommodityCode": "07003",
      "CommodityNameE": "FIG"
  },
  {
      "CommodityCode": "10027",
      "CommodityNameE": "FIG (DRY)"
  },
  {
      "CommodityCode": "08021",
      "CommodityNameE": "FLOWER"
  },
  {
      "CommodityCode": "08020",
      "CommodityNameE": "FRENCH BEAN"
  },
  {
      "CommodityCode": "08045",
      "CommodityNameE": "GARLIC"
  },
  {
      "CommodityCode": "10011",
      "CommodityNameE": "GARLIC"
  },
  {
      "CommodityCode": "09016",
      "CommodityNameE": "GHEE"
  },
  {
      "CommodityCode": "08025",
      "CommodityNameE": "GHEVDA"
  },
  {
      "CommodityCode": "03005",
      "CommodityNameE": "GHEVDA SEED"
  },
  {
      "CommodityCode": "08026",
      "CommodityNameE": "GHOSALI(BHAJI)"
  },
  {
      "CommodityCode": "10001",
      "CommodityNameE": "GINGER (DRY)"
  },
  {
      "CommodityCode": "08002",
      "CommodityNameE": "GINGER (FRESH)"
  },
  {
      "CommodityCode": "09015",
      "CommodityNameE": "GOATS"
  },
  {
      "CommodityCode": "08013",
      "CommodityNameE": "GOOSEFOOT"
  },
  {
      "CommodityCode": "04016",
      "CommodityNameE": "GR.NUT KERNELS"
  },
  {
      "CommodityCode": "03006",
      "CommodityNameE": "GRAM"
  },
  {
      "CommodityCode": "07008",
      "CommodityNameE": "GRAPES"
  },
  {
      "CommodityCode": "10013",
      "CommodityNameE": "GREEN CHILI"
  },
  {
      "CommodityCode": "03016",
      "CommodityNameE": "GREEN GRAM (Mug)"
  },
  {
      "CommodityCode": "03025",
      "CommodityNameE": "GREEN PEAS (DRY)"
  },
  {
      "CommodityCode": "08074",
      "CommodityNameE": "GREEN-PEAS"
  },
  {
      "CommodityCode": "04003",
      "CommodityNameE": "GROUND NUT PODS (DRY)"
  },
  {
      "CommodityCode": "08085",
      "CommodityNameE": "GROUNDNUT PODS (WET)"
  },
  {
      "CommodityCode": "07020",
      "CommodityNameE": "GUAVA"
  },
  {
      "CommodityCode": "08003",
      "CommodityNameE": "HEMP"
  },
  {
      "CommodityCode": "09009",
      "CommodityNameE": "HENS/COCK"
  },
  {
      "CommodityCode": "03010",
      "CommodityNameE": "HORSE GRAM"
  },
  {
      "CommodityCode": "18003",
      "CommodityNameE": "ICEBURG"
  },
  {
      "CommodityCode": "03024",
      "CommodityNameE": "INDIAN BEAN"
  },
  {
      "CommodityCode": "07022",
      "CommodityNameE": "JACK FRUIT"
  },
  {
      "CommodityCode": "08059",
      "CommodityNameE": "JACK FRUIT(RAW)"
  },
  {
      "CommodityCode": "06001",
      "CommodityNameE": "JAGGERY"
  },
  {
      "CommodityCode": "07010",
      "CommodityNameE": "JAMBHUL"
  },
  {
      "CommodityCode": "11003",
      "CommodityNameE": "KADBA"
  },
  {
      "CommodityCode": "09020",
      "CommodityNameE": "KALVAD"
  },
  {
      "CommodityCode": "08036",
      "CommodityNameE": "KANDA PAT"
  },
  {
      "CommodityCode": "08038",
      "CommodityNameE": "KARDAI"
  },
  {
      "CommodityCode": "07044",
      "CommodityNameE": "KHARBUJ / Melon"
  },
  {
      "CommodityCode": "08009",
      "CommodityNameE": "LADIES FINGER"
  },
  {
      "CommodityCode": "07015",
      "CommodityNameE": "LEMON"
  },
  {
      "CommodityCode": "03012",
      "CommodityNameE": "LENTIL"
  },
  {
      "CommodityCode": "04007",
      "CommodityNameE": "LINSEED"
  },
  {
      "CommodityCode": "07039",
      "CommodityNameE": "LITCHI"
  },
  {
      "CommodityCode": "02015",
      "CommodityNameE": "MAIZE"
  },
  {
      "CommodityCode": "08046",
      "CommodityNameE": "MAIZE(CORN.)"
  },
  {
      "CommodityCode": "09018",
      "CommodityNameE": "MALE GOAT"
  },
  {
      "CommodityCode": "09017",
      "CommodityNameE": "MALE LAMB"
  },
  {
      "CommodityCode": "07001",
      "CommodityNameE": "MANGO"
  },
  {
      "CommodityCode": "08032",
      "CommodityNameE": "MANGO(RAW)"
  },
  {
      "CommodityCode": "03014",
      "CommodityNameE": "MATKI"
  },
  {
      "CommodityCode": "08048",
      "CommodityNameE": "METHI (BHAJI)"
  },
  {
      "CommodityCode": "08060",
      "CommodityNameE": "MINT"
  },
  {
      "CommodityCode": "07016",
      "CommodityNameE": "MOSAMBI"
  },
  {
      "CommodityCode": "10015",
      "CommodityNameE": "MUSTARD"
  },
  {
      "CommodityCode": "02016",
      "CommodityNameE": "NACHANI/ NAGALI"
  },
  {
      "CommodityCode": "07033",
      "CommodityNameE": "NASPATTI "
  },
  {
      "CommodityCode": "04012",
      "CommodityNameE": "NEEM-SEED"
  },
  {
      "CommodityCode": "08035",
      "CommodityNameE": "ONION"
  },
  {
      "CommodityCode": "07027",
      "CommodityNameE": "ORANGE"
  },
  {
      "CommodityCode": "02007",
      "CommodityNameE": "PADDY-UNHUSKED"
  },
  {
      "CommodityCode": "07018",
      "CommodityNameE": "PAPAI"
  },
  {
      "CommodityCode": "08056",
      "CommodityNameE": "PAPPAYA (BHAJI)"
  },
  {
      "CommodityCode": "08057",
      "CommodityNameE": "PARWAR"
  },
  {
      "CommodityCode": "03018",
      "CommodityNameE": "PAVTTA"
  },
  {
      "CommodityCode": "08058",
      "CommodityNameE": "PAVTTA"
  },
  {
      "CommodityCode": "07019",
      "CommodityNameE": "PEER"
  },
  {
      "CommodityCode": "08084",
      "CommodityNameE": "PICKDORE"
  },
  {
      "CommodityCode": "03020",
      "CommodityNameE": "PIGEON PEA (Tur)"
  },
  {
      "CommodityCode": "07002",
      "CommodityNameE": "PINEAPPLE"
  },
  {
      "CommodityCode": "10026",
      "CommodityNameE": "PISTA"
  },
  {
      "CommodityCode": "07023",
      "CommodityNameE": "PITCH"
  },
  {
      "CommodityCode": "07024",
      "CommodityNameE": "PLUM"
  },
  {
      "CommodityCode": "07007",
      "CommodityNameE": "POMEGRANET"
  },
  {
      "CommodityCode": "08007",
      "CommodityNameE": "POTATO"
  },
  {
      "CommodityCode": "08043",
      "CommodityNameE": "PUMPKIN"
  },
  {
      "CommodityCode": "08051",
      "CommodityNameE": "RADDISH"
  },
  {
      "CommodityCode": "08061",
      "CommodityNameE": "RAI MOHRI BHAJI"
  },
  {
      "CommodityCode": "08062",
      "CommodityNameE": "RAJGIRA"
  },
  {
      "CommodityCode": "02023",
      "CommodityNameE": "RICE(PADDY-HUS)"
  },
  {
      "CommodityCode": "08068",
      "CommodityNameE": "RIDGE GOURD"
  },
  {
      "CommodityCode": "02006",
      "CommodityNameE": "SABUDANA"
  },
  {
      "CommodityCode": "04008",
      "CommodityNameE": "SAFFLOWER"
  },
  {
      "CommodityCode": "08064",
      "CommodityNameE": "SALAD"
  },
  {
      "CommodityCode": "02021",
      "CommodityNameE": "SARSAV"
  },
  {
      "CommodityCode": "04019",
      "CommodityNameE": "SESAMUM"
  },
  {
      "CommodityCode": "07047",
      "CommodityNameE": "SHAHALE "
  },
  {
      "CommodityCode": "09012",
      "CommodityNameE": "SHEEP"
  },
  {
      "CommodityCode": "08066",
      "CommodityNameE": "SHEPU"
  },
  {
      "CommodityCode": "08067",
      "CommodityNameE": "SHEVGA"
  },
  {
      "CommodityCode": "08072",
      "CommodityNameE": "SMALL GOURD"
  },
  {
      "CommodityCode": "08054",
      "CommodityNameE": "SNAKE GOURD"
  },
  {
      "CommodityCode": "02011",
      "CommodityNameE": "SORGUM(JAWAR)"
  },
  {
      "CommodityCode": "04017",
      "CommodityNameE": "SOYABEAN"
  },
  {
      "CommodityCode": "03017",
      "CommodityNameE": "SPILT GERRN GRAM"
  },
  {
      "CommodityCode": "03021",
      "CommodityNameE": "SPILT PIGEON PEA"
  },
  {
      "CommodityCode": "08055",
      "CommodityNameE": "SPINACH"
  },
  {
      "CommodityCode": "03023",
      "CommodityNameE": "SPLIT BLACK GRAM"
  },
  {
      "CommodityCode": "03007",
      "CommodityNameE": "SPLIT GRAM"
  },
  {
      "CommodityCode": "03013",
      "CommodityNameE": "SPLIT LENTIL"
  },
  {
      "CommodityCode": "08011",
      "CommodityNameE": "SQUASH GOURD"
  },
  {
      "CommodityCode": "06002",
      "CommodityNameE": "SUGAR"
  },
  {
      "CommodityCode": "04018",
      "CommodityNameE": "SUNFLOWER"
  },
  {
      "CommodityCode": "08063",
      "CommodityNameE": "SWEET POTATO"
  },
  {
      "CommodityCode": "01003",
      "CommodityNameE": "TAG"
  },
  {
      "CommodityCode": "10003",
      "CommodityNameE": "TAMARIND"
  },
  {
      "CommodityCode": "10004",
      "CommodityNameE": "TAMARIND SEED"
  },
  {
      "CommodityCode": "04014",
      "CommodityNameE": "THYMOL/LOVAGE"
  },
  {
      "CommodityCode": "08071",
      "CommodityNameE": "TOMATO"
  },
  {
      "CommodityCode": "10006",
      "CommodityNameE": "TURMERIC"
  },
  {
      "CommodityCode": "08075",
      "CommodityNameE": "WAL BHAJI"
  },
  {
      "CommodityCode": "08076",
      "CommodityNameE": "WAL PAPDI"
  },
  {
      "CommodityCode": "08077",
      "CommodityNameE": "WALVAD"
  },
  {
      "CommodityCode": "07011",
      "CommodityNameE": "WATER MELON"
  },
  {
      "CommodityCode": "02009",
      "CommodityNameE": "WHEAT(HUSKED)"
  },
  {
      "CommodityCode": "02012",
      "CommodityNameE": "WHEAT(UNHUSKED)"
  },
  {
      "CommodityCode": "07013",
      "CommodityNameE": "WOOD APPLE"
  },
  {
      "CommodityCode": "18010",
      "CommodityNameE": "ZUCCHINI"
  }
]

// https://www.msamb.com/ApmcDetail/GetArrivalPriceInfoByDistrictWise?commodityCode=08005&apmcCode=null
// https://www.msamb.com/ApmcDetail/GetArrivalPriceInfoByDistrictWise?commodityCode=10023&apmcCode=null