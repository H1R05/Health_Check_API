//Qui vado ad accendere il server sulla porta 3000
const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server sta funzionando sulla porta ${PORT}`);
});
