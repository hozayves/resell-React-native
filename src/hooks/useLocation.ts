import { useEffect, useState } from "react"
import * as Location from 'expo-location'

const useLocation = () => {
    const [location, setLocation] = useState<{ latitude: number, longitude: number }>()
    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync()
            if (!granted) return

            const result = await Location.getLastKnownPositionAsync()
            if (result?.coords) {
                setLocation({ latitude: result.coords.latitude, longitude: result.coords.longitude })
            }
        } catch (error) {
            console.log("Location error, ", error)
        }
    }
    useEffect(() => {
        getLocation()
    }, [])

    return location
}

export default useLocation