var three = THREE

var scene = new three.Scene()

var cam = new three.PerspectiveCamera(/*ViewAngle*/ 75,
        /*Aspect Ratio*/ window.innerWidth/window.innerHeight,
        0.1,
        1000
    )
//Renderer:
var gpu = new three.WebGLRenderer( {antialias: true} )
gpu.setClearColor('#f2f4f5')
gpu.setSize(window.innerWidth,window.innerHeight)
//end Renderer

//Setting Renderer DOM
document.body.appendChild(gpu.domElement)

window.addEventListener('resize',() =>{
    //auto update almost all aspect ratio's
    gpu.setSize(window.innerWidth,window.innerHeight)
    cam.aspect = window.innerWidth / window.innerHeight
    cam.updateProjectionMatrix()

})

gpu.render(scene,cam)

var geometry = new three.SphereGeometry(1,10,10)
var material = new three.MeshLambertMaterial({color:0xFFCC00})
var mesh = new three.Mesh(geometry,material)

scene.add(mesh)