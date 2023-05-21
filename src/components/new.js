const axios = require("axios");
async function ram(){
    const data = (await axios.get("https://raw.githubusercontent.com/mrtechnostart/Myspy_Backend/main/data.json")).data;
    console.log(data)
}
console.log(ram())