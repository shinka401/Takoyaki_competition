import { NextPage } from "next";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeSample: NextPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // シーン作って
    const scene = new THREE.Scene();
    // カメラ作って
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // レンダラー作って
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const el = mountRef.current;

    el?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  });

  return <div ref={mountRef} />;
};

export default ThreeSample;
