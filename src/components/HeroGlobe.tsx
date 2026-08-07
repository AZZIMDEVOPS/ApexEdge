"use client";

import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function createGlobePoints(count = 110) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const s1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    const r1 = s1 - Math.floor(s1);
    const s2 = Math.sin(i * 39.346 + 11.135) * 23421.631;
    const r2 = s2 - Math.floor(s2);
    const s3 = Math.sin(i * 71.192 + 43.193) * 89231.123;
    const r3 = s3 - Math.floor(s3);

    const theta = r1 * Math.PI * 2;
    const phi = Math.acos(2 * r2 - 1);
    const radius = 1.18 + r3 * 0.15;

    positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
    positions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
    positions[i * 3 + 2] = Math.cos(phi) * radius;
  }
  return positions;
}

const GLOBE_POINTS = createGlobePoints(110);

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
    }
  });

  const points = useMemo(() => GLOBE_POINTS, []);

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <meshStandardMaterial color="#0F172A" emissive="#1E3A8A" emissiveIntensity={0.3} metalness={0.3} roughness={0.5} />
        </mesh>
      </Float>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.028} color="#60A5FA" transparent opacity={0.8} />
      </points>
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[1.45, 0.008, 8, 50]} />
        <meshBasicMaterial color="#3B82F6" />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[1.65, 0.008, 8, 70]} />
        <meshBasicMaterial color="#38BDF8" />
      </mesh>
      <Sphere position={[1.6, 0.9, 0.6]} args={[0.12, 24, 24]}>
        <meshStandardMaterial color="#2563EB" emissive="#1D4ED8" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere position={[-1.7, -0.6, 0.6]} args={[0.09, 24, 24]}>
        <meshStandardMaterial color="#6366F1" emissive="#4F46E5" emissiveIntensity={0.4} />
      </Sphere>
      <Sphere position={[0.7, -1.2, 1.2]} args={[0.1, 24, 24]}>
        <meshStandardMaterial color="#38BDF8" emissive="#0284C7" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
}

export function HeroGlobe() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/95 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:h-[460px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 35 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={2.2} color="#60A5FA" />
        <pointLight position={[-4, -3, 2]} intensity={1.4} color="#818CF8" />
        <GlobeMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.2),transparent_40%)]" />
    </div>
  );
}
