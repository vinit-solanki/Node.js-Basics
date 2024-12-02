import { franc } from 'franc'; // Destructure the named export from 'franc'
import langs from 'langs'; // ES Module import
import colors from 'colors';
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
    const lang = langs.where("3", langCode);
    console.log(`Detected Language: ${lang.name}`.green);
}
