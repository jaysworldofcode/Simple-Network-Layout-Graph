var container = document.querySelector('#graph');
  var data = {
    nodes: [
{
  id: 1,
  shape: 'image', 
  image: './image/Plane.png',
  label: 'Wuhan China',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id: 2,
  shape: 'image',
  image: './image/Woman.png',
  label: 'Case1',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id: 3,
  shape: 'image',
  image: './image/Man.png',
  label: 'Case2',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id: 4,
  shape: 'image',
  image: './image/Man.png',
  label: 'Case3',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id: 5,
  shape: 'image',
  image: './image/Man.png',
  label: 'Case4',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id:6,
  shape: 'image',
  image: './image/church.png',
  label: 'San Juan City Church',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id:7,
  shape: 'image',
  image: './image/Man.png',
  label: 'Case5',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
},
{
  id:8,
  shape: 'image',
  image: './image/Woman.png',
  label: 'Case6',
  description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique rhoncus magna, ut posuere tortor consequat at. Sed venenatis metus eget quam lobortis tincidunt. Mauris fermentum tortor quis dolor dictum bibendum. Fusce luctus mauris eget porttitor efficitur. Quisque vitae arcu quis nisi ultricies eleifend et posuere eros. Phasellus id est lobortis, tempor justo ac, scelerisque augue. Vivamus sit amet nunc ut ante mollis maximus. Duis viverra tempor odio tempus posuere. Phasellus cursus risus et libero sagittis condimentum. Ut sapien justo, lobortis quis tortor ut, dapibus euismod nisl. Etiam consequat vel nulla vel feugiat.'
}
    ],
    edges: [
      {from: 1, to: 2, arrows: "to"},
      {from: 1, to: 3, arrows: "to"},
      {from: 2, to: 4, arrows: "to"},
      {from: 2, to: 5, arrows: "to"},
      {from: 4, to: 6, arrows: "to", dashes: true },
      {from: 6, to: 7, arrows: "to"},
      {from: 6, to: 8, arrows: "to"},
    ]
  }
  var options = {
    nodes: {
      borderWidth:0,
      size:42,
      color: {
        border: '#222',
        background: 'transparent'
      },
      font: {
        color: '#111',
        face: window.getComputedStyle(document.createElement('body')).fontFamily,
        size: 14,
        strokeWidth: 0.1,
        strokeColor: '#222'
      }
    },
    edges: {
      color: {
        color: '#CCC',
        highlight: '#ff7c8f'
      },
      width: 3,
      length: 275,
      hoverWidth: .05
    }
  }
document.addEventListener('DOMContentLoaded', function() {
    var network = new vis.Network(container, data, options);
    network.on( 'click', function(properties) {
        document.getElementById("case-number").textContent = data.nodes[properties.nodes-1].label;
        document.getElementById("case-content").textContent = data.nodes[properties.nodes-1].description;
        $("#myModal").modal("show");
        
    });
});
function New_Case(id, shape, image, label){
    var element = {};
    element.id = id;
    element.shape = shape;
    element.image = image;
    element.label = label;
    data.nodes.push(element);
}
function Connect_Case(from, to, arrows, dashes){
    var element = {};
    element.from = from;
    element.to = to;
    element.arrows = arrows;
    element.dashes = dashes;
    data.edges.push(element);
}