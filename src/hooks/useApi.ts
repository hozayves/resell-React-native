import * as React from 'react'


export default function useApi(apiFunc: any) {
    const [data, setData] = React.useState<any>([])
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const request = async () => {
        setLoading(true)
        const response = await apiFunc()
        setLoading(false)
        if (!response.ok) return setError(true)

        setError(false)
        setData(response.data)
    }
    return { request, error, data, loading }
}