const appContainer = document.createElement('div');
appContainer.style.display = 'flex';
appContainer.style.flexDirection = 'column';
appContainer.style.alignItems = 'center';
document.body.appendChild(appContainer);

const navContainer = document.createElement('div');
navContainer.innerHTML = `
  <div>
    <span id="up-left">↖️</span>
    <span id="up">⬆️</span>
    <span id="up-right">↗️</span>
  </div>
  <div>
    <span id="left">⬅️</span>
    <span id="right">➡️</span>
  </div>
  <div>
    <span id="down-left">↙️</span>
    <span id="down">⬇️</span>
    <span id="down-right">↘️</span>
  </div>`;
navContainer.style.fontSize = '32px';
appContainer.appendChild(navContainer);

const gridContainer = document.createElement('div');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(5, 100px)';
gridContainer.style.gridTemplateRows = 'repeat(5, 100px)';
gridContainer.style.gap = '5px';
appContainer.appendChild(gridContainer);

function createCell() {
  const cell = document.createElement('div');
  cell.style.width = '100%';
  cell.style.height = '100%';
  cell.style.border = '1px solid black';
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = 'blue';
  });
  return cell;
}

const gridSize = 5;
const cells = [];
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = createCell();
  cells.push(cell);
  gridContainer.appendChild(cell);
}

let blueCellIndex = cells.length - 1;
cells[blueCellIndex].style.backgroundColor = 'blue';

function moveBlueCell(newIndex) {
  if (newIndex >= 0 && newIndex < cells.length) {
    cells[blueCellIndex].style.backgroundColor = '';
    blueCellIndex = newIndex;
    cells[blueCellIndex].style.backgroundColor = 'blue';
  }
}

function handleNavigation(event) {
  const directions = {
    'up': -gridSize,
    'down': gridSize,
    'left': -1,
    'right': 1,
    'up-left': -gridSize - 1,
    'up-right': -gridSize + 1,
    'down-left': gridSize - 1,
    'down-right': gridSize + 1
  };

  const direction = event.target.id;
  const newIndex = blueCellIndex + directions[direction];

  if (directions.hasOwnProperty(direction)) {
    moveBlueCell(newIndex);
  }
}

navContainer.addEventListener('click', handleNavigation);
