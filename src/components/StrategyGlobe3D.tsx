"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const GLOBE_POINTS = (() => {
  const positions = [] as number[];
  const numPoints = 140;
  const phiStep = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phiStep * i;
    const r = 1.3 + ((i % 7) * 0.03);

    positions.push(
      Math.cos(theta) * radiusAtY * r,
      y * r,
      Math.sin(theta) * radiusAtY * r
    );
  }
  return new Float32Array(positions);
})();

function StrategyGlobeScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef1 = useRef<THREE.Mesh>(null);
  const torusRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
    }
    if (torusRef1.current) {
      torusRef1.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.15;
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const points = useMemo(() => GLOBE_POINTS, []);

  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial color="#0F172A" emissive="#2563EB" emissiveIntensity={0.4} metalness={0.4} roughness={0.4} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#3B82F6" transparent opacity={0.9} />
      </points>
      <Torus ref={torusRef1} args={[1.6, 0.02, 8, 50]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#6366F1" emissive="#4F46E5" emissiveIntensity={0.4} metalness={0.6} />
      </Torus>
      <Torus ref={torusRef2} args={[1.8, 0.015, 8, 70]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#38BDF8" emissive="#0284C7" emissiveIntensity={0.3} metalness={0.5} />
      </Torus>
      <Sphere position={[1.7, 0.8, 0.5]} args={[0.12, 24, 24]}>
        <meshStandardMaterial color="#2563EB" emissive="#1D4ED8" emissiveIntensity={0.6} />
      </Sphere>
      <Sphere position={[-1.8, -0.5, 0.7]} args={[0.1, 24, 24]}>
        <meshStandardMaterial color="#6366F1" emissive="#4F46E5" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
}

export function StrategyGlobe3D() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[2rem]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 35 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[5, 5, 5]} intensity={3} color="#3B82F6" />
        <pointLight position={[-4, -3, 2]} intensity={2} color="#6366F1" />
        <pointLight position={[0, -5, 3]} intensity={1.5} color="#38BDF8" />
        <StrategyGlobeScene />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_50%)]" />
    </div>
  );
}
