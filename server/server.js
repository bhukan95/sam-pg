const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, ".env"),
});

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

start();
