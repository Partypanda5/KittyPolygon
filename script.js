var tmax_opts = { //overall animation options
  delay: 0.5,
  repeat: -1,
  repeatDelay: 1.5,
  yoyo: true
};

var polycat_staggerFrom = { //each piece of svg options
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var polycat_staggerTo = { //color and scale options
  opacity: 1,
  scale: 1,

  cycle:{ 
    ease: function (i){
      return Back.easeOut.config(i * 0.3)
    }
  }
};

var tmax_tl = new TimelineMax(tmax_opts);
var polycat_shapes = $('svg.polycat > g polygon');
var polycat_stagger = 0.0045;
var polycat_duration = 1.5;
var svg_length = $('svg.polycat > polygon').length;
var svg_shapes = [];
var duration = 1.5;


for (var i = 1, l = svg_length; i <= l; i++) //get each piece
{
  svg_shapes.push($('svg.polycat > polygon:nth-of-type('+ i +')'));
}

tmax_tl.staggerFromTo(polycat_shapes, polycat_duration, polycat_staggerFrom, polycat_staggerTo, polycat_stagger, 0);