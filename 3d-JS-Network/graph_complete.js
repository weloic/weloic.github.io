const graph = ForceGraph3D()


const communityColor2 = {
  '0' : 'blue',
  '1' : 'green',
  '2' : 'purple',
  '3' : 'yellow',
  '4' : 'orange',
  '5' : 'red',
  '6' : 'darkgreen',
}


const communityColor = {
  '0' : 'blue',
  '1' : 'green',
  '2' : 'purple',
  '3' : 'yellow',
  '4' : 'orange',
  '5' : 'red',
  '6' : 'darkgreen',
  '7' : 'grey',
  '8' : 'pastelgreen',
  '9' : 'pink',
  '10' : 'aquablue',
  '11' : 'indigoblue',
  '12' : 'strawberry',
  '13' : 'fluorescentgreen',
  '14' : 'bamboo',
  '15' : 'armybrown',
  '16' : 'rust',
  '17' : 'magenta',
  '18' : 'mauve',
  '19' : 'mocha',
}

function color_nodes(node){
  var color='gray'
  if (node['community'] < 20){
    color = communityColor[node['community']]
  }
  return color;
}

// controls

graph(document.getElementById('3d-graph'))
  .jsonUrl('/3d-JS-Network/datasets/graph_complete_communities.json')
  .nodeColor(n => color_nodes(n))
  .nodeRelSize(15)

// Nodes
  .nodeLabel('name') //when on the node shows id
  //.nodeLabel(node => `${node.id}:
  //   ${node.gender?node.gender : 'unknown gender'},`) //when on the node shows id: country


// Links
  // .linkLabel(n => n.newssites[0])
  .linkOpacity(0.2)

  //Arrows + Curve
  // .linkDirectionalArrowLength(5)
  // .linkDirectionalArrowRelPos(1) //value = 0, arrow close to the source | value = 1, arrow close to the target
  // .linkCurvature(0.25)
  
  //Moving particles on links ; speed of moving proportionnal to weight of edge
  // .linkWidth(n => Math.log(n.value))                  //Nbr of the particles
  //.linkDirectionalParticleWidth(d => d.value*0.05)     //Width of the particles
  // .linkDirectionalParticleSpeed(d => d.value * 0.001); //Speed of the particles;

//legend

var d3svg = d3.select("#leg").append('svg');
d3svg.attr('width', 768);
d3svg.attr('height', 200);
d3svg.style('background-color', 'black');
var top_svg = d3svg.append('g');
top_svg.append('g').attr('id','gleg');



graph.height([600])