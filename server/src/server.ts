import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("ieahuiea");

  response.json(["jorge", "zé", "pedrão"]);
});

app.listen(3333);
