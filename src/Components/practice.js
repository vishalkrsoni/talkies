const axios = require("axios");

const fetchData = async () => {
  let data = await axios.get("https://jsonplaceholder.typicode.com/users");
  let response = await data;
  let finalData = response.data;
  let names = [],
    emails = [];
  for (let i = 0; i < 10; i++) {
    names.push(finalData[i].name);
    emails.push(finalData[i].email);
  }
  console.log(names, emails);
};

fetchData();
