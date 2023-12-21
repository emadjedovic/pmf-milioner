const pitanja = [
    {
        pitanje: "Kako se ranije zvao Odsjek za matematičke i kompjuterske nauke?",
        odgovori: ["Odsjek za matematičke nauke", "Odsjek za kompjuterske nauke", "Odsjek za matematiku", "Teorijska kompjuterska nauka"],
        tacanOdgovor: "Odsjek za matematiku",
        dobitak: 100,
        runda: 1,
        slika: "prof_sead.jpg"
    },
    {
        pitanje: "Čija reklama stoji na vrhu visoke zgrade Prirodno-matematičkog fakulteta?",
        odgovori: ["Teta Violeta", "Raiffeisen banka", "CM - Cosmetic Market", "Bit Alijansa"],
        tacanOdgovor: "Teta Violeta",
        dobitak: 100,
        runda: 1,
        slika: "prof_sead.jpg"
    },
    {
        pitanje: "Koliko smjerova postoji na prvom ciklusu Odsjeka za matematičke i kompjuterske nauke?",
        odgovori: ["Pet", "Šest", "Četiri", "Tri"],
        tacanOdgovor: "Pet",
        dobitak: 200,
        runda: 2,
        slika: "beso.jpg"
    },
    {
        pitanje: "Koji računarski centar se nalazi na 4. spratu?",
        odgovori: ["VRC", "RC", "Veliki računarski centar", "Mali računarski centar"],
        tacanOdgovor: "RC",
        dobitak: 200,
        runda: 2,
        slika: "beso.jpg"
    },
    {
        pitanje: "Na kojoj adresi se nalazi Prirodno-matematički fakultet?",
        odgovori: ["Zmaja od Bosne 33-35", "Zmaja od Bosne 33-36", "Zmaja od Bosne 33-34", "Zmaja od Bosne 33-38"],
        tacanOdgovor: "Zmaja od Bosne 33-35",
        dobitak: 300,
        runda: 3,
        slika: "dzana.jpg"
    },
    {
        pitanje: "Koja akademska titula dolazi nakon docenta?",
        odgovori: ["Doktor", "Redovni profesor", "Vanredni profesor", "Stručni saradnik"],
        tacanOdgovor: "Vanredni profesor",
        dobitak: 300,
        runda: 3,
        slika: "dzana.jpg"
    },
    {
        pitanje: "Na četvrtom spratu se do računarskog centra nalazi koja učionica?",
        odgovori: ["419", "428", "432", "441"],
        tacanOdgovor: "428",
        dobitak: 500,
        runda: 4,
        slika: "franjo.jpg"
    },
    {
        pitanje: "Koji je predmet zajednički svim smjerovima u prvom semestru?",
        odgovori: ["Analiza I", "Računarski sistemi", "Programiranje I", "Linearna algebra"],
        tacanOdgovor: "Programiranje I",
        dobitak: 500,
        runda: 4,
        slika: "franjo.jpg"
    },
    {
        pitanje: "Koje je radno vrijeme studentske službe?",
        odgovori: ["10:00-11:00", "10:00-12:00", "11:00-12:00", "11:00-13:00"],
        tacanOdgovor: "11:00-13:00",
        dobitak: 1000,
        runda: 5,
        slika: "adisa.jpg"
    },
    {
        pitanje: "Koji online sistem se prakticirao prije eUNSA?",
        odgovori: ["eNastava", "e-kolegij", "MS Teams", "ISSS"],
        tacanOdgovor: "ISSS",
        dobitak: 1000,
        runda: 5,
        slika: "adisa.jpg"
    },
    {
        pitanje: "U sklopu predmeta Programiranje II se izučava koji programski jezik?",
        odgovori: ["Java", "JavaScript", "Python", "Ništa od navedenog"],
        tacanOdgovor: "Ništa od navedenog",
        dobitak: 2000,
        runda: 6,
        slika: "prof_esmir.jpg"
    },
    {
        pitanje: "Osim amfiteatra Branko Galeb i amfiteatra 'Tri fizičara', PMF raspolaže i amfiteatrom...?",
        odgovori: ["Mladen Deželić", "Mladen Drešković", "Nusret Drešković", "Dragutin Feletar"],
        tacanOdgovor: "Mladen Deželić",
        dobitak: 2000,
        runda: 6,
        slika: "prof_esmir.jpg"
    },
    {
        pitanje: "Koliko boja je sadržano u logu Prirodno-matematičkog fakulteta?",
        odgovori: ["Jedna", "Dvije", "Tri", "Više od tri"],
        tacanOdgovor: "Dvije",
        dobitak: 4000,
        runda: 7,
        slika: "prof_aleksandar.jpg"
    },
    {
        pitanje: "Koji naziv je nosio amfiteatar 'Tri fizičara' prije nego je preimenovan?",
        odgovori: ["Veliki amfiteatar", "Mali amfiteatar", "Amfiteatar Kemal Hanjalić", "Amfiteatar Lamija Tanović"],
        tacanOdgovor: "Mali amfiteatar",
        dobitak: 4000,
        runda: 7,
        slika: "prof_aleksandar.jpg"
    },
    {
        pitanje: "Koju platformu preferira profesor Damir Hasić?",
        odgovori: ["eNastavu", "Microsoft Teams", "Oglasnu ploču", "Google Classroom"],
        tacanOdgovor: "eNastavu",
        dobitak: 8000,
        runda: 8,
        slika: "mirza.jpg"
    },
    {
        pitanje: "Sada se tu nalazi Slatko i Slano, a ranije smo imali...",
        odgovori: ["Mlinar", "Računarski centar", "Fine Food", "Bosančicu"],
        tacanOdgovor: "Bosančicu",
        dobitak: 8000,
        runda: 8,
        slika: "mirza.jpg"
    },
    {
        pitanje: "Koliko smjerova postoji na drugom ciklusu Odsjeka za matematičke i kompjuterske nauke?",
        odgovori: ["Četiri", "Tri", "Šest", "Pet"],
        tacanOdgovor: "Četiri",
        dobitak: 16000,
        runda: 9,
        slika: "prof_adis.jpg"
    },
    {
        pitanje: "Od 2016. godine je rektor Univerziteta u Sarajevu, a prije toga je bio dekan PMF-a...",
        odgovori: ["Muharem Avdispahić", "Rifat Škrijelj", "Jasmin Ahić", "Nusret Drešković"],
        tacanOdgovor: "Rifat Škrijelj",
        dobitak: 16000,
        runda: 9,
        slika: "prof_adis.jpg"
    },
    {
        pitanje: "Od 2020. godine, ko je dekan Prirodno-matematičkog fakulteta?",
        odgovori: ["Rifat Škrijelj", "Zenan Šabanac", "Muharem Avdispahić", "Nusret Drešković"],
        tacanOdgovor: "Nusret Drešković",
        dobitak: 32000,
        runda: 10,
        slika: "prof_zenan.jpg"
    },
    {
        pitanje: "Prirodno-matematički odsjek je prvobitno bio jedan od odsjeka na kojem fakultetu UNSA?",
        odgovori: ["ETF", "Šumarski fakultet", , "Filozofski fakultet", "Mašinski fakultet"],
        tacanOdgovor: "Filozofski fakultet",
        dobitak: 32000,
        runda: 10,
        slika: "prof_zenan.jpg"
    },
    {
        pitanje: "IBM SPSS je softver koji se koristi u sklopu kojeg predmeta?",
        odgovori: ["Operacionih istraživanja", "Statistike", "Numeričkih metoda", "Programiranja II"],
        tacanOdgovor: "Statistike",
        dobitak: 64000,
        runda: 11,
        slika: "prof_elmedin.jpg"
    },
    {
        pitanje: "U sklopu kojeg predmeta na prvom ciklusu se izučava Node.js?",
        odgovori: ["Programiranje I", "Programiranje II", "Web programiranje", "Odabrana poglavlja kompjuterskih nauka"],
        tacanOdgovor: "Odabrana poglavlja kompjuterskih nauka",
        dobitak: 64000,
        runda: 11,
        slika: "prof_elmedin.jpg"
    },
    {
        pitanje: "Koje godine je osnovan Prirodno-matematički fakultet?",
        odgovori: ["1958", "1960", "1962", "1964"],
        tacanOdgovor: "1960",
        dobitak: 100000,
        runda: 12,
        slika: "admir.jpg"
    },
    {
        pitanje: "Stručni naziv koji se stiče nakon završenog prvog ciklusa Kompjuterskih nauka je Bachelor matematike...",
        odgovori: ["Softversko inženjerstvo", "Kompjuterske nauke", "Softverski developer", "Informacione tehnologije"],
        tacanOdgovor: "Softversko inženjerstvo",
        dobitak: 100000,
        runda: 12,
        slika: "admir.jpg"
    },
    {
        pitanje: "2023. godine je PMF upisalo...",
        odgovori: ["Manje od 150 studenata", "Manje od 300 studenata", "Između 300 i 400 studenata", "Preko 400 studenata"],
        tacanOdgovor: "Preko 400 studenata",
        dobitak: 125000,
        runda: 13,
        slika: "iman.jpg"
    },
    {
        pitanje: "Ko predaje Diferencijalne jednadžbe?",
        odgovori: ["Dina Kamber-Hamzić", "Almasa Odžak", "Senada Kalabušić", "Amela Muratović-Ribić"],
        tacanOdgovor: "Senada Kalabušić",
        dobitak: 125000,
        runda: 13,
        slika: "iman.jpg"
    },
    {
        pitanje: "Operativne sisteme predaje profesor/ica...",
        odgovori: ["Adis Alihodžić", "Damir Hasić", "Almasa Odžak", "Samir Ribić"],
        tacanOdgovor: "Samir Ribić",
        dobitak: 250000,
        runda: 14,
        slika: "irhad.jpg"
    },
    {
        pitanje: "Koliko ECTS bodova nosi prvi ciklus na Odsjeku za fiziku?",
        odgovori: ["120", "180", "240", "300"],
        tacanOdgovor: "240",
        dobitak: 250000,
        runda: 14,
        slika: "irhad.jpg"
    },
    {
        pitanje: "Koliko laboratorija ima Odsjek za hemiju?",
        odgovori: ["Dva", "Tri", "Četiri", "Više od četiri"],
        tacanOdgovor: "Četiri",
        dobitak: 500000,
        runda: 15,
        slika: "eldina.jpg"
    },
    {
        pitanje: "U sklopu kojeg predmeta na TKN-u se izučava kompleksna analiza?",
        odgovori: ["Analiza II", "Analiza III", "Napredna analiza", "Odabrana poglavlja analize"],
        tacanOdgovor: "Odabrana poglavlja analize",
        dobitak: 500000,
        runda: 15,
        slika: "eldina.jpg"
    },
    {
        pitanje: "U kojem semestru se na prvom ciklusu Nastavničkog smjera izvodi Metodika nastave?",
        odgovori: ["Drugom", "Četvrtom", "Petom", "Šestom"],
        tacanOdgovor: "Šestom",
        dobitak: 1000000,
        runda: 16,
        slika: "prof_sead.jpg"
    },
    {
        pitanje: "Ko je 2023. godine zadužen za opće poslove i finansije?",
        odgovori: ["Esmir Pilav", "Elvedin Hasović", "Zenan Šabanac", "Nedim Bušatlija"],
        tacanOdgovor: "Esmir Pilav",
        dobitak: 1000000,
        runda: 16,
        slika: "prof_sead.jpg"
    }
];