import { useEffect, useState } from "react"
import { Asset } from 'expo-asset'
import { useFrame } from '@react-three/fiber'
import { loadObjAsync } from 'expo-three'

const assetModel = Asset.fromModule(require('../assets/wedding.obj'))
const assetMtl = Asset.fromModule(require('../assets/wedding.mtl'))

// "Wedding Cake" (https://skfb.ly/op8MA) by Jayasurya Aasaithambi is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

const Cake = (props: any) => {
    const [obj, loadObj] = useState<any>(null)

    useFrame(() => obj && (obj.rotation.y += 0.002))

    useEffect(() => {
        (async () => {
            try {
                await assetModel.downloadAsync()
                await assetMtl.downloadAsync()

                const obj = await loadObjAsync({ asset: assetModel.uri, mtlAsset: assetMtl.uri })
                obj.scale.x = 1
                obj.scale.y = 1
                obj.scale.z = 1
                obj.rotation.x = 0.6
                obj.position.y = -1
                loadObj(obj)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return obj && <primitive object={obj}/>
}

export default Cake
