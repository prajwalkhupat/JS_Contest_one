/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let Arr2 = [
  { id: 10, name: "jay", age: "23", profession: "sales" },
  { id: 20, name: "pratik", age: "24", profession: "admin" },
  { id: 30, name: "kapil", age: "26", profession: "account" }
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((val) => {
    if (val.profession === "developer") {
      console.log(val.id, val.name, val.age, val.profession);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((value) => {
    if (value.profession === "developer") {
      console.log(value.id, value.name, value.age, value.profession);
    }
  });

}
function addData() {
  //Write your code here
  let value =
    { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(value);
  console.log(arr);
}


function removeAdmin() {
  //Write your code here
  let result = arr.filter((value) => {
    return value.profession != "admin"
  });
  console.log(result);
}

function concatenateArray() {
  //Write your code here
  let result = arr.concat(Arr2);
  console.log(result);
}