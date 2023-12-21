let trenutnaRunda = 1;
let trenutniIndeksPitanja = 0;
let osvojeniDobitak = 0;
const maksimalnaRunda = 16;
  
function pocniIgru() {
  document.getElementById('glavni-meni').style.display = 'none'; //sklanja pmf zgradu
  document.getElementById('kontejner').style.display = 'flex'; //kontejner-igra + dvije aside trake
  prikaziPitanje();
}

function prikaziPitanje() {
  const pitanjeElement = document.getElementById('pitanje');
  const odgovoriElement = document.getElementById('odgovori');
  const slikaProfesora = document.getElementById('slikaProfesora'); //desni aside
  const dobitakElement = document.getElementById('dobitak'); // desni aside

  // Filtriramo pitanja na osnovu trenutne runde
  const pitanjaZaRundu = pitanja.filter(p => p.runda === trenutnaRunda);
  // Random pitanje iz skupa pitanja za trenutnu rundu, zapravo samo objekat
  const trenutnoPitanje = pitanjaZaRundu[Math.floor(Math.random() * pitanjaZaRundu.length)];
  //novčana vrijednost trenutnog pitanja, ovo ispisujemo ispod slike profesora
  dobitakElement.textContent = `$${trenutnoPitanje.dobitak}`;

  // Postavljamo sliku profesora za trenutno pitanje (desni aside)
  slikaProfesora.src = `images/${trenutnoPitanje.slika}`;

  //trenutnoPitanje je objekat (pogledaj pitanja.js)
  pitanjeElement.textContent = trenutnoPitanje.pitanje;

  odgovoriElement.innerHTML = "";

  /*
  za svaki objekat imamo property odgovori s četiri ponuđena odgovora,
  za svaki odgovor kreiramo dugme u koje postavljamo tekst "odgovor",
  na svako dugme vežemo onclick event i poziva funkcija provjeriOdgovor(),
  takvo dugme se kači na html dokument (DOM) unutar elementa odgovoriElement (id="odgovori")
  */
  trenutnoPitanje.odgovori.forEach((odgovor) => {
    const dugme = document.createElement('button');
    dugme.textContent = odgovor;
    dugme.addEventListener('click', (event) => provjeriOdgovor(event, odgovor, trenutnoPitanje));
    odgovoriElement.appendChild(dugme);
  });
}

//funkcija koja se poziva nakon što korisnik odabere svoj odgovor
function provjeriOdgovor(event, odgovor, trenutnoPitanje) {
  const kontejnerRezultata = document.getElementById('kontejner-rezultata');
  const rezultatElement = document.getElementById('rezultat');
  //osvojeniDobitak je novac koji je do sada u igri osvojen (vrijednost zadnjeg tacno odgovorenog pitanja)
  const osvojeniDobitakElement = document.getElementById('osvojeni-dobitak');

  //unutar pitanja.js za svako pitanje imamo tacanOdgovor
  if (odgovor === trenutnoPitanje.tacanOdgovor) {
    osvojeniDobitak = trenutnoPitanje.dobitak; //vrijednost trenutnog pitanja
    rezultatElement.innerHTML = "Tačno!";
    osvojeniDobitakElement.textContent = osvojeniDobitak;
    trenutnaRunda++; //idemo na iduću rundu

    //nastavljamo dalje samo ukoliko je odgovor tačan i ima još pitanja
    if (trenutnaRunda <= maksimalnaRunda) {
      prikaziPitanje();
    } else {
      //nema više pitanja
      rezultatElement.textContent = "Pobjeda!";
      osvojeniDobitakElement.textContent = osvojeniDobitak;
      kontejnerRezultata.style.display = 'block';
      prikaziPobjedu();
    }
  } else {
    //netačan odgovor, završava se igra
    rezultatElement.innerHTML = "Netačno!";
    osvojeniDobitakElement.textContent = osvojeniDobitak;
    kontejnerRezultata.style.display = 'block';
    prikaziKrajIgre();
  }
}

//Korištena biblioteka SweetAlert2 za ljepši prikaz alert prozora
//korake ćemo opisati samo jednom, kod se ponavlja

