// https://www.omnicalculator.com/health/anion-gap

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const aniongapRadio = document.getElementById('aniongapRadio');
const NaRadio = document.getElementById('NaRadio');
const ClRadio = document.getElementById('ClRadio');
const HCO3Radio = document.getElementById('HCO3Radio');

let aniongap;
let Na = v1;
let Cl = v2;
let HCO3 = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

aniongapRadio.addEventListener('click', function() {
  variable1.textContent = 'Na';
  variable2.textContent = 'Cl';
  variable3.textContent = 'HCO₃';
  Na = v1;
  Cl = v2;
  HCO3 = v3;
  result.textContent = '';
});

NaRadio.addEventListener('click', function() {
  variable1.textContent = 'Anion gap';
  variable2.textContent = 'Cl';
  variable3.textContent = 'HCO₃';
  aniongap = v1;
  Cl = v2;
  HCO3 = v3;
  result.textContent = '';
});

ClRadio.addEventListener('click', function() {
  variable1.textContent = 'Anion gap';
  variable2.textContent = 'Na';
  variable3.textContent = 'HCO₃';
  aniongap = v1;
  Na = v2;
  HCO3 = v3;
  result.textContent = '';
});

HCO3Radio.addEventListener('click', function() {
  variable1.textContent = 'Anion gap';
  variable2.textContent = 'Na';
  variable3.textContent = 'Cl';
  aniongap = v1;
  Na = v2;
  Cl = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(aniongapRadio.checked)
    result.textContent = `Anion gap = ${computeaniongap().toFixed(2)}`;

  else if(NaRadio.checked)
    result.textContent = `Na = ${computeNa().toFixed(2)}`;

  else if(ClRadio.checked)
    result.textContent = `Cl = ${computeCl().toFixed(2)}`;

  else if(HCO3Radio.checked)
    result.textContent = `HCO₃ = ${computeHCO3().toFixed(2)}`;
})

// calculation

// AG = [Na⁺] − [Cl⁻] - [HCO₃⁻]

function computeaniongap() {
  return Number(Na.value) - Number(Cl.value) - Number(HCO3.value);
}

function computeNa() {
  return Number(aniongap.value) + Number(Cl.value) + Number(HCO3.value);
}

function computeCl() {
  return Number(Na.value) - Number(aniongap.value) - Number(HCO3.value);
}

function computeHCO3() {
  return Number(Na.value) - Number(Cl.value) - Number(aniongap.value);
}