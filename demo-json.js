var fs = require("fs");
var array = [];
array = JSON.parse(fs.readFileSync("user.json", { encoding: "utf-8" }));
//todo : check username already exist or not
//if not then push to array else

array.push({ username: "username", password: "password", age: 14 });
fs.writeFileSync("user.json", JSON.stringify(array), "utf-8");

fs.writeFile("user.json", JSON.stringify(array), "utf-8", (err)=>{
  console.log(err)
});

console.log("registered");
ar = fs.readFileSync("user.json", { encoding: "utf-8" });
console.log(ar);
array = JSON.parse(ar);
array.forEach((item) => {
  if (item.username === "username" && item.password === "password") {
    console.log("logged in");
    return;
  }
});

function registerUser(usern, pas, callback) {
  callback({ "message": "succ" });
}


array.forEach((item) => {
  console.log(item);
});

array.map((item) => {
  item.age = item.age + 1;
  return item;
});

ar = array.filter((item) => {
  return item.age % 2 == 0;
});
console.log(ar);
