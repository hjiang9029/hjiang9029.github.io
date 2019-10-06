class Artist {
	constructor(src, name, descript) {
		this.src = src;
		this.name = name;
		this.descript = descript;
	}
}

function formStart() {
	document.getElementById("form").style.display = "none";;
	if (localStorage.length > 0) {
		for (var key in localStorage) {
			p = JSON.parse(localStorage.getItem(key));
			console.log(p);
			if (p !== null)
				addPerson(p.src, p.name, p.descript, key);
		}
	}
}

function showForm() {
	var x = document.getElementById("form");
	if (x.style.display === "none") {
		x.style.display = "block";
			} else {
		x.style.display = "none";
	}
}

function addPersonDoc() {
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
	
	artistToAdd = new Artist(img.src, document.getElementById('art_name').value, document.getElementById('art_about').value);
	localstrg_id = document.getElementById('art_name').value + localStorage.length;
	localStorage.setItem(localstrg_id, JSON.stringify(artistToAdd));
	
	var buttonCell = newRow.insertCell(2);
	var deleteBtn = document.createElement('button');
	deleteBtn.type = "button";
	deleteBtn.appendChild(document.createTextNode("Delete"));
	deleteBtn.onclick = function () { deleteButton(this, localstrg_id); };
	deleteBtn.className = "delButton";
	buttonCell.appendChild(deleteBtn);
	
}

function addPerson(src, name, descript, local_id) {
	
	var table = document.getElementById("directory");
	var newRow = table.insertRow();
	
	var imageCell = newRow.insertCell(0);
	var img = document.createElement('img');
	img.src = src;
	imageCell.appendChild(img);
	
	var artistCell = newRow.insertCell(1);
	var nameDiv = document.createElement('div');
	var descriptDiv = document.createElement('div');
	var artName = document.createTextNode(name);
	var artDescript = document.createTextNode(descript);
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
	deleteBtn.onclick = function () { deleteButton(this, local_id); };
	deleteBtn.className = "delButton";
	buttonCell.appendChild(deleteBtn);
}

function deleteButton(btn, local_id) {
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
	localStorage.removeItem(local_id);
}

function Search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  table = document.getElementById("directory");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {	
    td = tr[i].getElementsByTagName("td")[1].getElementsByTagName("div")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}