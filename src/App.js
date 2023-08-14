import { useEffect } from "react";
import * as THREE from "three";
import Core from "./core";

function App() {
  useEffect(() => {
    const core = new Core("threeKJCanvas");
    core.initialize();
    core.animate();
    core.camera.position.z = 7;

    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // core.scene.add(boxMesh);

    // Adding geometries to a three.js scene.
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -1;
    core.scene.add(boxMesh);

    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32, 16);
    const cylinderMaterial = new THREE.MeshNormalMaterial();
    const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinderMesh.position.x = 1;
    core.scene.add(cylinderMesh);

    // const torusGeometry = new THREE.TorusGeometry(0.5, 0.25, 20, 20);
    // const torusMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    // core.scene.add(torusMesh);
  }, []);

  return (
    <div className="App">
      <canvas id="threeKJCanvas"></canvas>
    </div>
  );
}

export default App;
