const urlParameters = new URLSearchParams(window.location.search);

// Modifica o agrega más variables según tus necesidades
const variables = ['name', 'years', 'city'];

for (const variable of variables) {
  const value = urlParameters.get(variable);
  if (value !== null) {
    const decodedValue = decodeURIComponent(value);
    let textToDisplay = decodedValue;

    if (variable === 'years') {
      const yearsText = (parseInt(decodedValue) === 1) ? `${decodedValue} año` : `${decodedValue} años`;
      textToDisplay = yearsText;
    }

    // Verifica si el body tiene la clase 'body-en' y ajusta el texto en consecuencia
    const bodyClassList = document.body.classList;
    if (bodyClassList.contains('body-en')) {
      if (variable === 'years') {
        textToDisplay = (parseInt(decodedValue) === 1) ? `${decodedValue} year` : `${decodedValue} years`;
      }
    }

    document.getElementById(variable).innerText = textToDisplay;
  }
}


