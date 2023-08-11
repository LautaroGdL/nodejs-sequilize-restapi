import app from './app.js';
import { sequelize } from '../src/database/database.js';

import '../src/models/Project.js';
import '../src/models/Task.js';

async function main() {
    try {
        await sequelize.sync();
        console.log("Connection has been established successfully.");
        app.listen(3000);
        console.log('Server is listening on port:', 3000);
        } 
    catch(error) 
        {
        console.log("Unable to connect to the database.", error);
        }

}

main();