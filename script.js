const elementMasses = {
    // Añadir más elementos según sea necesario
    //"H": 1.008,
    //"He": 4.0026,
    //"Li": 6.94,
    //"Be": 9.0122,
    //"B": 10.81,
    //"C": 12.01,
    //"N": 14.01,
    //"O": 16.00,
    //"F": 19.00,
    //"Ne": 20.18,
    // Añadir más elementos según sea necesario
    "H": 1.01,
    "He": 4,
    "Li": 6.94,
    "Be": 9.01,
    "B": 10.81,
    "C": 12.01,
    "N": 14.01,
    "O": 16,
    "F": 19,
    "Ne": 20.18,
    "Na": 22.99,
    "Mg": 24.31,
    "Al": 26.98,
    "Si": 28.09,
    "P": 30.97,
    "S": 32.07,
    "Cl": 35.45,
    "Ar": 39.95,
    "K": 39.1,
    "Ca": 40.08,
    "Sc": 44.96,
    "Ti": 47.87,
    "V": 50.94,
    "Cr": 52,
    "Mn": 54.94,
    "Fe": 55.85,
    "Co": 58.93,
    "Ni": 58.69,
    "Cu": 63.55,
    "Zn": 65.38,
    "Ga": 69.72,
    "Ge": 72.63,
    "As": 74.92,
    "Se": 78.96,
    "Br": 79.9,
    "Kr": 83.8,
    "Rb": 85.47,
    "Sr": 87.62,
    "Y": 88.91,
    "Zr": 91.22,
    "Nb": 92.91,
    "Mo": 95.94,
    "Tc": 98,
    "Ru": 101.07,
    "Rh": 102.91,
    "Pd": 106.42,
    "Ag": 107.87,
    "Cd": 112.41,
    "In": 114.82,
    "Sn": 118.71,
    "Sb": 121.76,
    "Te": 127.6,
    "I": 126.9,
    "Xe": 131.29,
    "Cs": 132.91,
    "Ba": 137.33,
    "La": 138.91,
    "Ce": 140.12,
    "Pr": 140.91,
    "Nd": 144.24,
    "Pm": 145,
    "Sm": 150.36,
    "Eu": 151.96,
    "Gd": 157.25,
    "Tb": 158.93,
    "Dy": 162.5,
    "Ho": 164.93,
    "Er": 167.26,
    "Tm": 168.93,
    "Yb": 173.05,
    "Lu": 174.97,
    "Hf": 178.49,
    "Ta": 180.95,
    "W": 183.84,
    "Re": 186.21,
    "Os": 190.23,
    "Ir": 192.22,
    "Pt": 195.08,
    "Au": 196.97,
    "Hg": 200.59,
    "Tl": 204.38,
    "Pb": 207.2,
    "Bi": 208.98,
    "Po": 209,
    "At": 210,
    "Rn": 222,
    "Fr": 223,
    "Ra": 226.03,
    "Ac": 227.03,
    "Th": 232.04,
    "Pa": 231.04,
};

document.getElementById('addElement').addEventListener('click', () => {
    const elementsDiv = document.getElementById('elements');
    const elementCount = elementsDiv.childElementCount + 1;

    const newElementDiv = document.createElement('div');
    newElementDiv.className = 'element';
    newElementDiv.innerHTML = `
        <label for="symbol${elementCount}">Símbolo del Elemento:</label>
        <br> </br>
        <input type="text" id="symbol${elementCount}" name="symbol${elementCount}" required>
        <br> </br>
        <label for="quantity${elementCount}">Cantidad:</label>
        <br> </br>
        <input type="number" id="quantity${elementCount}" name="quantity${elementCount}" min="1" value="1" required>
    `;
    elementsDiv.appendChild(newElementDiv);
});

document.getElementById('molarMassForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const elementsDiv = document.getElementById('elements');
    let totalMolarMass = 0;

    for (let i = 1; i <= elementsDiv.childElementCount; i++) {
        const symbol = document.getElementById(`symbol${i}`).value.trim();
        const quantity = parseInt(document.getElementById(`quantity${i}`).value);

        if (elementMasses[symbol] !== undefined) {
            totalMolarMass += elementMasses[symbol] * quantity;
        } else {
            alert(`Elemento desconocido: ${symbol}`);
            return;
        }
    }

    document.getElementById('result').innerText = `Masa Molar Total: ${totalMolarMass.toFixed(2)} g/mol`;
});

document.getElementById('resetForm').addEventListener('click', () => {
    document.getElementById('molarMassForm').reset();
    document.getElementById('result').innerText = '';
    const elementsDiv = document.getElementById('elements');
    elementsDiv.innerHTML = `
        <div class="element">
            <label for="symbol1">Símbolo del Elemento:</label>
            <br> </br>
            <input type="text" id="symbol1" name="symbol1" required>
            <br> </br>
            <label for="quantity1">Cantidad:</label>
            <br> </br>
            <input type="number" id="quantity1" name="quantity1" min="1" value="1" required>
        </div>
    `;
});
