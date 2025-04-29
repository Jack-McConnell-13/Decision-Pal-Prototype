const options = {
  food: ['Pizza', 'Sushi', 'Tacos', 'Burgers', 'Pasta', 'Salad', 'BBQ', 'Sandwiches'],
  activity: ['Go for a walk', 'Watch a movie', 'Play a board game', 'Go thrifting', 'Visit a coffee shop', 'Have a picnic', 'Take a nap', 'Go bowling'],
  clothing: ['Casual jeans and hoodie', 'Dress up formal', 'Sporty outfit', 'Vintage look', 'All black everything', 'Bright and colorful', 'Business casual'],
  watch: ['Comedy movie', 'Horror movie', 'Short TV episode', 'Documentary', 'Animated film', 'Action blockbuster', 'Feel-good movie', 'Indie drama']
};

function pickOption(category) {
  const choice = options[category][Math.floor(Math.random() * options[category].length)];
  document.getElementById('result').innerText = `You should: ${choice}`;
}
