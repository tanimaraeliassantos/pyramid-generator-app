const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
	const test = 'Testing';
	return test;
}

padRow();
const call = padRow('Tanimara');
console.log(call);

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
	result = row + '\n' + result;
}
