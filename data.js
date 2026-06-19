export const business = {
  name: "The Scoreboard",
  phone: "(619) 424-9909",
  phoneHref: "tel:+16194249909",
  address: "951 Palm Ave, Imperial Beach, CA 91932",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=951+Palm+Ave+Imperial+Beach+CA+91932",
  website: "/",
  description:
    "The Scoreboard is Imperial Beach's go-to sports bar for cold drinks, comfort food, and game-day energy."
};

const images = {
  heroInterior:
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBiYXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  barGlow:
    "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnaHQlMjBiYXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  beerPour:
    "https://www.mensjournal.com/.image/NDI6MDAwMDAwMDAxMTQ1NTU0/bartender-pouring-fresh-craft-beer-pint.jpg?ar=16-9&profile=w2560",
  burgerPlate:
    "https://modernrestaurantmanagement.com/assets/media/2026/03/nik-bXAh2U3LY10-unsplash-1600x655.jpg",
  friesPlate:
    "https://media.timeout.com/images/106102175/750/562/image.jpg",
  saladPlate:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMHBsYXRlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  patio:
    "https://nightvisionoutdoorlighting.com/wp-content/uploads/2024/12/Commercial-Lighting-scaled.jpg",
  crowd:
    "https://unsplash.com/photos/2GNBoMgKYEo/download?force=true",
  service:
    "https://images.unsplash.com/photo-1516788875874-c5912cae7b43?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FpdGVyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  cocktail:
    "https://www.cocktailexperience.net/files/cocktail1.jpg"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu/" },
  { label: "Events & Specials", href: "/events/" },
  { label: "Drinks", href: "/drinks/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Visit", href: "/visit/" }
];

export const weeklySchedule = [
  {
    day: "Monday",
    abbr: "Mon",
    special: "Meatloaf Monday + Music Bingo",
    detail: "Comfort food and easygoing games."
  },
  {
    day: "Tuesday",
    abbr: "Tue",
    special: "Tacos & Wings + Tequila Flights",
    detail: "Big flavor and cold drinks."
  },
  {
    day: "Wednesday",
    abbr: "Wed",
    special: "Pasta Special + Bingo",
    detail: "Midweek fuel with bingo."
  },
  {
    day: "Thursday",
    abbr: "Thu",
    special: "BBQ Special + Beer Pong",
    detail: "Good food and a little competition."
  },
  {
    day: "Friday",
    abbr: "Fri",
    special: "Ribeye Special + Karaoke",
    detail: "Friday night, turned up."
  },
  {
    day: "Saturday",
    abbr: "Sat",
    special: "BBQ Special + Live Music or DJ",
    detail: "Weekend energy and late-night fun."
  },
  {
    day: "Sunday",
    abbr: "Sun",
    special: "Hotdogs + Sunday Funday + NFL",
    detail: "Game day comfort, all day."
  }
];

export const reasons = [
  {
    title: "Big games",
    text: "Big screens and game-day focus.",
    icon: "tv"
  },
  {
    title: "Cold drinks",
    text: "Cold pours, no fuss.",
    icon: "beer"
  },
  {
    title: "Comfort food",
    text: "Familiar favorites that hit.",
    icon: "plate"
  },
  {
    title: "Pool tables",
    text: "Something to do between plays.",
    icon: "cue"
  },
  {
    title: "Karaoke nights",
    text: "The mic changes the room.",
    icon: "mic"
  },
  {
    title: "Weekly events",
    text: "Easy nights to plan around.",
    icon: "calendar"
  },
  {
    title: "Local regulars",
    text: "Faces you start recognizing.",
    icon: "people"
  },
  {
    title: "No-frills IB energy",
    text: "Local, confident, and real.",
    icon: "pin"
  }
];

