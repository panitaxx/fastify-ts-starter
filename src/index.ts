import { app } from "./app";
import config from "./config";
import chalk from "chalk";

app.listen(config.get("port"), config.get("ip")).then(() => {
  console.log(chalk.greenBright(`Server running on ${config.get("ip")}:${config.get("port")}`));
}).catch((err) => {
  console.log(chalk.bgWhite(chalk.redBright("ERROR starting")));
  console.log(err);
});
