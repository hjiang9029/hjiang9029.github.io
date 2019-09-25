function formStart() {
	document.getElementById("form").style.display = "none";
}

function showForm() {
	var x = document.getElementById("form");
	if (x.style.display === "none") {
		x.style.display = "block";
			} else {
		x.style.display = "none";
	}
}

function addPerson() {
	var table = document.getElementById("directory");
	var newRow = table.insertRow();
	
	var imageCell = newRow.insertCell(0);
	var img = document.createElement('img');
	img.src = document.getElementById('img_url').value;
	imageCell.appendChild(img);
	
	var artistCell = newRow.insertCell(1);
	var nameDiv = document.createElement('div');
	var descriptDiv = document.createElement('div');
	var artName = document.createTextNode(document.getElementById('art_name').value);
	var artDescript = document.createTextNode(document.getElementById('art_about').value);
	nameDiv.appendChild(artName);
	descriptDiv.appendChild(artDescript);
	nameDiv.className = "name";
	descriptDiv.className = "description";
	
	artistCell.appendChild(nameDiv);
	artistCell.appendChild(descriptDiv);
	
	var buttonCell = newRow.insertCell(2);
	var deleteBtn = document.createElement('button');
	deleteBtn.type = "button";
	deleteBtn.appendChild(document.createTextNode("Delete"));
	deleteBtn.onclick = function () { deleteButton(this); };
	deleteBtn.className = "delButton";
	buttonCell.appendChild(deleteBtn);
}

function deleteButton(btn) {
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
}