import * as React from 'react'
import { Canvas } from "@react-three/fiber"
import { View, StyleSheet } from "react-native"
import Cake from "./components/Cake"
import { StatusBar } from "expo-status-bar"

export default function App() {
    return (
            <View style={styles.container}>
                <Canvas
                    onCreated={(state) => {
                        const _gl = state.gl.getContext()
                        const pixelStorei = _gl.pixelStorei.bind(_gl)
                        _gl.pixelStorei = function(...args) {
                            const [parameter] = args
                            switch(parameter) {
                                case _gl.UNPACK_FLIP_Y_WEBGL: return pixelStorei(...args) } } }}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Cake position={[0, 0, 0]} />
                </Canvas>
                <StatusBar style="dark" />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});
