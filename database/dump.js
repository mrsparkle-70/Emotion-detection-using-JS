// NOTE : To execute this script "mongodb-database-tools" must be installed and setup Environment into the system 

import { exec } from 'child_process';

// Database Name
const dbName = 'EmotionDetectionJS';

// Output Directory
const outputDir = './database/dump';

// Dump Command
const command = `mongodump --db ${dbName} --out ${outputDir}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Database dump saved to ${outputDir}`);
});
