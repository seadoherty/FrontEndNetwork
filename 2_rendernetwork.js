// create a network
var container = document.getElementById('peopleNetwork');

var data = {
  nodes: nodes,
  edges: edges
};

var options = {}

var network = new vis.Network(container, data, options);