export const featuredMenu = [
  {
    name: "IB's Best Chicken Wings",
    category: "Pre-Game",
    price: "Large $15.99 / Small $9.99",
    note: "Classic buffalo, mild, mango habanero, thai, teriyaki, BBQ, lemon pepper, and garlic.",
    image: images.friesPlate
  },
  {
    name: "Classic Board Burger",
    category: "Burgers",
    price: "$11.99",
    note: "1/4 lb classic American cheese burger.",
    image: images.burgerPlate
  },
  {
    name: "The Cinci Dog",
    category: "Dogs",
    price: "$8.99",
    note: "Jumbo Nathan's dog topped with chili cheese and fresh onions.",
    image: images.service
  },
  {
    name: "Cobb Salad",
    category: "Salads",
    price: "$11.99",
    note: "Romaine, cucumbers, cherry tomatoes, bacon, egg, avocado, and blue cheese.",
    image: images.saladPlate
  },
  {
    name: "Fish & Chips",
    category: "Scoreboard Faves",
    price: "$13.99",
    note: "Beer battered cod, fried crisp, served with fries.",
    image: images.friesPlate
  },
  {
    name: "Scoreboard Fries",
    category: "The Papas",
    price: "$5.99",
    note: "Basket of hand cut french fries.",
    image: images.friesPlate
  }
];

export const eventsPreview = [
  {
    title: "Sunday Funday",
    tag: "NFL energy",
    description: "Cold drinks, comfort food, and all-day games.",
    image: images.crowd
  },
  {
    title: "Karaoke Night",
    tag: "Mic on",
    description: "The room shifts when the mic opens up.",
    image: images.barGlow
  },
  {
    title: "Bingo + Specials",
    tag: "Midweek pull",
    description: "A simple reason to stay out.",
    image: images.service
  },
  {
    title: "Beer Pong + BBQ",
    tag: "Group night",
    description: "Built for friends, not fuss.",
    image: images.patio
  }
];

export const taps = [
  { name: "Modelo", style: "Lager", note: "Cold and easy to drink.", image: images.beerPour },
  { name: "Stella", style: "Pilsner", note: "Clean and classic.", image: images.beerPour },
  { name: "Space Dust IPA", style: "IPA", note: "Bigger hop energy.", image: images.beerPour },
  { name: "Stone IPA", style: "IPA", note: "Sharp with attitude.", image: images.beerPour },
  { name: "Sculpin IPA", style: "IPA", note: "Bright and balanced.", image: images.beerPour },
  { name: "Barrio Lager", style: "Lager", note: "Smooth local rhythm.", image: images.beerPour },
  { name: "Rotating Tap", style: "Ask today", note: "See what is pouring now.", image: images.cocktail }
];

export const gallery = [
  { title: "Bar Glow", category: "Interior", image: images.barGlow },
  { title: "Night Bar", category: "Interior", image: images.heroInterior },
  { title: "Game Day", category: "Crowd", image: images.crowd },
  { title: "Food", category: "Food", image: images.burgerPlate },
  { title: "Drinks", category: "Drinks", image: images.beerPour },
  { title: "Patio", category: "Exterior", image: images.patio },
  { title: "Service", category: "Hospitality", image: images.service },
  { title: "Salad", category: "Food", image: images.saladPlate }
];

export const menuCategories = [
  "Breakfast",
  "Pre-Game",
  "Burgers",
  "The Papas",
  "The Dog House",
  "The SB Sands",
  "Big Salads",
  "Scoreboard Faves",
  "Side Piece"
];

