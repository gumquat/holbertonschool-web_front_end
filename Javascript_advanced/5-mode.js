function changeMode(size, weight, transform, background, color) {
  return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
  }
}

function main() {

  /* VARIABLES THAT CHANGE WEBPAGE STYLING */
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  /* inner HTML hackzors :sunglasses emoji: */
  document.body.innerHTML += '<p>Welcome Holberton!</p>';

  /* BUTTONS */

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  darkModeButton.onclick = darkMode;
  document.body.appendChild(darkModeButton);

  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  screamModeButton.onclick = screamMode;
  document.body.appendChild(screamModeButton);
}

/* call the main function! */
main();
