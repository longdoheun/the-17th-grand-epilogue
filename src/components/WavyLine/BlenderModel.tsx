import React from "react";
import { useGLTF } from "@react-three/drei";

export default function BlenderModel(props: any) {
  // useGLTF 훅을 사용하여 모델을 로드합니다.
  // 이 경로는 public 폴더를 기준으로 합니다.
  const { scene } = useGLTF("/static/_rose.glb");

  // ** 팁: 모델 크기 조정은 여기서! **
  // 로드된 씬 객체(THREE.Group)의 크기를 조정합니다.
  // gltf.scene을 복제하여 여러 곳에 배치할 때 독립적으로 만듭니다.
  const model = scene.clone();
  model.scale.set(0.5, 0.5, 0.5); // 예시: 0.5배로 축소

  // <primitive>를 사용하여 실제 Three.js 객체를 씬에 추가합니다.
  return <primitive object={model} {...props} />;
}
