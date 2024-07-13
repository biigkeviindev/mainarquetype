function generarCadenaRandom() {
  const palabrasClave = [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "React",
    "Node",
    "API",
    "Git",
    "SQL",
    "Java",
  ];
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?";
  const longitudCadena = 10; // Longitud total de la cadena generada

  const palabraClave =
    palabrasClave[Math.floor(Math.random() * palabrasClave.length)];

  let cadenaAleatoria = "";
  for (let i = 0; i < longitudCadena; i++) {
    cadenaAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }

  const posicionAleatoria = Math.floor(
    Math.random() * (longitudCadena - palabraClave.length)
  );
  cadenaAleatoria =
    cadenaAleatoria.slice(0, posicionAleatoria) +
    palabraClave +
    cadenaAleatoria.slice(posicionAleatoria + palabraClave.length);

  return cadenaAleatoria;
}

export const generarCadenaRandomFc = () => generarCadenaRandom();
