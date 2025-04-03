function createCamera () {
  // 创建一个透视相机，单位默认是 米
  const camera = new THREE.PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane，意味着距离相机不到十厘米的午提将不可见
    100, // far clipping plane，意味着我们看到的物体离我们最远的距离，100 就是能看到一百米的距离
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  return camera;
}
  
export { createCamera };