/* const earthGravity = 9.81;
const jupiterGravity = 9.81;
const marsGravity = 3.72076;
const mercuryGravity = 9.81;
const moonGravity = 9.81;                      // İsterseniz farklı yollar ile de deneyebilirsiniz.
const neptuneGravity = 9.81;
const plutoGravity = 9.81;
const saturnGravity = 9.81;
const uranusGravity = 9.81;
const venusGravity = 8.87;
*/

/* function aktarVeri() {
    let veri = document.getElementById("veriInput").value;
    console.log("Aktarılan veri: " + veri);
    let veri2= document.getElementById("secim").value;
    console.log("Seçilen seçenek: " + veri2);
  }
*/ 



  function hesaplaAgirlik() {
    let dunyaAgirlik = (document.getElementById("veriInput").value);
  
    let dunyaYercekimi = 9.81;
  
    let secilenGezegen = document.getElementById("secim").value;
    let gezegenYercekimi;
    switch (secilenGezegen) {
        case "Mercury":
          gezegenYercekimi = 3.7;
          break;
        case "Venus":
          gezegenYercekimi = 8.87;
          break;
        case "Mars":
          gezegenYercekimi = 3.72076; 
          break;
        case "Jupiter":
          gezegenYercekimi = 24.79;
          break;
          case "Moon":
            gezegenYercekimi = 3.7;
            break;
          case "Pluto":
            gezegenYercekimi = 8.87;
            break;
          case "Neptune":
            gezegenYercekimi = 3.72076; 
            break;
          case "Saturn":
            gezegenYercekimi = 24.79;
            break;
            case "Uranus":
            gezegenYercekimi = 24.79;
            break;
            case "Saturn":
            gezegenYercekimi = 24.79;
             break;
        default:
          gezegenYercekimi = dunyaYercekimi; 
      }
  
    let sonucAgirlik = (dunyaAgirlik / dunyaYercekimi) * gezegenYercekimi;
  
    let h2 = document.getElementById("h2");
    let img = document.querySelectorAll("img");

    h2.innerHTML = secilenGezegen + " gezegeninde ağırlığınız: <br>" +  sonucAgirlik.toFixed(2) + " kg";
  }

  let gezegenListe = document.getElementById('secim')
  let gezegenResmi = document.getElementById("gezegenResmi");

  gezegenListe.addEventListener("change", function() {
    // Seçilen gezegenin değerini alın
    let secilenGezegen = gezegenListe.value;
  
    // Seçilen gezegenin değerine göre resmi değiştirin
    if (secilenGezegen === "Mercury") {
      gezegenResmi.src = "./image/mercury.png"; // Merkür resminin yolunu ekleyin
    } else if (secilenGezegen === "Venus") {
      gezegenResmi.src = "./image/venus.png"; // Venüs resminin yolunu ekleyin
    } else if (secilenGezegen === "Mars") {
      gezegenResmi.src = "./image/mars.png";
    } else if (secilenGezegen === "Jupiter") {
        gezegenResmi.src = "./image/jupiter.png";
    } else if (secilenGezegen === "uranus") {
        gezegenResmi.src = "./image/uranus.png";
    } else if (secilenGezegen === "Saturn") {
        gezegenResmi.src = "./image/saturn.png";
    } else if (secilenGezegen === "Moon") {
        gezegenResmi.src = "./image/moon.png"; 
    } else if (secilenGezegen === "Pluto") {
        gezegenResmi.src = "./image/pluto.png";
    } else if (secilenGezegen === "Neptune") {
        gezegenResmi.src = "./image/neptune.png";// Mars resminin yolunu ekleyin
    } else {
      gezegenResmi.src = "./image/earth.png"; // Dünya resminin yolunu ekleyin
    }
  });
