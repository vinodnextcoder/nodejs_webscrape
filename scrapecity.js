const response = await axios.get(
    "https://www.msamb.com/ApmcDetail/GetApmcForArrivalPriceInfo?_=1689018402115",
    config
  );
  // console.log(response.data)

  
  for(let i=0;i<response.data.length;i++){
    // console.log(response.data[i])
    let tempdata = response.data[i];
    fs.appendFile('data.txt', JSON.stringify(tempdata) + '\n', (err) => {
      if (err) throw err;
      console.log('Data appended to file!');
    });
  }