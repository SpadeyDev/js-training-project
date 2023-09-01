function aktar() {
  let sayi = parseInt(document.getElementById("sayiInput").value);
  let div = document.querySelector(".wrapper");
  div.innerHTML = ""; 

  for (let i = 0; i <= sayi; i++) {
    if (i % 2 === 0) {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.fontSize = '45px'
      box.style.display = 'flex'
      box.style.justifyContent = 'center'
      box.style.alignItems = 'center'
      box.style.color = 'white';
      box.style.width = "150px";
      box.style.height = "120px";
      box.style.backgroundColor = "green";
      if (i == 2) {
        box.style.backgroundColor = "red";
      }
      box.style.margin = "8px";
      div.appendChild(box);
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.fontSize = '45px'
      box.style.display = 'flex'
      box.style.justifyContent = 'center'
      box.style.alignItems = 'center'
      box.style.color = 'white';
      box.style.width = "150px";
      box.style.height = "120px";
      box.style.backgroundColor = "red";
      if (i == 1) {
        box.style.backgroundColor = "yellow";
      }
      box.style.margin = "8px";
      div.appendChild(box);
    } else {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.fontSize = '45px'
      box.style.display = 'flex'
      box.style.justifyContent = 'center'
      box.style.alignItems = 'center'
      box.style.color = 'white';
      box.style.width = "150px";
      box.style.height = "120px";
      box.style.backgroundColor = "yellow";
      if (i == 3 || i == 5 || i == 7) {
        box.style.backgroundColor = "red";
      }
      box.style.margin = "8px";
      div.appendChild(box);
    }
  }
}
