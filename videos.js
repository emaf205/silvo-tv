/**
 * SILVO TV - Database Ufficiale dei 200 Video di Silvio Berlusconi
 * Video verificati, metadati storici e supporto universale per web/PWA/FTP.
 */

const BERLUSCONI_VIDEOS = [
  {
    "id": "DWETaMSRG-c",
    "title": "1994 - Discesa in campo di Berlusconi",
    "year": "1994",
    "category": "Politica",
    "startSeconds": 0
  },
  {
    "id": "FYl3BCwR0GA",
    "title": "Berlusconi pulisce la sedia di Marco Travaglio [2013]",
    "year": "2013",
    "category": "TV",
    "startSeconds": 0
  },
  {
    "id": "Ha_F4vxjDMA",
    "title": "Quando Berlusconi a Trieste fece «cucù» alla cancelliera Angela Merkel",
    "year": "2008",
    "category": "Diplomazia",
    "startSeconds": 0
  },
  {
    "id": "G-ibCMEUApU",
    "title": "La figuraccia di Berlusconi al Parlamento Europeo",
    "year": "2003",
    "category": "Europa",
    "startSeconds": 0
  },
  {
    "id": "5bJZKCps6bw",
    "title": "Berlusconi: \"Obama abbronzato\"",
    "year": "2008",
    "category": "Gaffe",
    "startSeconds": 0
  },
  {
    "id": "Q_P2Fwg0UEM",
    "title": "Dieci anni fa il «Che fai, mi cacci?» di Fini a Berlusconi. La Russa: «Avrei seguito Gianfranco,...",
    "year": "2010",
    "category": "Politica",
    "startSeconds": 0
  },
  {
    "id": "ULSnN1G-C1k",
    "title": "Berlusconi show alla festa di Natale del Monza: 'Un pullman di t***e per i giocatori'",
    "year": "2022",
    "category": "Calcio",
    "startSeconds": 0
  },
  {
    "id": "ZEHEHd-JUUg",
    "title": "Berlusconi fa le corna (di nuovo) e scoppia la polemica",
    "year": "2002",
    "category": "Diplomazia",
    "startSeconds": 0
  },
  {
    "id": "CHAuMuykKDw",
    "title": "Berlusconi - Il marocchino napoletano Mohammed Esposito",
    "year": "1993",
    "category": "Show",
    "startSeconds": 0
  },
  {
    "id": "N3YwoTPMVJI",
    "title": "Ballarò - Giovanni Floris intervista Silvio Berlusconi 05/02/13",
    "year": "2013",
    "category": "TV",
    "startSeconds": 0
  },
  {
    "id": "sxvS7tg6Vz8",
    "title": "L'INFEDELE - La telefonata di Silvio Berlusconi a Gad Lerner",
    "year": "2011",
    "category": "TV",
    "startSeconds": 0
  },
  {
    "id": "Q47TgVu5VRM",
    "title": "BERLUSCONI RIMPROVERA i giocatori del MILAN... #berlusconi #cedroitalico",
    "year": "2015",
    "category": "Calcio",
    "startSeconds": 0
  },
  {
    "id": "WXf-YbsSh0Y",
    "title": "Meno male che Silvio c'è video ufficiale inno campagna PDL",
    "year": "2008",
    "category": "Musica",
    "startSeconds": 0
  },
  {
    "id": "d42v75gskcM",
    "title": "Berlusconi commuove il congresso americano a Washington con un aneddoto strappalacrime",
    "year": "2006",
    "category": "Politica",
    "startSeconds": 0
  },
  {
    "id": "6ajR__iS-xY",
    "title": "BERLUSCONI e la Barzelletta su DIO😳 #berlusconi #cedroitalico",
    "year": "2019",
    "category": "Umorismo",
    "startSeconds": 0
  },
  {
    "id": "lz8Q910TJUk",
    "title": "Berlusconi insulta Rosy Bindi",
    "year": "2009",
    "category": "TV",
    "startSeconds": 0
  },
  {
    "id": "1uMuV2iKWpw",
    "title": "Berlusconi canta in francese con Apicella",
    "year": "2003",
    "category": "Musica",
    "startSeconds": 0
  },
  {
    "id": "HwTdfamx448",
    "title": "Otto e Mezzo - Berlusconi (8-1-13)",
    "year": "2013",
    "category": "TV",
    "startSeconds": 0
  },
  {
    "id": "97oJH5dWgbE",
    "title": "Centrodestra in piazza, Berlusconi: \"Avviso di sfratto al governo delle tasse e delle manette\"",
    "year": "2010",
    "category": "Politica",
    "startSeconds": 0
  },
  {
    "id": "gy_pouK4q8k",
    "title": "Video raro di Putin e Berlusconi #putin #berlusconi",
    "year": "2008",
    "category": "Diplomazia",
    "startSeconds": 0
  },
  {
    "id": "NaNgpQDZKOg",
    "title": "BERLUSCONI PUNZECCHIA ALLEGRI: LE RISPOSTE CHE FANNO STORIA! ⚽🔥 #allegri #milan",
    "year": "2012",
    "category": "Calcio",
    "startSeconds": 0
  },
  {
    "id": "pYDnTm2OUwk",
    "title": "Berlusconi racconta una barzelletta: «Io, Putin, Biden e il Papa su un aereo...»",
    "year": "2021",
    "category": "Umorismo",
    "startSeconds": 0
  },
  {
    "id": "XIdp6zUoVCw",
    "title": "BERLUSCONI con i BAMBINI del TERREMOTO😳 #berlusconi #cedroitalico",
    "year": "2009",
    "category": "Cronaca",
    "startSeconds": 0
  },
  {
    "id": "JIcSlkWWCtg",
    "title": "Berlusconi firma il contratto con gli italiani da Vespa",
    "year": "2001",
    "category": "TV",
    "startSeconds": 0
  },
  {
    "id": "sO5Hw0LHw2I",
    "title": "telemilano 58",
    "year": "1978",
    "category": "Impresa",
    "startSeconds": 0
  },
  {
    "id": "kuMWvXduwNY",
    "title": "DOTTOR SCHULZ MI CONSENTA",
    "year": "1994",
    "category": "Tormentoni",
    "startSeconds": 0
  },
  {
    "id": "r3P6TrJu_Yk",
    "title": "Berlusconi alla Cnn su Caso Mills: \"Sono toghe rosse\" ,e Noemi: \"Spiegherò\"",
    "year": "2009",
    "category": "Giustizia",
    "startSeconds": 0
  },
  {
    "id": "yxDz72vwACQ",
    "title": "Berlusconi bacia la mano di Gheddafi",
    "year": "2010",
    "category": "Diplomazia",
    "startSeconds": 0
  },
  {
    "id": "aPOqo6fWxvU",
    "title": "BERLUSCONI A BOLOGNA: SONO COMMOSSO DI TORNARE IN PIAZZA DOPO TRE ANNI",
    "year": "2015",
    "category": "Politica",
    "startSeconds": 0
  },
  {
    "id": "CHZwrqhcxCQ",
    "title": "Berlusconi - Sogno Israele nella Ue",
    "year": "2010",
    "category": "Politica",
    "startSeconds": 0
  },
  {
    "id": "c-DU6JXN0CA",
    "title": "I Migliori Momenti Di Silvio Berlusconi 😭 😭 #shorts #viralvideo",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "T4qwlxtq4Q4",
    "title": "Silvio Berlusconi … che classe ….",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "dcccVyxOyfM",
    "title": "Travaglio e i 90 anni di Berlusconi. Dalla spolverata della sedia all'aeroporto e Villa Certosa",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "-SQWLqWVozo",
    "title": "Le VERE ORIGINI di Silvio BERLUSCONI - intervista rara",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "_q-3KHbVbTc",
    "title": "Enzo Biagi intervista Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ahH-n_zqBes",
    "title": "Marco Travaglio Racconta tutto su Silvio Berlusconi...",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "E62kWIaB2fU",
    "title": "Silvio Berlusconi, i momenti più iconici della carriera del “Cavaliere”",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "UpXOAIFFpBQ",
    "title": "\"L'Italia è il Paese che amo\": nel 1994 la 'discesa in campo' di Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "KKJ6U8KR_LU",
    "title": "Le-one, NiceKidd - BERLUSCONI",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "OvpxSsrRkXA",
    "title": "Intervista esclusiva a Silvio Berlusconi | Canale Italia  24.05.2019",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "6YaaK--IUFA",
    "title": "LA VERA VITA DI SILVIO BERLUSCONI - Berlusconi's Story",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "2ut2XGQsccI",
    "title": "\"ECCO CHI ERA SILVIO BERLUSCONI.\" Alessandro Sallusti racconta un aneddoto relativo a Berlusconi.",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "swTVkIVtcAk",
    "title": "SILVIO BERLUSCONI: “Il mio SUCCESSO ha contribuito al mantenimento dello STATO” 🎯",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "XEReMHgsNHA",
    "title": "Berlusconi sulla madre #ilcapitale #finanza #barzellette #barzelletta #berlusconi #silvioberlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "v8YGth1u784",
    "title": "L'intervista a Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "6PH5iIUos8M",
    "title": "Berlusconi lascia lo studio di Lucia Annunziata - Lucia Annunziata lascia lo studio di Anno Zero.",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "aStF2b5ryJg",
    "title": "Silvio Berlusconi – Discorso discesa in campo - 26 gennaio 1994",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "gs6dWYIhQ-k",
    "title": "Silvio Berlusconi, negli anni ‘70, alla Radiotelevisione Svizzera 🇨🇭 #silvioberlusconi #berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "jX9Na-C8q0M",
    "title": "Come BERLUSCONI si è COMPRATO il potere in Italia",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "XOjA2o7DZMc",
    "title": "Silvio Berlusconi intervistato a Mixer: correva l'anno 1994 - Oggi è un altro giorno 13/06/2023",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "6GDwGMyCguM",
    "title": "Francesco Facchinetti: \"Avrei chiesto ancora più soldi a Berlusconi\" - Ciao Maschio 03/10/2026",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "i1BhIqydFhw",
    "title": "Festa per i 90 anni di Berlusconi, David Parenzo a Francesca Pascale: \"È stata invitata?\", \"No ...",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "cvd0yeIrX7Y",
    "title": "A Napoli la festa per i 90 anni di Berlusconi: \"Per gli italiani è ancora vivente\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "I_40AX4GhpE",
    "title": "In esclusiva Antonello Caporale mostra la celebre sedia di Travaglio spazzolata da Berlusconi: ...",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "qtsOHnOqmRE",
    "title": "Berlusconi, l'arrivo degli invitati all'ultimo pranzo a Villa Certosa: da Fascina a Dell'Utri",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "gGeigi6GfNI",
    "title": "Ultima festa a Villa Certosa per ricordare Berlusconi: l'arrivo degli ospiti da Fascina a Dell'Utri",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "U5bgwAQQFhQ",
    "title": "Berlusconi intervistato in esclusiva dal Direttore di Vista nel 2016",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ycY6WKhkLSg",
    "title": "MALPENSA INTITOLATO A BERLUSCONI, TRAVAGLIO: \"GLI AVREI DEDICATO UNA TANGENZIALE\" #news #shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "lnUjY4-zeMs",
    "title": "«Siete ancora, come sempre, dei poveri comunisti»: Meloni condivide il celebre video di...",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "qelNuVyuF0c",
    "title": "BERLUSCONI: “Non bisogna perdersi d’animo!” #motivazione #crescitapersonale #imprenditore #soldi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "-5bIQts8Px0",
    "title": "Discorso motivazionale Silvio Berlusconi.  #motivazione",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "R-BiteT5NN8",
    "title": "DISCORSO Storico di BERLUSCONI... #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "jFfTQnfkzIs",
    "title": "🔴Silvio Berlusconi ,il discorso che oggi fa ancora piu' rumore",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Prg5yUgjVg8",
    "title": "Silvio Berlusconi Comunisti #berlusconi #silvioberlusconi #comunista #virale #ricordi #politico #pdl",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "vXejrAXXmkU",
    "title": "La battuta di Berlusconi: \"Vota per il Partito Comunista... No, ho sbagliato, Forza Italia\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "S1sKKvydKRE",
    "title": "BERLUSCONI FA UN BELLISSIMO DISCORSO🤩🎤 #berlusconi #podcast #discorso #motivation #shorts #mindset",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PxtUk1HB62s",
    "title": "BERLUSCONI: “Faccio una vita TERRIBILE!” 🎯",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "YUpjJmHRGGw",
    "title": "Una delle ultime apparizioni del Cavaliere Silvio Berlusconi mentre fa colazione",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "_zj3fARUKWM",
    "title": "BERLUSCONI e il suo DISCORSO da BRIVIDI😳 #berlusconi #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "F_TG9V8Bl0I",
    "title": "IL DISCORSO DI BERLUSCONI A CONFINDUSTRIA: FACCIAMO UN PO' MENO VACANZE 📺🇮🇹 #shorts #perte",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "vnH39556LNg",
    "title": "Berlusconi Asfalta Prodi dopo esser stato offeso",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "JvEg-AWxb50",
    "title": "La barzelletta su Hitler...😂 Le barzellette di Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "qDCDZj8V9bA",
    "title": "Silvio Berlusconi: \" In un paese comunista hai 3 scelte: ESILIO , CARCERE O MORIRE.\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "mrzXqPT40Zs",
    "title": "le migliori decisioni che puoi prendere nella vita - BERLUSCONI",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "iEMtmTRTY0s",
    "title": "Bisogna sempre puntare più in alto possibile | Silvio Berlusconi in un congresso del 1999",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "CIK4Jjgk3bo",
    "title": "SILVIO BERLUSCONI “Siate positivi, siate ottimisti, un imprenditore ha il dovere dell’ottimismo”",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "qO8Ff5MsHoc",
    "title": "Berlusconi :Bionda o mora?",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "sGf69Vpexow",
    "title": "Berlusconi parla di italia e immigrazione",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "bamE1UCihT4",
    "title": "#Berlusconi e i POVERI COMUNISTI",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ple4YPYK8G4",
    "title": "Berlusconi: \"Mai perdersi d'animo. Trai del bene anche dal male\" 🔥",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "_cErcYSlgbI",
    "title": "LA CELEBRE RISPOSTA DI SILVIO BERLUSCONI AI CONTESTATORI 📺🇮🇹 #shorts #perte",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Jl2t0XEZOBk",
    "title": "BERLUSCONI: “Sta parlando con il n°1 degli imprenditori italiani “ #motivazione #imprenditore #soldi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "JuZBffr5cBc",
    "title": "Chi vuole ce la fa! - Silvio Berlusconi #ambition #motivazione #berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ZwDm9FnA-f8",
    "title": "siamo l'unico paese a pagare il canone TV - Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "k9MkrhilcBg",
    "title": "Silvio Berlusconi   La Formula del Successo",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "5vjBM0Aby1k",
    "title": "Senato, standing ovation del centrodestra per Berlusconi: l'intervento integrale",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "kGvsc1zxggc",
    "title": "Berlusconi: \"Quando mi menarono i comunisti mia madre mi tirò uno schiaffo\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "wqx3-9vNNQk",
    "title": "Silvio Berlusconi - Oltre - 20 ottobre 2017",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Q18qF_xdP9s",
    "title": "Ad Perpetuam Rei Memoriam. Elezioni Politiche 2006: Romano Prodi vs. Silvio Berlusconi [03.04.2006]",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Sks2hTHNQ2Y",
    "title": "👉 INCREDIBILE! 😱 Berlusconi lo aveva annunciato nel 2006 al Congresso degli Stati Uniti d'America.",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "pF3C9TQC80E",
    "title": "Discorso di Silvio Berlusconi nel 2017, molto attuale! DA ASCOLTARE! 😊 #silvioberlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "2PkponLzCpY",
    "title": "Berlusconi - La barzelletta su Hitler (12.09.10)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "K52AArQwG7E",
    "title": "Le più belle citazioni di Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "VADkFR4OhW4",
    "title": "UN RAGAZZO UN PÒ STAGIONATO.",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "BnXB-zEagFQ",
    "title": "Discorso di Silvio Berlusconi ad Onna per il #25Aprile 2009",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "HwO5QLVM-TI",
    "title": "Discorso di Berlusconi ad Onna: \"Rispetto per chi lottò dalla parte sbagliata\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "aJxd7ckFjFk",
    "title": "Berlusconi a Mixer (1994)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "VqxmvxokTV4",
    "title": "Intervista Berlusconi - Il Senso Della Vita 24.01.2006 - canale 5",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PmCpviqhgrg",
    "title": "Matrix - Berlusconi Dilberto (10/03/2006)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "fWv0eMEBg1g",
    "title": "IL REGISTA DI BERLUSCONI GASPAROTTI RACCONTA I SEGRETI DELLA SUA COMUNICAZIONE #news #shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "XPeXjMiW1vY",
    "title": "la PRIMA INTERVISTA di BERLUSCONI nel 1977😳 #berlusconi #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "LVoC5xinQF4",
    "title": "Silvio Berlusconi e la sua donna ideale, da Mixer di Giovanni Minoli  #berlusconi #silvioberlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "mzZRhCK85fY",
    "title": "L'attività imprenditoriale di Berlusconi | Silvio Berlusconi intervistato da Paolo Del Debbio",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "URBrdQDGKVw",
    "title": "I grandi valori di Silvio Berlusconi | Dall'intervista di Giovanni Minoli nel 1994",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "SIlLrenaE04",
    "title": "Archivi di Paglia - I nuovi comici. Silvio Berlusconi ospite di Vespa a Porta a Porta [11.02.2004]",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PctxQkwXXwc",
    "title": "Silvio Berlusconi ospite del Maurizio Costanzo Show: un video cult del Presidente #liberoquotidiano",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "HVluY_PQRaU",
    "title": "Berlusconi - Ma cosa ci fa Ibra da me? To be continued…(05.10.22)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "4GerVw1DqZs",
    "title": "Silvio Berlusconi parla dei suoi figli in una conferenza stampa da premier @AgenziaVista #libero",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ZHD6oBHSoX8",
    "title": "#SilvioBerlusconi: L'intervista storica del 1977 sul Consorzio in Italia",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "BZikQp8PV9k",
    "title": "\"Ho conosciuto Berlusconi\" 👀 con #davidparenzo #podcast #marcocappelli #gurulandia",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ynpPUyanuMg",
    "title": "Berlusconi fa i complimenti a una ragazza per i cani 🐶🐾🕊️#berlusconi #shortvideo #cane #rip",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "KD2fnFcQoRE",
    "title": "Enzo Biagi intervista Silvio Berlusconi | Intervista del 1986",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "X-tUmCgFGY0",
    "title": "Berlusconi e la guerra in Ucraina. le sue previsioni nel 2014",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "oVHmCIydE7A",
    "title": "Berlusconi riappare in video a un mese dal ricovero: \"Ma che ci faccio qui in ospedale?\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "WVu1M2QOzcs",
    "title": "LA STIMA (NON DETTA) DI BERLUSCONI. MARCO TRAVAGLIO passa dal BSMT!",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "x8ZSfH_rCvo",
    "title": "Silvio Berlusconi off camera 🔥 con #giuliainnocenzi  #marcocappelli #podcast #gurulandia",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "766Sba7PY5Y",
    "title": "PierSilvioBerlusconi licenzia BarbaraD'Urso💀  #berlusconi  #italy #viral #video #shorts #shortvideo",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "xbCqcir2GhI",
    "title": "#boldi va #berlusconi !! #muschioselvaggio #podcastitalia",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "cOmXt4pCBTU",
    "title": "Archivi di Paglia - Il \"liberale\" e il \"comunista\" [Porta a Porta, 11.01.2006]",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "iLNKCeqHy_o",
    "title": "Berlusconi scherza coi tifosi: “Vi devo salutare, devo andare a puttane”",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Z6dBojFL7bA",
    "title": "Intervista a Silvio Berlusconi da Santoro a Tempo reale 1995 (Parte 1)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "snQzhUzoH-c",
    "title": "Intervista a Silvio Berlusconi da Santoro a Tempo reale 1995 (Parte 2)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ES9RvhY2d-U",
    "title": "intervista a Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "_fhUgblkebU",
    "title": "Intervista a Silvio Berlusconi a palazzo Grazioli",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "l4O81bv_x40",
    "title": "BERLUSCONI VS LILLI GRUBER: \"Il suo modo di fare televisione non è obiettivo!\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "-REjQ_Hl9Qw",
    "title": "Con questo DISCORSO di Flavio Briatore capirai perché BERLUSCONI rimarrà una Leggenda",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "0zA-VtH8_yg",
    "title": "Berlusconi Show",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "GdMPAAgVD8M",
    "title": "Berlusconi show ❤️",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "9O5JOaVDuEA",
    "title": "Berlusconi imbarazza Canalis: \"Ha bisogno di uomini fatti!\"#berlusconi #shorts #tv #cult #intervista",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "3JygrJAvTvY",
    "title": "IL MEGLIO DI BERLUSCONI #businessgeneration #imprenditore",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "0zb0sW-k7b0",
    "title": "BERLUSCONI LITIGA in Diretta Tv😳 #berlusconi #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "F6ISeitug8I",
    "title": "Berlusconi asfalta Santoro 😂 #riflessioni #shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "dqKDo-P0x2I",
    "title": "BERLUSCONI A CENA FUORI",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "hwJqSdjubn0",
    "title": "luì Era Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "583zUdFPEzU",
    "title": "Berlusconi CHIAMAVA IN DIRETTA Sandro Piccinini",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "nPjce1nJTsM",
    "title": "SILVIO NAZIONALE #calcio #seriea #goat #berlusconi #milan",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "VP-b6DRNaG8",
    "title": "Berlusconi-show: gli ultimi dieci anni tra gag e gaffe",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "fUWy4kEsg7M",
    "title": "Berlusconi show al Quirinale",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "8r5UMaiE8Uo",
    "title": "Lo storico braccio di ferro Tv tra Silvio Berlusconi e Achille Occhetto",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "xmwPVW00OFk",
    "title": "La barzelletta di Berlusconi: \"Ho chiesto a una ragazza come mai hai avuto così pochi uomini...\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "ZOKIuYbMXgI",
    "title": "This World - The Berlusconi Show (2010)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "zvKHxB1m0sE",
    "title": "Quando Silvio Berlusconi tirò un cartello in testa a Marco Damilano",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "a0ExxoWXCxU",
    "title": "Silvio Berlusconi racconta come è diventato imprenditore - Raro - Sottotitolato",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "G0MoG3fcz7o",
    "title": "Silvio Berlusconi a Giovanni Floris: 'Non accetto più che lei mi interrompa così, mi deve far ...",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "j8CZ9AT-bOQ",
    "title": "Berlusconi alla reporter Bbc: \"Se stringi così forte la mano nessuno ti sposerà mai\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "4hOWaogyTws",
    "title": "Silvio Berlusconi - Show a Lampedusa - \"Ho comprato casa\"",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "lShzK4C95Lw",
    "title": "Berlusconi e la barzelletta sull'agricoltore. Poi il mistero finale di una battuta",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "TPY0urdeEDE",
    "title": "Berlusconi e la barzelletta sul Commendator Bestetti",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "tGGaZkdJTEw",
    "title": "Silvio Berlusconi, 8 Barzellette inedite raccontate dal Cavaliere, momenti molto divertenti",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Y5MqhoPZlbM",
    "title": "Berlusconi e la barzelletta sulla pipì con Confalonieri - 2018",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "DWX6nprZj_w",
    "title": "racconto di berlusconi sul bunga bunga",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "_vDaObK75kg",
    "title": "😂 Silvio Berlusconi e la storica barzelletta del “napoletano sull’aereo”  #Berlusconi #Barzellette",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "8J3F3C5xyW0",
    "title": "la BARZELLETTA NAPOLETANA di BERLUSCONI😳 #berlusconi #cedroitalico #napoli",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "z01sG6qBGpU",
    "title": "Berlusconi 💟 Barzelletta 🤣",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PIRQIvYiNvc",
    "title": "Lo sapete perché il Bue non ha paura di cadere ? L'ultima di Berlusconi Barzelletta 2018",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "7tyBDyEgRYM",
    "title": "Berlusconi racconta la barzelletta di carletto",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "g-0FdHDf7ZE",
    "title": "Berlusconi bestemmia in una barzelletta su Rosy Bindi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "e9BjhFi3GVo",
    "title": "Silvio Berlusconi Barzelletta INTER ! #shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Oya3zeoGh-8",
    "title": "Berlusconi, barzelletta del cinese 😂💟 (PT2)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "038uR6wxzqA",
    "title": "Berlusconi - La barzelletta su Hitler Shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "z32KzN39468",
    "title": "Berlusconi, barzelletta del cinese 🤣💟 (PT1)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "CTBTAaBAOQY",
    "title": "BERLUSCONI BESTEMMIA😳 (per una barzelletta) #berlusconi #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "efxEwbkxEtI",
    "title": "BERLUSCONI e la BARZELLETTA del BUE😳 #berlusconi #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "qV5dlYfaNlA",
    "title": "Berlusconi, barzelletta su R🤣si Bind! (Meravigliosa 😆)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "vrJ8rFw1uAw",
    "title": "Berlusconi su Melania Trump #ilcapitale #barzellette #trump #melania #berlusconi #silvioberlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "wJb2UPBClYk",
    "title": "La conoscevate? 🕊️👼 #berlusconi #short #barzelletta #rip",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "K_Md2o7QL8Q",
    "title": "Berlusconi, barzelletta del contadino 😂💟 (PT1)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "04ItDjBd5N4",
    "title": "BERLUSCONI e Le BARZELLETTE... #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "YdK3A2Mwgnw",
    "title": "LA BARZELLETTA DI BERLUSCONI (2011)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "33X-x0Ssyzg",
    "title": "BERLUSCONI racconta la barzelletta diquando ha parlato col Padreterno😂❤️#berlusconi #short",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "91E4NycCHLc",
    "title": "Berlusconi, barzelletta del contadino 😂💟 (PT2)",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "2yK_XevQB4s",
    "title": "La BARZELLETTA del BERLUSCA😳 (sui cinesi) #berlusconi #cedroitalico",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "JfCJNLgfnXA",
    "title": "Una volta Berlusconi disse… 🕊️💫❤️ #berlusconi #rip #shortvideo #barzelletta",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "26wC0_9CemI",
    "title": "Berlusconi contro Rosy",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "3YcFtie_mp8",
    "title": "LA BARZELLETTA DEL COMMENDATOR BESTETTI",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "IVoRPltv1YY",
    "title": "Berlusconi - Ho la fila di donne che mi vogliono sposare",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "Svv9tUzdvok",
    "title": "Carabinieri e comunisti, la barzelletta di Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "nHcrZn50yWE",
    "title": "Elezioni Sicilia, Berlusconi scherza con la hostess: ''Mi ha dato 59 anni''",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "yhjqXCj7XcU",
    "title": "Silvio Berlusconi - Barzelletta sulle gambe",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "2kSKVJ_OPFA",
    "title": "Stupendo video di Berlusconi che racconta una barzelletta",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "F9HO4SB3aHw",
    "title": "Berlusconi recita una barzelletta in napoletano",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "guVz-zEgPkU",
    "title": "Berlusconi racconta una barzelletta di Putin, imbarazzo in sala",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "g_KXkUinxL8",
    "title": "Maldini parla di come Berlusconi è diventato primo ministro grazie al Milan",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "y6hjyGhs4n0",
    "title": "L’amore di Berlusconi per il Milan❤️ #calcio",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "jIGUZ8p-i6Y",
    "title": "Quando Berlusconi Regalò l'orologio del Milan a Bertinotti",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "cl17CFU60mI",
    "title": "GATTUSO SPIEGA IL MILAN #calcio #goat #milan #gattuso #maldini #costacurta #berlusconi #spogliatoio",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "FYqYvx3ex2Q",
    "title": "Storia del Ac Milan a partire dall'arrivo di Silvio Berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "hMIvKJVvMv4",
    "title": "IL MILAN DI BERLUSCONI E GALLIANI. ALESSANDRO NESTA PASSA DAL BSMT!",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "HeQSnqiUgoY",
    "title": "Berlusconi e i giocatori del Milan: Un presidente unico! #shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "gNfy54_KO-0",
    "title": "💔Le PRIME PAROLE di BERLUSCONI al MILAN #Shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PfKvRjiGBUs",
    "title": "Berlusconi: Il Mio Debito, il Milan e il Calcio Italiano #shorts #capello",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "qgj8ONW3mkg",
    "title": "Berlusconi rimprovera i giocatori del Milan #calcio #seriea #acmilan #berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "uE5Rssj6grU",
    "title": "Il club perfetto? Il Milan di Berlusconi.",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PXJEtzp7K-o",
    "title": "“AL MILAN QUANDO ARRIVAVA BERLUSCONI NOI…” #doppiopassopodcast #calcio #bressan #berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "IQpKCvVVNCM",
    "title": "Galliani sull'acquisto del Milan  #ilcapitale #acmilan #berlusconi #galliani #adrianogalliani",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "lIh97M2dUNA",
    "title": "BRAIDA racconta BERLUSCONI dopo trent’anni insieme al MILAN | #shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "WdxacuLOgJI",
    "title": "Quando Berlusconi tolse i numeri 3 e 6 😍❤️🖤 #milan #calcio #shorts #perte #maldini #berlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "VG6QqMDZDNE",
    "title": "🔙 QUANDO BERLUSCONI ABBANDONÒ il SUO MILAN #Shorts",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "jCMyaIy34IU",
    "title": "Silvio Berlusconi funerali: l'omaggio straziante dei tifosi del Milan #milan #silvioberlusconi",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  },
  {
    "id": "PE24xdO4388",
    "title": "LUCA SERAFINI RACCONTA UN ANEDDOTO SU BERLUSCONI AL MILAN 🔴⚫️",
    "year": "Archivio",
    "category": "Berlusconi TV",
    "startSeconds": 0
  }
];

if (typeof window !== "undefined") {
  window.BERLUSCONI_VIDEOS = BERLUSCONI_VIDEOS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BERLUSCONI_VIDEOS };
}
