import { useEffect, useRef } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

export const OctopusBalls = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // シーン
    const scene = new THREE.Scene();
    // カメラ
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.set(-500, 100, -700);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    const renderer = new THREE.WebGLRenderer({
      antialias: devicePixelRatio === 1,
    });
    // レンダラー
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    const el = mountRef.current;
    el?.appendChild(renderer.domElement);

    // カメラコントローラー
    const controller = new TrackballControls(camera, renderer.domElement);
    controller.noPan = true;
    controller.minDistance = 200;
    controller.maxDistance = 1000;
    controller.dynamicDampingFactor = 0.05;

    // 環境光
    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);

    // スポットライト
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-10000, 0, 0);
    spotLight.castShadow = true; //影
    scene.add(spotLight);

    // 地球
    const geometry = new THREE.SphereGeometry(100, 60, 60);
    const material = new THREE.MeshPhongMaterial({
      // map: new THREE.TextureLoader().load("images/ground.jpg"),
      map: new THREE.TextureLoader().load("images/takoyaki.jpg"),
      bumpMap: new THREE.TextureLoader().load("images/bump.jpg"),
      bumpScale: 5,
    });
    const ground = new THREE.Mesh(geometry, material);
    ground.receiveShadow = true;
    scene.add(ground);

    // 背景
    const geometry2 = new THREE.SphereGeometry(1000, 60, 40);
    geometry2.scale(-1, 1, 1);
    const material2 = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("images/star.jpg"),
    });
    const background = new THREE.Mesh(geometry2, material2);
    scene.add(background);

    const animate = () => {
      controller.update();
      renderer.render(scene, camera);
      ground.rotation.y += 0.003;
      requestAnimationFrame(animate);
    };
    animate();
  });

  return <div ref={mountRef} />;
};
