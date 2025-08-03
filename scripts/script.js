// Dynamic footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleDateString();

// Wind chill calculator
function calculateWindChill(temp, windSpeed) {
  if (temp <= 50 && windSpeed > 3) {
    return Math.round(
      35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)
    ) + "°F";
  } else {
    return "N/A";
  }
}

// Static values (DR average weather)
const temp = 82;
const windSpeed = 8;

document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);