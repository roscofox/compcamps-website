console.log("super duper secret");
var favSongs = [
  {
    order: 1,
    song: "No Culture",
    artist: "Mother Mother",
    link: '<iframe src="https://www.youtube.com/embed/Ar7FBo9hV9w" frameborder="0" allowfullscreen></iframe>'
  },
  {
    order: 2,
    song: "School's Out",
    artist: "Alice Cooper",
    link: '<iframe src="https://www.youtube.com/embed/2Oo8QzDHimQ" frameborder="0" allowfullscreen></iframe>'
  },
  {
    order: 3,
    song: "The Drugs",
    artist: "Mother Mother",
    link: '<iframe src="https://www.youtube.com/embed/xUPhK1y27AY" frameborder="0" allowfullscreen></iframe>'
  }
];



console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");

  for (var j in favSongs[i]) {
    var td1 = document.createElement("td");
    if (j == "link") {
      td1.innerHTML = favSongs[i][j];
    } else {
      td1.innerText = favSongs[i][j];
    }
    tr.appendChild(td1);
  }
  tbody.appendChild(tr);
}
