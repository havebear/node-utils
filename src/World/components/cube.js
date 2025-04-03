// 使立方体在 任何 FPS都以每秒30度旋转

function createCube () {
  // create a geometry
  const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new THREE.MeshStandardMaterial({ color: '#fff' });

  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8); // 设置立方体位置

  const radiansPerSecond = THREE.MathUtils.degToRad(30); 

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta; // 旋转立方体
    cube.rotation.y += radiansPerSecond * delta; // 旋转立方体
    cube.rotation.x += radiansPerSecond * delta; // 旋转立方体
  }

  return cube;
}

export { createCube };