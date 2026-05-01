import { useGLTF } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";
import React, { Suspense } from "react";
import { View } from "react-native";

function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function GLTFModel() {
  const gltf = useGLTF(require("../../../assets/models/TestCube2.glb")) as any;

  return <primitive object={gltf.scene} scale={1.5} />;
}

export function ModelViewer() {
  const [OrbitControls, events] = useControls();
  return (
    <View style={{ flex: 1 }} {...events}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        {/* <Box /> */}
        <Suspense fallback={null}>
          <GLTFModel />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </View>
  );
}
