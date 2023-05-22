const monthList = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Australia",
	"Austria",
	"Azerbaijan",
	"The Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bhutan",
	"Bolivia",
	"Bosnia and Herzegovina",
	"Botswana",
	"Brazil",
	"Brunei",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Colombia",
	"Comoros",
	"Congo, Democratic Republic of the",
	"Congo, Republic of the",
	"Costa Rica",
	"Côte d’Ivoire",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"East Timor (Timor-Leste)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"The Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Grenada",
	"Guatemala",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea, North",
	"Korea, South",
	"Kosovo",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Micronesia, Federated States of",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Morocco",
	"Mozambique",
	"Myanmar (Burma)",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"North Macedonia",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russia",
	"Rwanda",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Sudan, South",
	"Suriname",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Togo",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Vatican City",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe",
]
const timeList = [
	"00:00 AM",
	"00:15 AM",
	"00:30 AM",
	"00:45 AM",
	"01:00 AM",
	"01:15 AM",
	"01:30 AM",
	"01:45 AM",
	"02:00 AM",
	"02:15 AM",
	"02:30 AM",
	"02:45 AM",
	"03:00 AM",
	"03:15 AM",
	"03:30 AM",
	"03:45 AM",
	"04:00 AM",
	"04:15 AM",
	"04:30 AM",
	"04:45 AM",
	"05:00 AM",
	"05:15 AM",
	"05:30 AM",
	"05:45 AM",
	"06:00 AM",
	"06:15 AM",
	"06:30 AM",
	"06:45 AM",
	"07:00 AM",
	"07:15 AM",
	"07:30 AM",
	"07:45 AM",
	"08:00 AM",
	"08:15 AM",
	"08:30 AM",
	"08:45 AM",
	"08:00 AM",
	"08:15 AM",
	"08:30 AM",
	"08:45 AM",
	"09:00 AM",
	"09:15 AM",
	"09:30 AM",
	"09:45 AM",
	"10:00 AM",
	"10:15 AM",
	"10:30 AM",
	"10:45 AM",
	"11:00 AM",
	"11:15 AM",
	"11:30 AM",
	"11:45 AM",
	"12:00 PM",
	"12:15 PM",
	"12:30 PM",
	"12:45 PM",
	"01:00 PM",
	"01:15 PM",
	"01:30 PM",
	"01:45 PM",
	"02:00 PM",
	"02:15 PM",
	"02:30 PM",
	"02:45 PM",
	"03:00 PM",
	"03:15 PM",
	"03:30 PM",
	"03:45 PM",
	"04:00 PM",
	"04:15 PM",
	"04:30 PM",
	"04:45 PM",
	"05:00 PM",
	"05:15 PM",
	"05:30 PM",
	"05:45 PM",
	"06:00 PM",
	"06:15 PM",
	"06:30 PM",
	"06:45 PM",
	"07:00 PM",
	"07:15 PM",
	"07:30 PM",
	"07:45 PM",
	"08:00 PM",
	"08:15 PM",
	"08:30 PM",
	"08:45 PM",
	"08:00 PM",
	"08:15 PM",
	"08:30 PM",
	"08:45 PM",
	"09:00 PM",
	"09:15 PM",
	"09:30 PM",
	"09:45 PM",
	"10:00 PM",
	"10:15 PM",
	"10:30 PM",
	"10:45 PM",
	"11:00 PM",
	"11:15 PM",
	"11:30 PM",
	"11:45 PM",
]

// const elDDFlex = document.querySelectorAll(".ddfield__examples .ddfield__flex div:first-child")

DropdownField(".example1", "Month", "Month", 1, "dd1", monthList, {
	maxLines: 6,
	cssClassList: ["month-field"],
	onFocusOpenDropdown: false,
	typingOpenDropdown: false,
	arrowKeysNoDropdown: 2,
	autocomplete: true,
	// autocomplete: false,
	enterToggleDropdown: false,
})

DropdownField(".example2", "Time", "Time", 2, "dd2", timeList, {
	maxLines: 6,
	cssClassList: ["time-field"],
	onFocusOpenDropdown: true,
	typingOpenDropdown: true,
	arrowKeysNoDropdown: 1,
	autocomplete: false,
	enterToggleDropdown: true,
})

DropdownField(".example3", "Country", "Country", 3, "dd3", countryList, {
	maxLines: 10,
	ignoreFirstXCharacters: 1,
	onFocusOpenDropdown: false,
	typingOpenDropdown: true,
	arrowKeysNoDropdown: 1,
	autocomplete: true,
	enterToggleDropdown: true,
})
