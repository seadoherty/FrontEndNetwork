// create an array with nodes for peole network
var nodes = new vis.DataSet([
  { id: 1, label: 'First Grade', physics: false, shadow: true },
  { id: 2, label: 'Second Grade', physics: false, shadow: true },
  { id: 3, label: 'Teacher 1', shape: 'circularImage', image: 'images/devilhead.jpeg', shadow: true },
  { id: 4, label: 'Teacher 2',  shape: 'circularImage', image: 'images/deerhead.jpeg', shadow: true },
  { id: 5, label: 'Teacher 3',  shape: 'circularImage', image: 'images/JohnsonJaguar.png', shadow: true },
  { id: 6, label: 'Teacher 4',  shape: 'circularImage', image: 'images/hampsterhead.png', shadow: true }
]);

// create an array with edges
var edges = new vis.DataSet([
  { id: 1, from: 1, to: 3, color: 'black', width: 3, shadow: true },
  { id: 2, from: 1, to: 4, color: 'black', width: 3, shadow: true },
  { id: 3, from: 2, to: 5, color: 'black', width: 3, shadow: true },
  { id: 4, from: 2, to: 6, color: 'black', width: 3, shadow: true }
]);