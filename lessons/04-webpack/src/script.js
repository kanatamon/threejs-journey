import './style.css';
import * as THREE from 'three';

// Setup scene
const scene = new THREE.Scene();

// Setup a box
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

// Setup camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Setup renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas'),
});
renderer.setSize(sizes.width, sizes.height);

// Render a box into scene
renderer.render(scene, camera);
