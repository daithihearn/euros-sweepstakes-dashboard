import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Score } from "models/Score"

if (
    !process.env.REACT_APP_API_URL ||
    process.env.REACT_APP_API_URL.trim() === ""
) {
    throw new Error("REACT_APP_API_URL environment variable is not set")
}

const API_URL = process.env.REACT_APP_API_URL.trim()

export const useScores = (refreshInterval: number) => {
    const scores = useQuery<Score[]>({
        queryKey: ["scores"],
        queryFn: async () => {
            const url = `${API_URL}/api/v1/scores`
            const res = await axios.get(url)
            if (res.status !== 200) {
                throw new Error("Failed to fetch scores")
            }
            return res.data
        },
        refetchInterval: refreshInterval,
    })

    return scores
}
