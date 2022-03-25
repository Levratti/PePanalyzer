window.changeCN = function (element) {
    if (element.parentElement.id == "addListLCL" && document.querySelector('#addListLCL').children.length > 1) {
      element.lastChild.innerHTML = "&plus;";
      document.querySelector("#removeListLCL").appendChild(element);

      for (let i = 0; i < saveListLCL.length; i++) {
        if (saveListLCL[i].CODICE_LCL == element.id) {
          saveListLCL[i].SELECT = false;
        }
      }
    } else if (element.parentElement.id == "removeListLCL") {
      element.lastChild.innerHTML = "&times;";
      document.querySelector("#addListLCL").appendChild(element);

      for (let i = 0; i < saveListLCL.length; i++) {
        if (saveListLCL[i].CODICE_LCL == element.id) {
          saveListLCL[i].SELECT = true;
        }
      }
    }
    
    rangeDate(saveListLCL)

    if (document.querySelector('#removeListLCL').children.length > 0) {
      document.querySelector("#txtRemoveList").style.display = "block";
    } else {
      document.querySelector("#txtRemoveList").style.display = "none";
    }
  }

  window.backLCList = function () {
    document.querySelector("#addListLCL").innerHTML = "<!-- Injection JavaScript -->";
    document.querySelector("#removeListLCL").innerHTML = "<!-- Injection JavaScript -->";

    document.querySelector('#selectLCL').style.display = 'none';
    document.querySelector('#loadFile').style.display = 'block';
  }

  window.backOp = function () {
    document.querySelector("#optionsList").innerHTML = "<!-- Injection JavaScript -->";

    document.querySelector('#optionsTab').style.display = 'none';
    document.querySelector('#selectLCL').style.display = 'block';
  }

  window.backBeneficit = function () {
    document.querySelector("#listCnLCL").innerHTML = "<!-- Injection JavaScript -->";
    document.querySelector('#BeneficitTab').style.display = 'none';
    document.querySelector('#selectLCL').style.display = 'block';
  }