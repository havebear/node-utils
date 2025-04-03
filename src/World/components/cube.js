function createCube() {
  // create a geometry
  const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new THREE.MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}

export { createCube };