import { franc } from 'franc'; // Destructure the named export from 'franc'
import langs from 'langs'; // ES Module import
import colors from 'colors';
// Add type: "module" ->in package.json to run this module
// Get input text from command line
const input = process.argv[2];
if (!input) {
    console.log("Please provide some text as input!");
    process.exit(1);
}

// Detect language
const langCode = franc(input);

if (langCode === 'und') {
    console.log("Language could not be detected. Try a longer text sample.".red);
} else {
    console.log("Language Code: ",langCode);    
    const lang = langs.where("3", langCode);
    console.log("Language: ",lang);
    if (lang) {
        console.log(`Detected Language: ${lang.name}`.green);
    } else {
        console.log("Language not found for the detected code.".red);
    }
}
