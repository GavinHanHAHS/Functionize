// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', () => setSeason('summer', '#1BA848'));
document.getElementById('autumnBtn').addEventListener('click', () => setSeason('autumn', '#FE6732'));
document.getElementById('winterBtn').addEventListener('click', () => setSeason('winter', '#1C64B9'));
document.getElementById('springBtn').addEventListener('click', () => setSeason('spring', '#0E94D1'));


// Event Functions

function setSeason(season, pageColour) {
  // - change concerto text
  document.getElementById('season-text').innerHTML = season;

  // - change main image
  document.getElementById('main-img').src = 'images/' + season + '.jpg';

  // - change page background color
  document.body.style.backgroundColor = pageColour;

  // - change audio source
  document.getElementById('song').src = 'songs/vivaldi-' + season + '.mp3';

  // - remove active class from all buttons
  document.getElementById('springBtn').classList.remove('activeBtn');
  document.getElementById('summerBtn').classList.remove('activeBtn');
  document.getElementById('autumnBtn').classList.remove('activeBtn');
  document.getElementById('winterBtn').classList.remove('activeBtn');

  // - add active class to clicked button
  document.getElementById(season + 'Btn').classList.add('activeBtn');
}
