{
  let json = [
    { name: "hari", id: 1, age: 20 },
    { name: "deep", id: 2, age: 18 },
    { name: "vasu", id: 3, age: 19 },
    { name: "vihar", id: 4, age: 17 },
    { name: "ajay", id: 5, age: 18 },
    { name: "simran", id: 6, age: 19 },
    { name: "kidi", id: 7, age: 17 },
    { name: "visva", id: 8, age: 16 },
    { name: "kali", id: 9, age: 41 },
    { name: "meet", id: 10, age: 3 },
    { name: "tushar", id: 11, age: 4 },
    { name: "anni", id: 12, age: 15 },
  ];

  console.log(json[11]);

  fetch("http://localhost:3000/json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("hk1").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });
}
