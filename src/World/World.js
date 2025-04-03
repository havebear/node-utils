import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js'
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
        const cube2 = createCube();
        const cube3 = createCube();
        cube2.add(cube3)
        cube.add(cube2)
        cube2.position.set(2, 0, 0)
        cube3.position.set(4, 0, 0)
        cube2.scale.set(0.5, 0.5, 0.5)
        cube3.scale.set(0.25, 0.25, 0.25)
        const light = createLights();
        // 可以添加任意数量的对象，用逗号分隔
        scene.add(cube, light);
        // 通过创建一个 Resizer 实例来实现窗口大小变化时，canvas 大小也跟着变化
        const resizer = new Resizer(container, camera, renderer);
    }

    render () {
        renderer.render(scene, camera);
    }
}

export { World };