/**
 * SILVO TV - Database Ufficiale dei 30 Video di Silvio Berlusconi
 * Video verificati, completi di metadati storici e timing di highlight.
 * Compatibile sia come script classico (file://) che come modulo.
 */

const BERLUSCONI_VIDEOS = [
  {
    id: "DWETaMSRG-c",
    title: "L'Italia è il paese che amo (La Discesa in Campo)",
    year: "1994",
    category: "Politica & Storia",
    highlight: "Il celebre discorso inaugurale che ha cambiato la politica italiana",
    startSeconds: 0
  },
  {
    id: "FYl3BCwR0GA",
    title: "La pulizia della sedia di Marco Travaglio da Santoro",
    year: "2013",
    category: "Show Televisivo",
    highlight: "A Servizio Pubblico, Berlusconi pulisce la sedia prima di sedersi",
    startSeconds: 15
  },
  {
    id: "Ha_F4vxjDMA",
    title: "Il celebre 'Cucù' ad Angela Merkel",
    year: "2008",
    category: "Diplomazia Spettacolare",
    highlight: "Vertice italo-tedesco a Trieste: Berlusconi sbuca da dietro il monumento",
    startSeconds: 0
  },
  {
    id: "G-ibCMEUApU",
    title: "Scontro con Martin Schulz: 'La proporrò per il ruolo di Kapò'",
    year: "2003",
    category: "Parlamento Europeo",
    highlight: "Il clamoroso scontro all'Europarlamento a Strasburgo",
    startSeconds: 10
  },
  {
    id: "5bJZKCps6bw",
    title: "Obama è giovane, bello e anche abbronzato",
    year: "2008",
    category: "Gaffe Internazionali",
    highlight: "Conferenza stampa a Mosca su Barack Obama",
    startSeconds: 0
  },
  {
    id: "Q_P2Fwg0UEM",
    title: "Fini: 'Che fai, mi cacci?' - Scontro Direzione PdL",
    year: "2010",
    category: "Politica & Duelli",
    highlight: "Il dito puntato e la storica rottura in diretta nazionale",
    startSeconds: 25
  },
  {
    id: "ULSnN1G-C1k",
    title: "Discorso di Natale al Monza: 'Un pullman di...'",
    year: "2022",
    category: "Calcio & Passione",
    highlight: "Promessa goliardica ai giocatori dell'AC Monza per la vittoria con le grandi",
    startSeconds: 10
  },
  {
    id: "ZEHEHd-JUUg",
    title: "Le storiche 'Corna' al vertice UE di Caceres",
    year: "2002",
    category: "Diplomazia Spettacolare",
    highlight: "Foto di gruppo dei ministri degli esteri in Spagna",
    startSeconds: 5
  },
  {
    id: "CHAuMuykKDw",
    title: "La barzelletta della mela con Davide Mengacci",
    year: "1993",
    category: "Barzellette & Umorismo",
    highlight: "Siparietto comico televisivo prima della discesa in campo",
    startSeconds: 0
  },
  {
    id: "N3YwoTPMVJI",
    title: "Telefonata al vetriolo a Ballarò con Giovanni Floris",
    year: "2013",
    category: "Show Televisivo",
    highlight: "Irruzione telefonica in diretta per contestare i sondaggi",
    startSeconds: 20
  },
  {
    id: "sxvS7tg6Vz8",
    title: "Telefonata a Gad Lerner: 'Postribolo televisivo!'",
    year: "2011",
    category: "Show Televisivo",
    highlight: "L'irata telefonata in diretta a L'Infedele su La7",
    startSeconds: 10
  },
  {
    id: "Q47TgVu5VRM",
    title: "Berlusconi rimprovera i giocatori del Milan",
    year: "2015",
    category: "Calcio & Passione",
    highlight: "Discorso motivazionale e severo negli spogliatoi di Milanello",
    startSeconds: 0
  },
  {
    id: "WXf-YbsSh0Y",
    title: "Inno Ufficiale: 'Meno male che Silvio c'è'",
    year: "2008",
    category: "Inni & Canzoni",
    highlight: "Il videoclip dell'inno più iconico e canticchiato",
    startSeconds: 15
  },
  {
    id: "d42v75gskcM",
    title: "Standing Ovation al Congresso degli Stati Uniti",
    year: "2006",
    category: "Politica Internazionale",
    highlight: "Discorso a camere congiunte a Washington con applausi scroscianti",
    startSeconds: 30
  },
  {
    id: "6ajR__iS-xY",
    title: "La barzelletta su se stesso, Dio e San Pietro",
    year: "2019",
    category: "Barzellette & Umorismo",
    highlight: "Il Cavaliere racconta una barzelletta sul suo arrivo in Paradiso",
    startSeconds: 5
  },
  {
    id: "lz8Q910TJUk",
    title: "Rosy Bindi: 'È sempre più bella che intelligente'",
    year: "2009",
    category: "Scontri TV",
    highlight: "Telefonata a Porta a Porta contro Rosy Bindi",
    startSeconds: 0
  },
  {
    id: "1uMuV2iKWpw",
    title: "Berlusconi canta canzoni francesi con Mariano Apicella",
    year: "2003",
    category: "Inni & Canzoni",
    highlight: "La passione per la chanson parigina alla chitarra",
    startSeconds: 10
  },
  {
    id: "HwTdfamx448",
    title: "Scontro infuocato con Lilli Gruber a Otto e Mezzo",
    year: "2013",
    category: "Show Televisivo",
    highlight: "Battibecco memorabile sui tempi di parola e le domande scomode",
    startSeconds: 15
  },
  {
    id: "97oJH5dWgbE",
    title: "Comizio oceanico a Piazza San Giovanni: 'Siamo un milione!'",
    year: "2010",
    category: "Politica & Comizi",
    highlight: "Folla oceanica a Roma e l'attacco frontale ai rivali",
    startSeconds: 20
  },
  {
    id: "gy_pouK4q8k",
    title: "Il gesto del 'mitra' alla giornalista russa accanto a Putin",
    year: "2008",
    category: "Diplomazia Spettacolare",
    highlight: "Conferenza stampa in Sardegna: la mimica del mitra che fece il giro del mondo",
    startSeconds: 0
  },
  {
    id: "NaNgpQDZKOg",
    title: "Consigli tattici e punzecchiature a mister Allegri",
    year: "2012",
    category: "Calcio & Passione",
    highlight: "Le lezioni di schema e tattica al tecnico del Milan",
    startSeconds: 5
  },
  {
    id: "pYDnTm2OUwk",
    title: "Barzelletta dell'aereo che precipita: Papa, Putin e Silvio",
    year: "2021",
    category: "Barzellette & Umorismo",
    highlight: "I paracadute scarseggiano e il più intelligente del mondo prende lo zaino",
    startSeconds: 0
  },
  {
    id: "XIdp6zUoVCw",
    title: "Terremotati d'Abruzzo: 'Prendetela come un weekend in campeggio'",
    year: "2009",
    category: "Gaffe & Cronaca",
    highlight: "Visita alle tendopoli dell'Aquila trasmessa dalla TV tedesca",
    startSeconds: 0
  },
  {
    id: "JIcSlkWWCtg",
    title: "La firma del 'Contratto con gli Italiani' da Bruno Vespa",
    year: "2001",
    category: "Show Televisivo",
    highlight: "Cinque punti solenni firmati in diretta a Porta a Porta prima del voto",
    startSeconds: 15
  },
  {
    id: "sO5Hw0LHw2I",
    title: "TeleMilano 58: La nascita della televisione commerciale",
    year: "1978",
    category: "Imprenditoria & TV",
    highlight: "L'inizio dell'impero Fininvest dai sotterranei di Milano 2",
    startSeconds: 10
  },
  {
    id: "kuMWvXduwNY",
    title: "Le origini dello slogan 'Mi consenta'",
    year: "1994",
    category: "Tormentoni & TV",
    highlight: "La frase che è entrata nel vocabolario e nel costume italiano",
    startSeconds: 5
  },
  {
    id: "r3P6TrJu_Yk",
    title: "Attacco alle toghe rosse e alla magistratura politicizzata",
    year: "2009",
    category: "Politica & Giustizia",
    highlight: "Intervista al vetriolo rilasciata ai media internazionali",
    startSeconds: 15
  },
  {
    id: "yxDz72vwACQ",
    title: "Il celebre incontro e baciamano al leader libico Gheddafi",
    year: "2010",
    category: "Diplomazia Spettacolare",
    highlight: "Accoglienza di stato e trattato di amicizia italo-libico",
    startSeconds: 5
  },
  {
    id: "aPOqo6fWxvU",
    title: "Il commosso siparietto in piazza a Bologna",
    year: "2015",
    category: "Politica & Comizi",
    highlight: "Ritorno in mezzo alla folla tra strette di mano e battute",
    startSeconds: 10
  },
  {
    id: "CHZwrqhcxCQ",
    title: "Discorso storico alla Knesset: 'Sogno Israele nella UE'",
    year: "2010",
    category: "Politica Internazionale",
    highlight: "Discorso solenne al parlamento israeliano a Gerusalemme",
    startSeconds: 20
  }
];

// Esportazione universale
if (typeof window !== 'undefined') {
  window.BERLUSCONI_VIDEOS = BERLUSCONI_VIDEOS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BERLUSCONI_VIDEOS };
}
