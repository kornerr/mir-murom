// Orient camera.
murom.camera.position = [0, -50, 0];
murom.camera.rotation = [90, 0, 0];

// Create center and its sphere child.
var root = murom.nodes.node("mir");
var center = murom.nodes.createSphere("c", 0.1);
root.addChild(center);
var sphere = murom.nodes.createSphere("r", 1);
center.addChild(sphere);
sphere.position = [5, 0, 0];

// Rotate sphere around the center.
var angle = 0;
var step = 1;
function rotateSphere()
{
    angle += step;
    center.rotation = [0, angle, 0];
}
setInterval(rotateSphere, 5);
