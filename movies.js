// Define the Movie class
class Movie {
  // title, cast, description, rating
  constructor(title, cast, description, rating) {
    this.title = String(title);
    this.cast = cast;
    this.description = String(description);
    this.rating = Number(rating);
  }
  // Method to update the rating of the movie
  updateRating(rate) {
    this.rating = rate;
  }

  // Method to display the movie's information
  displayInfo() {
    let info = document.createElement("p");
    info.innerHTML = "The movie's title is " + this.title + ".<br>The members who cast in it are " + this.cast + ".<br>This movie is described as " + this.description + ".<br>This movie is rated a " + this.rating + ".";
    document.getElementById("movie-info").appendChild(info);
  }
}
// Test your implementation
let minecraft = new Movie("A Minecraft Movie", 
  ["Jason Momoa", "Emma Myers", "Jack Black", "Jennifer Coolidge", "Danielle Brooks", "Sebastian Eugene Hansen", "Rachel House", "Matt Berry", "DanTDM", "Kate McKinnon", "Jemaine Clement", "Allan Henry", "Moana Williams", "Hiram Garcia", "Yvette Parsons", "Bram Scott-Breheny", "Mark Wright"],
  "a live-action fantasy-adventure where four misfits, Garrett 'The Garbage Man' Garrison (Jason Momoa), Henry, Natalie, and Dawn are pulled through a portal into the Overworld. Guided by Steve (Jack Black), they must craft, battle Piglins, and master the world to return home",
  "5.6");
let movies = [minecraft];
// Display the initial information of the movie
minecraft.displayInfo();
// Update the rating of the movie
function updateMovieRating(title, newRating) {
    title.rating = Number(newRating);
    let newinfo = document.createElement("p");
    newinfo.innerHTML = "<b>Updated rating:</b>";
    document.getElementById("movie-info").appendChild(newinfo);
    title.displayInfo();
}
// Display the updated information of the movie
updateMovieRating(minecraft, 4.2);