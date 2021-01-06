var scene = new THREE.Scene;
var width = window.innerWidth;
var height = window.innerHeight;

var group = new THREE.Group();
var rotateGroup = new THREE.Group();

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 10000);
camera.position.y = 0;
camera.position.z = 500;

window.addEventListener('resize',function(){
    var width =window.innerWidth;
    var height=window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
});

var geometry = new THREE.SphereGeometry((30, 30, 30));
var material = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } ); 
var sun = new THREE.Mesh(geometry, material);
sun.position.z = -50;
sun.position.x = -200;
sun.position.y = 150;
group.add(sun);

var geometry = new THREE.BoxGeometry( 300, 70, 300 );
var material = new THREE.MeshBasicMaterial( {color: 0xffeead} );
var beach = new THREE.Mesh( geometry, material );
beach.position.z = -6;
beach.position.x = -2;
beach.position.y = -50;
group.add(beach);

var geometry = new THREE.BoxGeometry( 480, 90, 400 );
var material = new THREE.MeshBasicMaterial( {color: 0x006994} );
var sea = new THREE.Mesh( geometry, material );
sea.position.z = 0;
sea.position.x = -2;
sea.position.y = -70;
group.add(sea);

var geometry = new THREE.SphereGeometry((10, 30, 15));
var material = new THREE.MeshBasicMaterial( { color: 0x3A5F0B } ); 
var leave1 = new THREE.Mesh(geometry, material);
leave1.position.z = 30;
leave1.position.x = -80;
leave1.position.y = 25;
group.add(leave1);

var geometry = new THREE.BoxGeometry( 8, 30, 8 );
var material = new THREE.MeshBasicMaterial( {color: 0x663300} );
var log1 = new THREE.Mesh( geometry, material );
log1.position.z = 30;
log1.position.x = -80;
log1.position.y = 0;
group.add(log1);

var geometry = new THREE.SphereGeometry((10, 30, 15));
var material = new THREE.MeshBasicMaterial( { color: 0x3A5F0B } ); 
var leave2 = new THREE.Mesh(geometry, material);
leave2.position.z = -30;
leave2.position.x = 0;
leave2.position.y = 30;
group.add(leave2);

var geometry = new THREE.BoxGeometry( 10, 50, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0x663300} );
var log2 = new THREE.Mesh( geometry, material );
log2.position.z = -30;
log2.position.x = 0;
log2.position.y = 3;
group.add(log2);

var geometry = new THREE.SphereGeometry((10, 100, 15));
var material = new THREE.MeshBasicMaterial( { color: 0x3A5F0B } ); 
var leave3 = new THREE.Mesh(geometry, material);
leave3.position.z = 0;
leave3.position.x = 30;
leave3.position.y = 60;
group.add(leave3);

var geometry = new THREE.BoxGeometry( 10, 100, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0x663300} );
var log3 = new THREE.Mesh( geometry, material );
log3.position.z = 0;
log3.position.x = 30;
log3.position.y = 3;
group.add(log3);

var geometry = new THREE.SphereGeometry((10, 30, 15));
var material = new THREE.MeshBasicMaterial( { color: 0x3A5F0B } ); 
var leave4 = new THREE.Mesh(geometry, material);
leave4.position.z = 40;
leave4.position.x = 70;
leave4.position.y = 25;
group.add(leave4);

var geometry = new THREE.BoxGeometry( 10, 30, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0x663300} );
var log4 = new THREE.Mesh( geometry, material );
log4.position.z = 40;
log4.position.x = 70;
log4.position.y = 0;
group.add(log4);

var geometry = new THREE.SphereGeometry((10, 130, 30));
var material = new THREE.MeshBasicMaterial( { color: 0x3A5F0B } ); 
var leave5 = new THREE.Mesh(geometry, material);
leave5.position.z = -20;
leave5.position.x = -135;
leave5.position.y = 80;
group.add(leave5);

var geometry = new THREE.BoxGeometry( 10, 130, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0x663300} );
var log5 = new THREE.Mesh( geometry, material );
log5.position.z = -20;
log5.position.x = -135;
log5.position.y = 3;
group.add(log5);

var geometry = new THREE.ConeBufferGeometry( 80, 150, 400 );
var material = new THREE.MeshBasicMaterial( {color: 0x1bcd45} );
var mountain1 = new THREE.Mesh( geometry, material );
mountain1.position.z = -80;
mountain1.position.x = -70;
mountain1.position.y = 60;
group.add(mountain1);

