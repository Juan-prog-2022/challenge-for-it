
import "dotenv/config";
import colors from "colors";
import server from "./server";
import { connectDB } from "./config/db";
import { exit } from "process";

const PORT = process.env.PORT || 4000;

const startServer =async () => {
    try {
        await connectDB();

        server.listen(PORT, () => {
            console.log(colors.green(`Server is running on port ${PORT}`));
        });
    } catch (error) {
        console.error(colors.bgRed("Failed to start the server:"), error);
        exit(1);
    }
}

startServer();