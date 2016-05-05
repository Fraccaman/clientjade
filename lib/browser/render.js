jade.templates = {};
jade.render = function(node, template, data) {
  if(node === null){
    tmp = jade.templates[template](data);
  return tmp;
  } else {
    var tmp = jade.templates[template](data);
    node.innerHTML = tmp;
  }
};