var geometry = new THREE.ConeBufferGeometry( 80, 150, 400 );
var material = new THREE.MeshBasicMaterial( {color: 0x1bcd45} );
var mountain2 = new THREE.Mesh( geometry, material );
mountain2.position.z = -80;
mountain2.position.x = 70;
mountain2.position.y = 60;
group.add(mountain2);

var geometry = new THREE.TorusGeometry( 7, 3, 16, 200 );
var material = new THREE.MeshBasicMaterial( { color: 0xffa500 } );
var lifebuoy = new THREE.Mesh( geometry, material );
lifebuoy.position.z = 185;
lifebuoy.position.x = 40;
lifebuoy.position.y = -22;
lifebuoy.rotation.x = 1.57;
rotateGroup.add(lifebuoy);

var geometry = new THREE.IcosahedronGeometry(10, 0);
var material = new THREE.MeshBasicMaterial( { color: 0x5a4d41 } );
var stone1 = new THREE.Mesh( geometry, material );
stone1.position.x = 50;
stone1.position.y = -10;
stone1.position.z = 130;
group.add(stone1);

var geometry = new THREE.DodecahedronGeometry(15, 0);
var material = new THREE.MeshBasicMaterial( { color: 0x5a4d41 } );
var stone2 = new THREE.Mesh( geometry, material );
stone2.position.z = 100;
stone2.position.x = 100;
stone2.position.y = -6;
group.add(stone2);

var geometry = new THREE.ConeGeometry( 20, 60, 300 );
var material = new THREE.MeshBasicMaterial( {color: 0xFF4500} );
var camp1 = new THREE.Mesh( geometry, material );
camp1.position.z = 100;
camp1.position.x = -40;
camp1.position.y = 10;
group.add(camp1);

var geometry = new THREE.ConeGeometry( 20, 60, 300 );
var material = new THREE.MeshBasicMaterial( {color: 0xFF4500} );
var camp2 = new THREE.Mesh( geometry, material );
camp2.position.z = 80;
camp2.position.x = -80;
camp2.position.y = 10;
group.add(camp2);

var geometry = new THREE.ConeGeometry( 20, 60, 300 );
var material = new THREE.MeshBasicMaterial( {color: 0xFF4500} );
var camp3 = new THREE.Mesh( geometry, material );
camp3.position.z = 60;
camp3.position.x = -30;
camp3.position.y = 10;
group.add(camp3);

var geometry = new THREE.BoxGeometry( 28, 25, 23 );
var material = new THREE.MeshBasicMaterial( {color: 0x966F33} );
var shipPart1 = new THREE.Mesh( geometry, material );
shipPart1.position.z = 185;
shipPart1.position.x = -80;
shipPart1.position.y = -18;
rotateGroup.add(shipPart1);

var geometry = new THREE.ConeGeometry( 13, 40, 100 );
var material = new THREE.MeshBasicMaterial( {color: 0x966F33} );
var shipPart2 = new THREE.Mesh( geometry, material );
shipPart2.position.z = 185;
shipPart2.position.x = -50;
shipPart2.position.y = -18;
shipPart2.rotation.z = -1.57;
rotateGroup.add(shipPart2);

var geometry = new THREE.ConeGeometry( 13, 40, 100 );
var material = new THREE.MeshBasicMaterial( {color: 0x966F33} );
var shipPart3 = new THREE.Mesh( geometry, material );
shipPart3.position.z = 185;
shipPart3.position.x = -112;
shipPart3.position.y = -18;
shipPart3.rotation.z = 1.57;
rotateGroup.add(shipPart3);

