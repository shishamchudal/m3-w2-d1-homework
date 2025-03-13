const { MongoClient } = require("mongodb");

// Create Instance of MongoClient for mongodb
const client = new MongoClient("mongodb://127.0.0.1:27017/nodemongo");

client
  .connect()
  .then(() => {
    var dbo = client.db("statsdb");

    // dbo.createCollection("uscensus").then(function () {
    //   console.log("Collection created");
    //   //Close the database connection
    //   client.close();
    // });
    var stats = [
      {
        city: "San Juan",
        zip: "00926",
        state: "PR",
        income: "34781",
        age: "44",
      },
      {
        city: "Corona",
        zip: "11368",
        state: "NY",
        income: "50797",
        age: "32",
      },
      {
        city: "Chicago",
        zip: "60629",
        state: "IL",
        income: "42019",
        age: "31",
      },
      {
        city: "El Paso",
        zip: "79936",
        state: "TX",
        income: "54692",
        age: "31",
      },
      {
        city: "Los Angeles",
        zip: "90011",
        state: "CA",
        income: "36954",
        age: "28",
      },
      {
        city: "Norwalk",
        zip: "90650",
        state: "CA",
        income: "66453",
        age: "35",
      },
    ];

    dbo
      .collection("uscensus")
      .insertMany(stats)
      .then(function (res) {
        console.log("Number of documents inserted:" + res.insertedCount);
        client.close();
      });
  })
  .catch((error) => console.log("Failed to connect", error));
