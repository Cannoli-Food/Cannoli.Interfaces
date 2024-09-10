
export interface IGeocode {
    address_components: Array<{
        long_name: string;
        short_name: string;
        types: string[];
    }>;
    formatted_address: string;
    geometry: {
        bounds: {
            northeast: {
                lat: number,
                lng: number,
            },
            southwest: {
                lat: number,
                lng: number,
            },
        },
        location: {
            lat: -23.5267578,
            lng: -46.5612428,
        },
        location_type: 'APPROXIMATE',
        viewport: {
            northeast: {
                lat: number,
                lng: number,
            },
            southwest: {
                lat: number,
                lng: number,
            },
        },
    };
    place_id: string;
    types: string[];
}
