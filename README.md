# currency_converter web page
💱 Currency Converter Web App
A simple, elegant, and real-time Currency Converter built using HTML, CSS, and JavaScript. This web application fetches live exchange rates using the Frankfurter API and displays updated conversion values between any two currencies with corresponding country flags.

🌍 Live Demo
(You can host it on GitHub Pages or Netlify and add the link here)
📌 Example: https://your-username.github.io/currency-converter

📌 Features
🔄 Real-time currency conversion using the Frankfurter API

🌐 Supports 100+ currencies

🚩 Country flag updates based on currency code

🔢 Amount input with validation

🧠 Auto default values (USD → INR) on load

📱 Responsive design layout

🛠️ Tech Stack
Technology	Description
HTML5	Page structure
CSS3	Styling the app layout
JavaScript	App logic, API fetch, interactivity
Frankfurter API	For real-time currency exchange rates
FlagsAPI.com	Dynamic country flags for selected currencies

📁 Project Structure
graphql
Copy
Edit
currency-converter/
├── index.html        # Main UI layout
├── style.css         # Custom CSS for styling
├── app.js            # Handles UI logic and API fetch
├── code.js           # Contains country-code mapping
└── README.md         # Project documentation
🧪 How It Works
Dropdowns for "From" and "To" currencies are auto-populated from countryList.

When a currency is selected, the flag image is updated via FlagsAPI.

Clicking the Convert button (or on page load) triggers a fetch from the Frankfurter API.

The exchange rate is multiplied by the amount input and the result is shown in the output message.

🧠 Sample Code Highlights
✅ Fetching Exchange Rate
js
Copy
Edit
const URL = `https://api.frankfurter.app/latest?from=${fromcurrCode.value}&to=${tocurrCode.value}`;
let response = await fetch(URL);
let data = await response.json();
✅ Updating the UI
js
Copy
Edit
mymsg.innerText = `${amtval} ${fromcurrCode.value} = ${final} ${tocurrCode.value}`;
✅ Flag Display
js
Copy
Edit
let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`;
img.src = newSrc;
🚀 Getting Started Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
Open the app:
Just open index.html in any browser.

💡 Suggestions for Improvement
Add reverse currency button (Swap)
Add loading animation during API calls
Handle edge-case errors (e.g., network failure)
Allow custom styling themes (light/dark)
