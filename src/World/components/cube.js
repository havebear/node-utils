function createCube () {
  // create a geometry
  const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new THREE.MeshStandardMaterial({ color: '#fff' });

  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8); // 设置立方体位置

  return cube;
}

export { createCube };