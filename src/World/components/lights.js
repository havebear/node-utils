function createLights () {
    // 颜色 color，强度 intensity，距离 distance，衰减 decay，角度 angle，衰减 exponent，阴影 shadow
    const light = new THREE.DirectionalLight('white', 8);

    light.position.set(10, 10, 10); // 设置光源位置

    return light;
}

export {
    createLights
}