import { useCallback } from "react";
import axios from 'axios';
import { PaginableDogsDto } from "../../model/types";

export function useFetchDogs() {
    const url = 'http://localhost:3000/api/dogs?page={pageNumber}';

    return useCallback(async (pageNumber: number): Promise<PaginableDogsDto | undefined> => {
        const enrichedUrl = url.replace('{pageNumber}', `${pageNumber}`);
        try {
            const response = await axios.get(enrichedUrl, {
                validateStatus: (status) => status === 200
            });
            return response.data;
        } catch (err) {
            console.error('Something went wrong when requesting info about dogs');
        }
    }, [url]);
}