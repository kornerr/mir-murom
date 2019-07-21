// Orient camera.
murom.camera.position = [0, -50, 0];
murom.camera.rotation = [90, 0, 0];

var root = murom.nodes.node("mir");

// Create 16 spheres in circle.
for (var i = 0; i < 16; ++i)
{
    const containerName = formatString("c-{0}", i);
    const sphereName = formatString("s-{0}", i);
    var container = murom.nodes.createSphere(containerName, 0);
    var sphere = murom.nodes.createSphere(name, 1);
    container.addChild(sphere);
    root.addChild(container);
    
    sphere.position = [8, 0, 0];
    const angle = (360 / 16) * i;
    container.rotation = [0, angle, 0];
}
