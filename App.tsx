import * as React from 'react';
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { View, StyleSheet } from "react-native"

function Box(props: any) {
    const mesh = useRef(null)
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}

export default function App() {
    return (
        <View style={styles.container}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});
