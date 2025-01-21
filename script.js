const skillsDescriptions = {
  "Google Analytics": "Experienced in using web analytics tools such as Google Analytics, Snowplow, and others to track and analyze web traffic and user behavior.",
  "Google Tag Manager(GTM)": "Advanced use of Google Tag Manager. Fixing minor frontend bugs, adding tracking with JavaScript, running tests using the GTM+JS combination.",
  "Google Data Studio(Looker Studio)": "Creating simple and accessible dashboards in Looker Studio.",
  "Google Sheets": "For quick insights on small data sets, I prefer using Google Sheets (including the QUERY function).",
  "HTML, CSS, JavaScript": "Used HTML, CSS, and JavaScript in combination with Google Tag Manager to address a wide range of tasks.",
  "SQL": "Daily use of SQL in my work for finding insights.",
  "A/B Testing": "Experience in developing and implementing A/B tests to optimize conversion rate, website design and content."
};

const tooltipHint = {
    "1": "Click to copy",
    "2": "Go to LinkedIn",
    "3": "More info"
};

function copyText(event) {
    var copyTextVar = event.currentTarget.querySelector('.contact-info').innerText;
    navigator.clipboard.writeText(copyTextVar);
    var tooltip = event.currentTarget.querySelector('.tooltip-text');
    tooltip.innerHTML = "Copied: " + copyTextVar;
}

function goTo() {
    window.location.href = 'https://www.linkedin.com/in/%D1%80%D0%BE%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B5%D1%80%D1%96%D0%B9-a222b91b2'
}

function tooltipHide(event) {
    var tooltip = event.currentTarget.querySelector('.tooltip-text');
    var tooltipText = tooltipHint[event.currentTarget.getAttribute('data-tooltip-group')];
    tooltip.innerHTML = tooltipText;
}

function showSkillDescription(event) {
    var skillElement = event.currentTarget.querySelector('.skill-name');
    var tooltip = event.currentTarget.querySelector('.tooltip-text');
    var skillName = skillElement.innerText;
    var description = skillsDescriptions[skillName] || "Description not available.";
    tooltip.innerText = description;
}
