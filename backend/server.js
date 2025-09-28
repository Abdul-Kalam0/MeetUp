import server from "./index.js";
import dbInitialization from "./config/db.js";

dbInitialization();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
