$(function() {
    $('#graphic_2d_example').svg({onLoad: graphic_load_example});
});
function graphic_load_example(svg){
    svg.circle(160, 160, 80, {fill: 'blue', stroke: 'red', strokeWidth: 5});
}
