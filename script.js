const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.querySelector('table');
	const price = document.querySelectorAll('.price');
	let sum = 0;
	price.forEach((item) => {
		sum += parseInt(item.textContent);
	})
	let row = document.createElement('tr');
	row.innerText = sum;
	row.id = 'ans';
	table.appendChild(row);
  
};

getSumBtn.addEventListener("click", getSum);

