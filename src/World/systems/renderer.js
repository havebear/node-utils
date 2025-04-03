function createRenderer() {
  // 创建一个 WebGL 渲染器，antialias 为 true 开启抗锯齿
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // 打开物理照明
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
