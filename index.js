let movies = ["The Shape of Water", "Moonlight", "Spotlight", "Birdman", "12 Years a Slave", "Argo", "The Artist", "The King's Speech", "The Hurt Locker", "Slumdog Millionaire", "No Country For Old Men", "The Departed","Crash", "Million Dollar Baby", "The Lord of The Rings: The Return of the King"];
let descr = ["At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.", "A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.", "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.", "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.", "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.", "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.", "An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood's silent era.", "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.", "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.", "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of \"Who Wants to be a Millionaire?\"", "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.", "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.", "A determined woman works with a hardened boxing trainer to become a professional.", "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."];

let x = Math.floor(Math.random() * 14);
let y = movies[x];
let z = descr[x];

var button = $('.button');

button.on("click", movieName);
button.on("click", descrName);
button.on("click", makeSeen);

function movieName() {
document.getElementById("movie").innerHTML = `${y}`;
}
function descrName(){
document.getElementById("descr").innerHTML = `${z}`;
}
function makeSeen() {
  var box =  document.getElementByClassName("box")
  box.classlist.remove("unseen");
}