var geometry = new THREE.BoxGeometry( 28, 20, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var windShield = new THREE.Mesh( geometry, material );
windShield.position.z = 185;
windShield.position.x = -80;
windShield.position.y = 3;
windShield.rotation.x = 1.57;
windShield.rotation.y = 0.785;
rotateGroup.add(windShield);

var geometry = new THREE.BoxGeometry( 14, 45, 2 );
var material = new THREE.MeshBasicMaterial( {color: 0xcd8500} );
var plank = new THREE.Mesh( geometry, material );
plank.position.z = 120;
plank.position.x = -80;
plank.position.y = -15;
plank.rotation.x = 1.57;
group.add(plank);

var geometry = new THREE.SphereGeometry( 5, 5, 5 );
var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
var boy = new THREE.Mesh( geometry, material );
boy.position.z = 185;
boy.position.x = -75;
boy.position.y = -3;
rotateGroup.add(boy);

var geometry = new THREE.SphereGeometry( 5, 5, 5 );
var material = new THREE.MeshBasicMaterial( {color: 0xFF69B4} );
var girl = new THREE.Mesh( geometry, material );
girl.position.z = 180;
girl.position.x = -49;
girl.position.y = -10;
girl.rotation.x = 0;
girl.rotation.y = 0;
rotateGroup.add(girl);

var geometry = new THREE.SphereGeometry( 5, 5, 5 );
var material = new THREE.MeshBasicMaterial( {color: 0xDA70D6} );
var child = new THREE.Mesh( geometry, material );
child.position.z = 185;
child.position.x = 40;
child.position.y = -20;
rotateGroup.add(child);

function CustomSinCurve( scale ) {

    THREE.Curve.call( this );
    this.scale = ( scale === undefined ) ? 1 : scale;

}
CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function ( t ) {

    var tx = t * 5 - 1.5;
    var ty = Math.sin( -2.0 * Math.PI * t );
    var tz = 0;

    return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

};

var path = new CustomSinCurve( 15 );
var geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
var material = new THREE.MeshBasicMaterial( { color: 0x875638 } );
var rope = new THREE.Mesh( geometry, material );
rope.position.z = 185; 
rope.position.x = -20;
rope.position.y = -20;
rotateGroup.add(rope);

group.add(rotateGroup);

scene.add(group);
renderer.render(scene, camera);

document.addEventListener( 'keypress', onDocumentKeyPress, false );

function onDocumentKeyPress( event ) {
        var keyCode = event.which;
        
        if (keyCode == 97){
            group.rotateY(-0.1);
        }
        else if (keyCode == 100){
            group.rotateY(0.1); 
        }
        else if (keyCode == 119){
            group.rotateX(0.1);
        }
        else if (keyCode == 115){
            group.rotateX(-0.1);
        }
        else if (keyCode == 122){
            group.rotateZ(0.1);
        }
        else if (keyCode == 120){
            group.rotateZ(-0.1);
        }
        else if (keyCode == 106){
            if (girl.position.x > -140){
                girl.position.x -= 2;
                if (girl.position.z > 178 && girl.position.z < 188){
                    if (girl.position.x < -114){
                        girl.position.x += 2;
                    }
                }
            }
        }
        else if (keyCode == 108){
            if (girl.position.x < 140){
                girl.position.x += 2;
                if (girl.position.z > 178 && girl.position.z < 188){
                    if (girl.position.x > -46){
                        girl.position.x -= 2;
                    }
                }
                
            }    
        }
        else if (keyCode == 105){
            if (girl.position.z > 10){
                girl.position.z -= 2;
            }
        }
        else if (keyCode == 107){
            if (girl.position.z < 140 || (girl.position.x > -55 && girl.position.x < -48 && girl.position.z < 185) ){
                girl.position.z += 2;
                if (girl.position.z == 186){
                    plank.position.z = 120;
                    plank.position.x = -80;
                    plank.rotation.x = 1.57;
                    if (girl.position.x < -60){
                        girl.position.x -= 2;
                    }
                }
            }    
        }
        if ((girl.position.x > -55 && girl.position.x < -48) && (girl.position.z > 178 && girl.position.z < 188)){
            if (keyCode == 52){
                if (rotateGroup.position.z < 55 && rotateGroup.position.z > 40){
                    rotateGroup.rotation.y = -0.1;
                    rotateGroup.position.z = 0; 
                }
                if (rotateGroup.position.x > -107){
                    rotateGroup.position.x -= 3;     
                }
            }
            else if (keyCode == 54){
                if (rotateGroup.position.z > -50 && rotateGroup.position.z < -30){
                    rotateGroup.position.z = 0;
                    rotateGroup.rotation.y = -3.14;
                }
                if (rotateGroup.position.x < 75){
                    rotateGroup.position.x += 3;  
                }
            }
            else if (keyCode == 56){
                if (rotateGroup.position.x > -111 && rotateGroup.position.x < -100){
                    rotateGroup.rotation.y = -1.57;
                    rotateGroup.position.x = -40; 
                }  
                if (rotateGroup.position.z > -45)
                    rotateGroup.position.z -= 3;
            }
            else if (keyCode == 50){
                if (rotateGroup.position.x < 80 && rotateGroup.position.x > 70){
                    rotateGroup.rotation.y = 1.57;
                    rotateGroup.position.x = 40;
                }
                if (rotateGroup.position.z < 50){
                    rotateGroup.position.z += 3;     
                }
            }
        }
        renderer.render(scene, camera);
    }