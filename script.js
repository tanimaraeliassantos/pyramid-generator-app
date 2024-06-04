const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
	result = row + '\n' + result;
}