export const menuItems = [
  { section: "Breakfast", name: "Bottomless Mimosas", price: "$20 per person", note: "Available with breakfast.", image: images.cocktail },
  { section: "Breakfast", name: "Scoreboards OG Biscuits & Gravy", price: "$9.99", note: "Two buttermilk biscuits with country gravy.", image: images.service },
  { section: "Breakfast", name: "Classic American Breakfast", price: "$10.99", note: "Two eggs, bacon or sausage, home fries, and toast.", image: images.service },
  { section: "Breakfast", name: "SB Chicken Fried Steak & Eggs", price: "$14.99", note: "Chicken fried steak, eggs, home fries, and toast.", image: images.burgerPlate },
  { section: "Breakfast", name: "Chilaquiles", price: "$13.99", note: "Fried tortilla chips, salsa, eggs, avocado, beans, and home fries.", image: images.saladPlate },
  { section: "Breakfast", name: "SB Steak & Eggs", price: "$19.99", note: "Steak to order with eggs, home fries, and a bloody mary.", image: images.burgerPlate },
  { section: "Breakfast", name: "Huevos Rancheros", price: "$13.99", note: "Eggs, salsa, avocado, green onion, beans, and home fries.", image: images.saladPlate },
  { section: "Breakfast", name: "Ham Steak & Eggs", price: "$13.99", note: "Thick-cut ham with eggs and potatoes.", image: images.service },
  { section: "Breakfast", name: "Breakfast Quesadilla", price: "$16.99", note: "Ribeye, eggs, cheese, and tapatio sauce.", image: images.burgerPlate },
  { section: "Breakfast", name: "Breakfast Sandwich", price: "$12.99", note: "Eggs, your choice of meat, cheese, and home fries.", image: images.service },
  { section: "Breakfast", name: "Classic Corned Beef Hash", price: "$11.99", note: "Two eggs, home fries, and toast.", image: images.service },
  { section: "Breakfast", name: "The Bagel Lox", price: "$13.99", note: "Cream cheese, smoked salmon, and capers.", image: images.saladPlate },
  { section: "Breakfast", name: "The Traditional Benny", price: "$15.99", note: "Canadian bacon, poached eggs, hollandaise, and chives.", image: images.service },
  { section: "Breakfast", name: "Cali Benny", price: "$14.99", note: "Poached eggs, avocado, spinach, tomato, and hollandaise.", image: images.saladPlate },
  { section: "Breakfast", name: "Lox Benny", price: "$16.99", note: "Smoked salmon, poached eggs, capers, dill, and hollandaise.", image: images.saladPlate },
  { section: "Breakfast", name: "Classic Pancakes", price: "$12.99", note: "Buttermilk pancakes with eggs and your choice of bacon or sausage.", image: images.service },
  { section: "Breakfast", name: "Blueberry Pancakes", price: "$13.99", note: "Blueberry pancakes with eggs and your choice of bacon or sausage.", image: images.service },
  { section: "Breakfast", name: "Chocolate Chip Pancakes", price: "$13.99", note: "Chocolate chip pancakes with eggs and your choice of bacon or sausage.", image: images.service },
  { section: "Breakfast", name: "French Toast", price: "$14.99", note: "French toast, fruit, eggs, and your choice of sausage or bacon.", image: images.service },
  { section: "Breakfast", name: "Denver Omelette", price: "$14.99", note: "Ham, onion, bell pepper, and cheese.", image: images.service },
  { section: "Breakfast", name: "Steak Omelette", price: "$16.99", note: "Steak, mushrooms, onions, and cheese.", image: images.burgerPlate },
  { section: "Breakfast", name: "Build Your Own Omelette", price: "$14.99", note: "Pick a meat and add your veggies.", image: images.service },
  { section: "Breakfast", name: "Scoreboard Country Fried Burrito", price: "$14.99", note: "Scrambled eggs, sausage, potatoes, cheese, and country gravy.", image: images.service },
  { section: "Breakfast", name: "Steak Burrito", price: "$16.99", note: "Steak, eggs, cheese, grilled onions, and avocado.", image: images.burgerPlate },
  { section: "Breakfast", name: "Build Your Burrito", price: "$14.99", note: "Pick your meat, eggs, veggies, and beans.", image: images.service },
  { section: "Breakfast", name: "Avocado Toast", price: "$7.99", note: "Grain toast with feta, cranberries, and pickled onions.", image: images.saladPlate },
  { section: "Breakfast", name: "Sides", price: "", note: "Eggs, home fries, gravy, toast, bacon, sausage, coffee, juice, and soda.", image: images.cocktail },
  { section: "Pre-Game", name: "IB's Best Chicken Wings", price: "Large $15.99 / Small $9.99", note: "Buffalo, mild, mango habanero, thai, teriyaki, BBQ, lemon pepper, and garlic.", image: images.beerPour },
  { section: "Pre-Game", name: "Chicken Strips w/ Fries", price: "$11.99", note: "Easy to share.", image: images.friesPlate },
  { section: "Pre-Game", name: "Buffalo Cauliflower", price: "$10.99", note: "A lighter shareable with heat.", image: images.saladPlate },
  { section: "Pre-Game", name: "6 Shrimp Tempura", price: "$12.99", note: "Crisp and quick.", image: images.service },
  { section: "Pre-Game", name: "Fried Calamari", price: "$12.99", note: "Classic bar share plate.", image: images.friesPlate },
  { section: "Pre-Game", name: "Scoreboard Famous Potato Skins", price: "$11.99", note: "A house favorite.", image: images.friesPlate },
  { section: "Pre-Game", name: "Cheese Quesadilla", price: "$9.99", note: "Simple and easy with drinks.", image: images.service },
  { section: "Pre-Game", name: "Sauteed Garlic Shrimp", price: "$14.99", note: "Garlic-forward and shareable.", image: images.service },
  { section: "Pre-Game", name: "Chips and Salsa", price: "$5.99", note: "Fast, familiar, and always on point.", image: images.friesPlate },
  { section: "Pre-Game", name: "Pork or Chicken Nachos", price: "$13.99", note: "Good for the table.", image: images.friesPlate },
  { section: "Pre-Game", name: "Garlic Edamame", price: "$6.99", note: "A lighter bar bite.", image: images.saladPlate },
  { section: "Pre-Game", name: "Buffalo Chicken Sliders", price: "$10.99", note: "Compact and crowd-friendly.", image: images.service },
  { section: "Burgers", name: "Classic Board Burger", price: "$11.99", note: "American cheese, pickles, onions, lettuce, tomato, and mayo.", image: images.burgerPlate },
  { section: "Burgers", name: "Southwest Burger", price: "$14.99", note: "Bacon, avocado, lettuce, and pepper jack cheese.", image: images.burgerPlate },
  { section: "Burgers", name: "Swiss Mushroom Burger", price: "$14.99", note: "Mushrooms, caramelized onions, and swiss cheese.", image: images.burgerPlate },
  { section: "Burgers", name: "BBQ Western Burger", price: "$14.99", note: "Pepper jack, bacon, grilled onions, onion ring, and BBQ sauce.", image: images.burgerPlate },
  { section: "Burgers", name: "The Guido Burger", price: "$15.99", note: "Pastrami, provolone, grilled onions, and spicy mustard.", image: images.burgerPlate },
  { section: "Burgers", name: "The Drewster", price: "$17.99", note: "Two patties, cheese, bacon, onion ring, jalapenos, avocado, and BBQ sauce.", image: images.burgerPlate },
  { section: "The Papas", name: "Scoreboard Fries", price: "$5.99", note: "Hand-cut french fries.", image: images.friesPlate },
  { section: "The Papas", name: "Parmesan or Truffle", price: "$8", note: "Served with garlic aioli or truffle aioli.", image: images.friesPlate },
  { section: "The Papas", name: "Cheesy Fries", price: "$9.99", note: "Nacho cheese, jalapenos, and bacon.", image: images.friesPlate },
  { section: "The Papas", name: "Carne Asada Fries", price: "$15.99", note: "Ribeye steak, cheese, jalapenos, pico, sour cream, and guacamole.", image: images.friesPlate },
  { section: "The Papas", name: "Cali Fries", price: "$10.99", note: "American cheese, grilled onions, and fry sauce.", image: images.friesPlate },
  { section: "The Papas", name: "Sweet Potato Fries", price: "$6.99", note: "Served with ranch.", image: images.friesPlate },
  { section: "The Papas", name: "Onion Rings", price: "$7.99", note: "Basket of onion rings with ranch.", image: images.friesPlate },
  { section: "The Papas", name: "Tots", price: "$6.99", note: "House tater tots.", image: images.friesPlate },
  { section: "The Papas", name: "Loaded Tots", price: "$10.99", note: "Nacho cheese, bacon, jalapenos, sour cream, and chives.", image: images.friesPlate },
  { section: "The Papas", name: "SB Homemade Kettle Chips", price: "$5.99", note: "House kettle chips.", image: images.friesPlate },
  { section: "The Dog House", name: "The Cinci Dog", price: "$8.99", note: "Chili cheese and fresh chopped onions.", image: images.service },
  { section: "The Dog House", name: "The IB Dog", price: "$10.99", note: "Bacon, grilled peppers, onions, and mayo.", image: images.service },
  { section: "The Dog House", name: "The Pastrami Dog", price: "$11.99", note: "Pastrami, caramelized onions, and dijon mustard.", image: images.service },
  { section: "The Dog House", name: "The Surf & Turf Dog", price: "$13.99", note: "Grilled onions, peppers, shrimp, and chipotle sauce.", image: images.service },
  { section: "The SB Sands", name: "The Philly", price: "$18.99", note: "Thin-sliced ribeye, onions, house seasoning, and provolone.", image: images.burgerPlate },
  { section: "The SB Sands", name: "The Turkey Club", price: "$14.99", note: "Turkey, lettuce, tomato, bacon, swiss, and mayo on sourdough.", image: images.service },
  { section: "The SB Sands", name: "Pastrami Melt", price: "$14.99", note: "Pastrami and melted swiss on grilled rye.", image: images.burgerPlate },
  { section: "The SB Sands", name: "French Dip", price: "$15.99", note: "Roast beef, onions, swiss, and au jus.", image: images.burgerPlate },
  { section: "The SB Sands", name: "The Patty Melt", price: "$14.99", note: "Beef patty, melted cheese, and caramelized onions on rye.", image: images.burgerPlate },
  { section: "The SB Sands", name: "Slow Smoked Pulled Pork Sandwich", price: "$13.99", note: "BBQ sauce, cole slaw, and pickles on a potato bun.", image: images.service },
  { section: "The SB Sands", name: "Grilled Chicken Sandwich or Wrap", price: "$15.99", note: "Chicken, cheese, lettuce, tomato, onions, avocado, and jalapenos.", image: images.service },
  { section: "The SB Sands", name: "Grilled Cheese & Ham Sandwich", price: "$12.99", note: "Ham and American cheese on sourdough.", image: images.service },
  { section: "Big Salads", name: "Cobb Salad", price: "$11.99", note: "Romaine, cucumbers, tomatoes, onion, bacon, egg, avocado, and blue cheese.", image: images.saladPlate },
  { section: "Big Salads", name: "Caesar Salad", price: "$11.99", note: "Romaine, parmesan, croutons, and Caesar dressing. Recommend salmon.", image: images.saladPlate },
  { section: "Big Salads", name: "SB Cranberry Spring Salad", price: "$13.99", note: "Greens, cranberries, cucumber, tomatoes, feta, onion, pecans, and croutons.", image: images.saladPlate },
  { section: "Scoreboard Faves", name: "Salmon Dinner", price: "$19.99", note: "Blackened salmon with mashed potatoes and veggies.", image: images.burgerPlate },
  { section: "Scoreboard Faves", name: "Fish & Chips", price: "$13.99", note: "Beer battered cod served lightly with fries.", image: images.friesPlate },
  { section: "Scoreboard Faves", name: "Mahi Mahi Dinner", price: "$19.99", note: "Mahi mahi with house blanc sauce, mashed potatoes, and veggies.", image: images.service },
  { section: "Scoreboard Faves", name: "Chicken Dinner", price: "$16.99", note: "Grilled chicken, mashed potatoes, and salad or veggies.", image: images.service },
  { section: "Side Piece", name: "Drinks", price: "Coffee $3 / Soda $3.25 / Juice $3.50", note: "Two refills.", image: images.cocktail },
  { section: "Side Piece", name: "Potato Salad", price: "$6.99", note: "", image: images.saladPlate },
  { section: "Side Piece", name: "Side of Bacon", price: "$4", note: "", image: images.friesPlate },
  { section: "Side Piece", name: "Soup of Day", price: "$6.99", note: "", image: images.service },
  { section: "Side Piece", name: "Side of Fruit", price: "$5.99", note: "", image: images.saladPlate },
  { section: "Side Piece", name: "Bowl of Chili", price: "$8.99", note: "", image: images.friesPlate },
  { section: "Side Piece", name: "Mashed potatoes & gravy", price: "$6.99", note: "", image: images.service },
  { section: "Side Piece", name: "Side of Au jus", price: "$3.00", note: "", image: images.service },
  { section: "Side Piece", name: "Veggies", price: "$5.99", note: "", image: images.saladPlate }
];

export const drinkNotes = [
  "Ask what is rotating today.",
  "Cold pours and simple favorites.",
  "Keep the game moving."
];
