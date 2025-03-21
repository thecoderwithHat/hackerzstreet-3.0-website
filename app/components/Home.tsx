"use client";
import Image from "next/image";
import RightSection from "./RightHome";
import {Poppins} from "next/font/google";
import HeroBackground from "@/public/backgrounds/hero.svg";
// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';
// import {useEffect, lazy, Suspense} from "react";
import {useEffect} from "react";

// const Spline = lazy(() => import('@splinetool/react-spline'));

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

function HomePage() {

  // function onLoad() {
  //   // camera
  //   const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -100000, 100000);
  //   camera.position.set(2.04, 652.14, 401.2);
  //   camera.quaternion.setFromEuler(new THREE.Euler(-1.02, 0, 0));
  //
  //   // scene
  //   const scene = new THREE.Scene();
  //
  //   // spline scene
  //   const loader = new SplineLoader();
  //   loader.load(
  //     'https://prod.spline.design/WFmytYRSQ4j15Yxp/scene.splinecode',
  //     (splineScene) => {
  //       scene.add(splineScene);
  //     }
  //   );
  //
  //   // renderer
  //   const renderer = new THREE.WebGLRenderer({antialias: true});
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setAnimationLoop(animate);
  //   document.body.appendChild(renderer.domElement);
  //
  //   // scene settings
  //   renderer.shadowMap.enabled = true;
  //   renderer.shadowMap.type = THREE.PCFShadowMap;
  //
  //   scene.background = new THREE.Color('#2d2e32');
  //   renderer.setClearAlpha(0);
  //
  //   // orbit controls
  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.125;
  //
  //   window.addEventListener('resize', onWindowResize);
  //
  //   function onWindowResize() {
  //     camera.left = window.innerWidth / -2;
  //     camera.right = window.innerWidth / 2;
  //     camera.top = window.innerHeight / 2;
  //     camera.bottom = window.innerHeight / -2;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   }
  //
  //   function animate() {
  //     controls.update();
  //     renderer.render(scene, camera);
  //   }
  // }

  useEffect(() => {
    // onLoad();
  }, []);

  return (
    <main className="bg-black text-white px-20 py-10">
      <div className={"absolute w-screen h-full top-0 left-0"}>
        <Image src={HeroBackground} alt={"Background"} className={"w-full h-auto"}/>
      </div>
      {/* Top Section */}
      <div className={``}>
        <h1 className="text-8xl font-bold font-yapari">HACKERZSTREET</h1>
        <p className={`text-ieeeyellow text-lg text-left font-bold mt-2 font-yapari`}>
          A 24-HOUR FLAGSHIP HACKATHON
          <br></br>
          BY IEEE CS MUJ
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 pt-10">
          <span className="text-6xl font-bold font-yapari">3.0</span>
          <p className={`text-sm md:text-base ${poppins.className}`}>
            Hackerzstreet 3.0, set to ignite creativity and innovation – an
            intense 24-hour coding marathon packed with excitement and
            collaboration. This event features a single round where
            participants delve into diverse technical themes, each presenting
            unique challenges and opportunities.
          </p>

          <div className="relative flex items-center space-x-2 bg-transparent cursor-pointer mt-10">
            <div className="font-bold rounded-full border-white/50 border-[1px] py-3 px-10">
              Want to know more?
              <br></br>
              <span className={"text-white/50 text-sm font-light"}>Scroll to find out!</span>
            </div>
            <div className="absolute -right-10 text-4xl w-16 h-16 rounded-full bg-ieeeyellow flex justify-center pt-2">
              &#x2193;
            </div>
          </div>
        </div>

        {/* Center Section */}
        {/*<Suspense fallback={<div>Loading...</div>}>*/}
        {/*  <Spline*/}
        {/*    scene="https://prod.spline.design/WFmytYRSQ4j15Yxp/scene.splinecode"*/}
        {/*    className={"w-full absolute top-80 left-80"}*/}
        {/*    onLoad={() => {*/}
        {/*      console.log("Loaded");*/}
        {/*      const canvas = document.getElementsByTagName("canvas")[0];*/}
        {/*      canvas.ariaDisabled = "true";*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Suspense>*/}

        {/* Right Section */}
        <RightSection/>
      </div>
    </main>
  );
}

export default HomePage;