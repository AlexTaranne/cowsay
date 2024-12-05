import * as cowsay from "cowsay";
import "dotenv/config";

const output = cowsay.say({
	text: `Hello im ${process.env.NAME} from ${process.env.CITY}`,
});

console.log(output);
