import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

function StarModel() {
  const { nodes } = useGLTF('/star.glb') as any; 
  const meshRef = useRef<THREE.Mesh>(null!);

  // Smooth continuous rotation so it's not "dead" when not scrolling
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 1;
      meshRef.current.rotation.z = 1;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={nodes.Circle.geometry} 
      scale={1} // Increased scale as requested
    >
      {/* Standard Three.js material used inside R3F */}
      <meshPhysicalMaterial 
        color="#0a0a0a"            // Darker tint for that "Obsidian" glass look
        transmission={1} 
        roughness={0.02}           // Very shiny
        ior={1.5}                  // Glass Index of Refraction
        thickness={4}              // Single thickness attribute
        transparent={true}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

const GlassStar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (containerRef.current) {
      // 1. Vertical Movement (The "Falling" effect)
      // gsap.to(containerRef.current, {
      //   y: "85vh",
      //   ease: "none", 
      //   scrollTrigger: {
      //     trigger: document.body,
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: 0.5, 
      //   }
      // });

      // 2. Scroll-Linked Rotation (The "Rolling" effect)
      gsap.to(containerRef.current, {
        rotation: 360, // A full 360-degree spin over the whole page
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Slightly higher scrub for a "heavy" rotation feel
        }
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        right: '-100px',           // Hide more of the larger star
        width: '450px',            // Larger box for larger star
        height: '450px',
        zIndex: 1000,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    >
      <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
        <ambientLight intensity={0.5} />
        {/* Gold highlight light */}
        <pointLight position={[5, 5, 5]} color="#e0b643" intensity={2} />
        <pointLight position={[-5, -5, 2]} color="#ffffff" intensity={1} />
        
        <StarModel />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default GlassStar;
