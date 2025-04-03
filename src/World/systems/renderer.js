function createRenderer() {
  const renderer = new THREE.WebGLRenderer();

  // 打开物理照明
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
