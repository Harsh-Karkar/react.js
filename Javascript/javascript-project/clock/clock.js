// Create clock container
const clockContainer = document.createElement('div');
document.body.appendChild(clockContainer);

// Set styles directly using JavaScript
clockContainer.style.fontSize = '48px';
clockContainer.style.color = 'green';
clockContainer.style.textAlign = 'center';
clockContainer.style.marginTop = '20px';
clockContainer.style.fontFamily = 'Consolas, monospace';
clockContainer.style.textShadow = '2px 2px 4px #000000';

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clockContainer.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function once to display the clock immediately
updateClock();
