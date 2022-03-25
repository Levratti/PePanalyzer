let CalcTable = {
    EUP: [
        {
            key: "8400149083",
            label: "Parma",
            MF: 4.15,
            TF: 6.00,
            M2: 6.00
        }, {
            key: "8400150707",
            label: "Ferrara",
            MF: 3.57,
            TF: 5.90,
            M2: 5.90
        }, {
            key: "8400141787",
            label: "Firenze",
            MF: 3.83,
            TF: 6.40,
            M2: 7.00
        }, {
            key: "8400124337",
            label: "Reggio-Modena 1",
            MF: 4.44,
            TF: 6.90,
            M2: 6.40
        }, {
            key: "8400118979",
            label: "Rovigo 1",
            MF: 5.55,
            TF: 6.90,
            M2: 0.00
        }, {
            key: "8400141790",
            label: "Vicenza",
            MF: 4.60,
            TF: 6.40,
            M2: 7.00
        }, {
            key: "8400149736",
            label: "Mantova-Cremona",
            MF: 4.08,
            TF: 5.90,
            M2: 5.90
        }, {
            key: "8400149816",
            label: "Padova-Rovigo 2",
            MF: 4.00,
            TF: 5.90,
            M2: 5.90
        }, {
            key: "8400151041",
            label: "Reggio-Modena 2",
            MF: 4.15,
            TF: 5.90,
            M2: 5.90
        }
    ],

    MF: { //Object.keys(CalcTable.CEP[2]);   //Object.keys(CalcTable["MF"])
        //TOT: 0.00, //TEST
        CON: 2.50,
        AV: 1.20,
        INT: 1.00,
    },
    TF: {
        CON: 3.50,
        AV: 1.20,
        INT: 1.00,
    },
    M2: {
        CON: 4.50,
        AV: 1.20,
        INT: 1.00,
    },
    MF_R: {
        CON: 3.50,
        AV: 1.20,
        GG1: 3.50,
        GG2: 2.50,
        GG3: 1.50,
        INTR: 1.00,
    },
    TF_R: {
        CON: 3.50,
        AV: 1.20,
        INT: 1.00,
    },
    Label: {
        CON: "Eseguiti",
        GG1: "Premio Accelerazione <30 giorni",
        GG2: "Premio Accelerazione 30<>90 giorni",
        GG3: "Premio Accelerazione 90<>120 giorni",
        INT: "Premio interni",
        INTR: "Premio interni ripassi(no <30 giorni)",
        AV: "Accesso a Vuoto",
        TOT: "Totali",
        ANN: "Annullati",

        MF: "MF-TF",
        TF: "15/30",
        M2: "M2",
        MF_R: "MF-TF Ripassi",
        TF_R: "15/30 Ripassi",

        CN: "Contratto",
        LCL: "LCL",
        TYPE: "Tipo LCL",
        DATE: "Data inizio LCL",

        ST_Annullato: "SmarTest Annullato",
        ST_Carico: "SmarTest Sotto soglia",
        ST_Connect: "SmarTest Errore di conessione",
        ST_Eseguito: "SmarTest Eseguito",

        AF31112: "Antonio Anzà",
        AE100490: "Matteo Arienti",
        AE95560: "Adrian Balan",
        AE100491: "Pietro Barollo",
        AF23848: "Antonio Biondi",
        AE67629: "Stefano Brutti",
        AF18168: "Gabriele Bruzzese",
        AE97155: "Giovanni Buono",
        AE92683: "Riccardo Chiavegato",
        AF26687: "Loris Compagnone",
        AF31148: "Marco Dall'Ara",
        AE75733: "Stefano Di Maggio",
        AE92732: "Federico Doati",
        AF25298: "Massimo Esposito",
        AF35537: "Nicolas Ferriani",
        AF26680: "Vincenzo Filippone",
        AE69851: "Nicola Gasparetto",
        AF26918: "Giuliano Gherghel",
        AF01725: "Alberto Ghidoni",
        AF25294: "Michele Golinelli",
        AF23844: "Ivan Guidi",
        AF34209: "Luca Istrefi",
        AF32974: "Zishan Khalid",
        AF36828: "Nicola La Gioia",
        AE102136: "Matteo Malagoli",
        AE100494: "Alessio Mascherini",
        AF09284: "Andrea Meloni",
        AF31110: "Ali Hassan Mohammad",
        AF32975: "Jamshaid Ali Mohammad",
        AF23904: "Vincenzo Monte",
        AF26683: "Alessandro Murgia",
        AF25454: "Alessandro Musto",
        AF25451: "Ali Naghman",
        AF25800: "Niccolò Panchetti",
        AF03607: "Daniele Pecchia",
        AF23245: "Luca Rinaldi",
        AF11783: "Stefano Rossati",
        AE100518: "Christopher Segantin",
        AF23843: "Lorenzo Sejdia",
        AF26686: "Bilal Selloum",
        AF21169: "Marco Serico",
        AF26685: "Davide Signorello",
        AF37532: "Gabriel Slatineanu",
        AF26681: "Catalin Topala",
        AE100519: "Luca Venturi",
        AF31173: "Gian Maria Zanardi",
        AF34208: "Alessandro Zanirato",
        AF05109: "Mattia Zucchi",

        AF46032: "Khalid Selloum",
        AF10025: "Di Natale Giuseppe",
        AF35836: "Delmonte Gianmaria",
        AE83344: "Bini Eric",
        AF47355: "Amorini Luca",
        AF52878: "Dattisi Michael",
        AF52877: "Niscola Francesco",
        AF51344: "Corradi Marco",

        AF13827: "Casadei Lorenzo",
        AF35837: "Rossi Emanuele",
        AE100492: "Rus",
        AF23849: "Alcaza Nicolae",

    },
}


/*

<div id="litepicker"></div>
            <script>
              const picker = new Litepicker({
                element: document.getElementById('litepicker'),
                format: "DD-MM-YYYY",
                inlineMode: true,
                singleMode: false,
                lang: "it-IT",
                tooltipText: {"one":"giorno","other":"giorni"},
                setup: (picker) => {
                  picker.on('selected', (dateStart, dateEnd) => {
                    console.log(dateStart.dateInstance);
                    console.log(dateEnd.dateInstance);
                  });
                },
              });
            </script>
            <style>
              :root {
                --litepicker-is-start-color-bg: #4CAF50 !important;
                --litepicker-is-end-color-bg: #4CAF50 !important;
                --litepicker-is-in-range-color: #7be47f !important;
                --litepicker-day-color-hover: #2c8a30 !important;
                --litepicker-button-prev-month-color-hover: #4CAF50 !important;
                --litepicker-button-next-month-color-hover: #4CAF50 !important;
                --litepicker-day-width: 30px;
              }
            </style>

*/