function prikaziKrajIgre() {
  var osvojeno = osvojeniDobitak; //zadnje tačno odgovoreno pitanj

  Swal.fire({
    title: 'Igra gotova!',
    text: 'Osvojili ste ukupno $' + osvojeno + '.',

    //confirm button i cancel button, samo korigirani za naše potrebe
    showCancelButton: true,
    confirmButtonText: 'Igraj ponovo.',
    cancelButtonText: 'Vrati me na početnu stranicu.'
  }).then((result) => {
    if (result.isConfirmed) {
      //igraj ponovo
      resetirajIgru();
    } else {
      //vrati me na početnu stranicu
      window.location.href = 'index.html';
      //window je globalni objekat koji ima properties document, history, location, navigator, screen itd.
      //riječ je o BOM (Browser Object Model)
      //trenutni url se postavlja na index.html
    }
  });
}

function prikaziPobjedu() {
  var osvojeno = osvojeniDobitak;

  Swal.fire({
    title: 'Pobijedili ste!',
    text: 'Osvojili ste $' + osvojeno + '.',
    showCancelButton: true,
    confirmButtonText: 'Igraj ponovo.',
    cancelButtonText: 'Vrati me na početnu stranicu.'
  }).then((result) => {
    if (result.isConfirmed) {
      resetirajIgru();
    } else {
      window.location.href = 'index.html';
    }
  });
}

function resetirajIgru() {

  //resetujemo varijable
  osvojeniDobitak = 0;
  trenutniIndeksPitanja = 0;
  trenutnaRunda = 1;

  // resetujemo vrijednost html elementa s id="rezultat" - tačno, netačno ili pobjeda
  const rezultatElement = document.getElementById('rezultat');
  rezultatElement.textContent = '';

  //resetujemo vrijednost html elementa s id="osvojeni-dobitak" - ukupna suma novca ispod slike profesora u desnom aside elementu
  const osvojeniDobitakElement = document.getElementById('osvojeni-dobitak');
  osvojeniDobitakElement.textContent = '0'; // Reset the content of the 'osvojeni-dobitak' element to '0'

  pocniIgru();
}

function prikaziConfirm() {
  Swal.fire({
    text: 'Jeste li sigurni da se želite li se vratiti na početnu stranicu?',
    showCancelButton: true,
    confirmButtonText: 'Da',
    cancelButtonText: 'Ne'
  }).then((result) => {
    if (result.isConfirmed) {
      // confirm - vraća nas na početnu index.html stranicu
      window.location.href = 'index.html';
    } else {
      // ne - korisnik nije siguran, ne treba raditi ništa
    }
  });
}

//srednje i desno dugme na početnoj stranici (uputstva i o projektu)

function prikaziUputstva() {
  Swal.fire({
    title: 'Uputstva za igru',
    html: `<p>Igra se sastoji od pitanja s četiri ponuđena odgovora, pri čemu se težina pitanja postepeno povećava.</p>
    <p>Birate jedan od ponuđenih odgovora kao svoj konačan odgovor.</p>
    <p>Ako je odgovor tačan, prelazite na sljedeće pitanje s većom nagradom.</p>
    <p>Ako je odgovor netačan, igra se završava.</p>
    <p>Osvajate nagradu koja odgovara posljednjem tačnom odgovoru.</p>`,
    confirmButtonText: 'U redu.'
  });
}

function prikaziOProjektu() {
  Swal.fire({
    title: 'O projektu',
    html: `<p>Ovaj projekat je verzija igre "Ko želi biti milioner?" prilagođena Prirodno-matematičkom fakultetu (PMF). Igra je rađena u sklopu predmeta Web Programiranje I, i kao takva je implementirana koristeći HTML, CSS i JavaScript.</p>
    <p>Verzija: 12/2023</p>
    <p>Student: Ema Djedović</p>
    <p>Profesor: Doc. dr. Sead Delalić</p>
    <p>Asistent: Mr Irhad Fejzić</p>`,
    confirmButtonText: 'Zatvori.'
  });
}
