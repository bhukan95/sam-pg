const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, ".env"),
});

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

async function start() {
    try {

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

start();
