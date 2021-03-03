const mapDayHeader = {
	0: "No, my dudes",  // Sunday
	1: "Not quite yet, my dudes",  // Monday
	2: "Almost, my dudes",  // Tuesday
	3: "It is Wednesday, my dudes!",  // Wednesday
	4: "Far from it, my dudes :(",  // Thursday
	5: "Alas, my dudes",  // Friday
	6: "Negative, my dudes",  // Saturday
}

const mapTitleId = {
	"It Is Wednesday My Dudes Vine": "du-TY1GUFGk",
	"guess what day it is": "9K4-jllrPrE",
	"It is Wednesday": "bbat6cvgEJ8",
	"WednesdayOS": "Oct2xKMGOno",
	"Wednesday morning": "DREDJ4fkz-g",
	"\uff37\uff25\uff24\uff2e\uff25\uff33\uff24\uff21\uff39 - \u304a\u3044\u5144\u5f1f CHILL": "gxm5SwfkwcI",
	"dat dude!!!!": "oVxFk_IIB2o",
	"Don't do Wednesdays": "SePVlroq6AI",
	"Wednesday hard": "JHO61_wDC30",
	"Wednesday of the Living Dudes": "EBNEPil4da0",
	"it is spooksday my ghouls": "pXv4zQ6dYPQ",
	"Many Wednesdays": "hzGQSlrB1_o",
	"It is Wednesday my dawgs": "Y_xlWdgi1ew",
	"Escape your Wednesday": "szqNmefKXxc",
	"it is \u0441\u0440\u0435\u0434\u0430 my comrades": "OzQ-KvxLVT0",
	"WEDNESD\u039bY 5000 RETRO MILLENIA": "zl6phK1mXC4",
	"The summoning of Wednesday": "7aTtNNjIyi4",
	"it is Christmas my dudes": "1CH-7qjz4D4",
	"Wednesday the planet": "YSDAAh6Lps4",
	"Enter the Wednesday": "fyJGKEswuSc",
	"Evolution of Wednesday": "csqJK8wwaHw",
	"Wednesdaaaaaaaay": "KSwnFzlPEuY",
	"Tactical Wednesday": "aew9WTLqjDc",
	"wednesday \u2192 edit \u2192 copy": "m2Z0CyuyfMI",
	"it is mutating, my dudes": "VaPMUACYWww",
	"Valentines dudes": "_87k7gxeVsw",
	"Dudes?": "3RSL5k3yZOM",
	"Heavy Wednesday": "VXc47lVx7Eo",
	"just dudes": "0W51GIxnwKc",
	"it's the future my dudez": "VfaNCw2bF48",
	"Slice of Wednesday": "It8RbsGIe48",
	"wednesday_keygen": "NBPlPowAsNc",
	"The Wednesday System": "IaE0g3oVIZ0",
	"it is dudestep": "VzigPnZ8OYE",
	"The Wednesday truck": "meuYC7FP7HU",
	"The Wednesday Prophecy": "N3e7G9OxfhI",
	"That's a cybercrime, my dude!": "IR0QUwGmo4A",
	"\u2022\u25b4 \u2022? \u25c2\u23be\u23cc\u25cf\u23be?\u23cc\u2714\u25e3\u25de\u25e3 \u23cc\u25be\u23cc\u23be?": "ESNBnxtpKqI",
	"How it's dude": "036ItQLi-sQ",
	"The art of Wednesday": "Kz26jod9-cQ",
	"[insert Wednesday here]": "LrleLDD8CJM",
	"it is onsdag my swedes": "ZHS5yAwApUs",
	"The Wednesday ritual": "PE8GlPpuLuY",
	"Summer all Wednesday": "4Sr5pRpDZMk",
	"dudes and dudes": "qCsYa8PeVfU",
	"it is FREEDOM my dudes": "-R40VcLKyIw",
	"Frogball - Wednesday cup": "7dr2s59XnBE",
	"It is vacation my dudes": "iTl1l3GFMJ8",
	"Rise up my dudes": "In9Bs1wiF5s",
	"Ancient Wednesday": "zHpFuOlPrlQ",
	"Running in the Wednesdays": "Xf_wuAQ-t44",
	"Urban Wednesday": "frNFBv2QIoE",
	"Wednesday Finale": "PAnKl7862qc"
}

function addClassToElement(element, value) {
	const valueT = value.trim();
	if (!valueT) {
		return;
	}
	if (element.classList.contains(valueT)) {
		return;
	}
	element.classList.add(valueT)
}

function addAttributesToElement(element, attributes) {
	if (!attributes) {
		return;
	}

	for (const attr in attributes) {
		const value = attributes[attr];
		if (attr === "class") {
			value.split(" ").forEach(v => addClassToElement(element, v));
			continue;
		}
		element.setAttribute(attr, value);
	}
}

function finalizeElement(element, attributes, parent) {
	addAttributesToElement(element, attributes);
	if (parent) {
		parent.appendChild(element);
	}
	return element;
}

function createText(tag, text, attributes, parent) {
	const paragraph = document.createElement(tag);
	if (text) {
		paragraph.innerHTML = text;
	}
	return finalizeElement(paragraph, attributes, parent);
}

function createIFrame(attributes, parent) {
	const iframe = document.createElement("iframe");
	return finalizeElement(iframe, attributes, parent);
}

function createImg(source, attributes, parent) {
	const img = document.createElement('img');
	if (source) {
		img.src = source;
	}
	return finalizeElement(img, attributes, parent);
}

function createAHref(href, text, attributes, parent) {
	const a = document.createElement('a');
	a.href = href;
	if (text) {
		a.innerText = text;
	}
	return finalizeElement(a, attributes, parent);
}

function isClientDarkThemeEnabled() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setTheme() {
	if (!isClientDarkThemeEnabled()) {
		return;
	}
	addClassToElement(document.body, "dark-bg");
}

function getDayOfWeek() {
	return (new Date()).getDay();
}

function isWednesday(day) {
	return (day ?? getDayOfWeek()) === 3;
}

function getRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function wednesday() {
	setTheme();

	const dayOfWeek = getDayOfWeek();
	const container = document.getElementById("content");

	createText("h2", mapDayHeader[dayOfWeek], {
		"class": ["text-center", isClientDarkThemeEnabled() ? "dark-text" : ""].join(" ")
	}, container);

	if (!isWednesday(dayOfWeek)) {
		createImg("images/sad.png", {"alt": "sad my dude"}, container);
		return;
	}

	const iframe = createIFrame({
		"class": "video",
		"allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
		"allowfullscreen": ""
	}, container);

	const videoId = getRandomElement(Object.values(mapTitleId));
	console.log(videoId);
	iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

function error404() {
	setTheme();

	const container = document.getElementById("content");

	const classDark = isClientDarkThemeEnabled() ? "dark-text" : "";

	createText("h1", "404, my dude", {"class": classDark}, container);

	createImg("images/404.png", {"alt": "404 - my dude"}, container);

	createAHref("/", "Might be Wednesday...", {"class": classDark}, container);
}