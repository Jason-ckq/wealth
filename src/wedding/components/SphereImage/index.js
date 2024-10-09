import React, { useEffect } from 'react';
import * as THREE from 'three';
import './style.less';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let dom = null,
  count = 200,
  color = ['#ce8e53', '#e09f3e', '#ffbc6a'];

const SphereImage = () => {
  var renderer, scene, camera, particle;

  window.onload = function () {
    init();
    animate();
  };

  function init() {
    dom = document.querySelector('.canvas');
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1,
    );
    renderer.setSize(dom.clientWidth, dom.clientHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    dom.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    );
    camera.position.z = 400;
    scene.add(camera);
    particle = new THREE.Object3D();
    scene.add(particle);

    const material = new THREE.MeshPhongMaterial({
      color: color[Math.floor(Math.random() * color.length)],
      shading: THREE.FlatShading,
      transparent: true,
      opacity: 0.7,
    });

    for (var i = 0; i < count; i++) {
      const geometry =
        Math.floor(Math.random() * 2) === 1
          ? new THREE.TetrahedronGeometry(2, 0)
          : new THREE.IcosahedronGeometry(2, 0);

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize();
      mesh.position.multiplyScalar(90 + Math.random() * 700);
      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2,
      );
      particle.add(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    const lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0xffffff, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(0xffffff, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    camera.aspect = dom.clientWidth / dom.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(dom.clientWidth, dom.clientHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    particle.rotation.x += 0.0;
    particle.rotation.y -= 0.003;
    renderer.clear();
    renderer.render(scene, camera);
  }

  return <div className="canvas" />;
};

export default SphereImage;
