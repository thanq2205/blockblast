const gridElement = document.getElementById('grid');
const shapesContainer = document.getElementById('shapes-container');
const scoreElement = document.getElementById('score');

const GRID_SIZE = 8;
let board = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));
let score = 0;

// Khởi tạo bảng 8x8
function initGrid() {
    gridElement.innerHTML = '';
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            gridElement.appendChild(cell);
        }
    }
}

// Tạo các hình khối ngẫu nhiên cho người chơi
const SHAPES = [
    [[1, 1], [1, 1]], // Hình vuông 2x2
    [[1, 1, 1]],      // Thanh ngang 3 ô
    [[1], [1], [1]],  // Thanh dọc 3 ô
    [[1]]             // 1 ô đơn
];

function generateShapes() {
    shapesContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const randomShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        const shapeDiv = document.createElement('div');
        shapeDiv.classList.add('shape-preview');
        shapeDiv.style.gridTemplateColumns = `repeat(${randomShape[0].length}, 25px)`;
        
        randomShape.forEach(row => {
            row.forEach(val => {
                const sCell = document.createElement('div');
                sCell.classList.add('shape-cell');
                if (val === 1) sCell.classList.add('filled');
                shapeDiv.appendChild(sCell);
            });
        });

        shapesContainer.appendChild(shapeDiv);
    }
}

// Chạy khởi tạo game lần đầu
initGrid();
generateShapes();
