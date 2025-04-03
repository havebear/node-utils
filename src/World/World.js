import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

/**
 * 通过在 模块作用域内声明变量来创建类似于私有变量的东西
 * 私有化变量，不希望外界直接访问，
 * 所以在本模块定义了如下三个变量，
 * 却显示第二个实例将覆盖第一个实例的变量，
 * 因为这里只打算创建一个 World，所以接受这个限制
 */
let camera;
let renderer;
let scene;

class World {
    constructor (container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const cube = createCube();
        scene.add(cube);
        // 通过创建一个 Resizer 实例来实现窗口大小变化时，canvas 大小也跟着变化
        const resizer = new Resizer(container, camera, renderer);
    }

    render () {
        renderer.render(scene, camera);
    }
}

export { World };