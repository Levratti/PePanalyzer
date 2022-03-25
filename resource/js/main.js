var app = new Vue({
    el: '#app',
    data: {
        LCList: [],
        loadFileData: {},
        page_loadFile: true,
        page_LCList: false,
        btnLoad_isDisabled: false,
        page_LCList_loader: false,
    },
    computed: {
        activeLCL() {
            return this.LCList.filter(lcl => lcl.SELECT == true);
        },
        deactiveLCL() {
            return this.LCList.filter(lcl => lcl.SELECT == false);
        }
    },
    updated() {
        M.Datepicker.init(this.$refs.datepickerStart, {
            format: "dd/mm/yyyy"
        });
        M.Datepicker.init(this.$refs.datepickerEnd, {
            format: "dd/mm/yyyy"
        });

        M.Chips.init(document.querySelectorAll('.chips'), {data:  ["Premi", "Percentuale", "Smartest"]});
    },
    methods: {
        loadFile(selectedFile) {
            if (selectedFile && window.Worker) {

                this.page_LCList_loader = true;
                this.btnLoad_isDisabled = true;
                const worker = new Worker('resource/js/worker.js'); //https://dog.ceo/dog-api/
                worker.postMessage(selectedFile);
                worker.onmessage = (e) => {

                    this.loadFileData = e.data; //uso worker.js per ricevere già JSON dal file EXCEL, problema consite nel riceve due volte, visto che ci sono pagine diverse(si potrebbe valuitare di utlizare un foglio per un contratto).
                    this.LCList = [];

                    this.loadFileData.forEach(row => {
                        const found = this.LCList.some(oneLCL => oneLCL.CODICE_LCL === row.CODICE_LCL);
                        if (!found) this.LCList.push({
                            "CODICE_CONTRATTO": row.CODICE_CONTRATTO,
                            "CODICE_LCL": row.CODICE_LCL,
                            "STATO_LCL": row.STATO_LCL,
                            "SELECT": true,
                        });
                    });

                    this.page_LCList_loader = false;
                    this.page_loadFile = false;
                    this.page_LCList = true;
                    this.btnLoad_isDisabled = false;

                    worker.terminate();
                }
            }
        },
        backLCList() {
            this.page_loadFile = true;
            this.page_LCList = false;
        },
        changeLCL(value) {
            value.SELECT = !value.SELECT;
        }
    }
});



/*let workbook = e.data; // uso worker.js per caricare e leggere il file, ma per conversione delle pagine diverse uso main.js
workbook.SheetNames.forEach(sheet => {
    let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    this.loadFileData = rowObject;
    this.LCList = [];

    rowObject.forEach(row => {
        const found = this.LCList.some(oneLCL => oneLCL.CODICE_LCL === row.CODICE_LCL);
        if (!found) this.LCList.push({
            "CODICE_CONTRATTO": row.CODICE_CONTRATTO,
            "CODICE_LCL": row.CODICE_LCL,
            "STATO_LCL": row.STATO_LCL,
            "SELECT": true,
        });
    });

    this.page_addLCL = false;
    this.page_loadFile = false;
    this.page_LCList = true;
});*/

//worker.terminate();

/* https://ru.vuejs.org/v2/guide/forms.html
<input type="checkbox" id="jack" value="Джек" v-model="checkedNames">
<label for="jack">Джек</label>
<input type="checkbox" id="john" value="Джон" v-model="checkedNames">
<label for="john">Джон</label>
<input type="checkbox" id="mike" value="Майк" v-model="checkedNames">
<label for="mike">Майк</label>
<br>
<span>Отмеченные имена: {{ checkedNames }}</span>
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
*/