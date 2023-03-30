import { useEffect, useState } from "react";

export default function LocationsTable() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        const response = await fetch(`/api/locations`);
        const data = await response.json();
        console.log(data);
        setLocations(data);
    }

    return (
        <table className="border border-black text-2xl">
            <thead>
                <tr>
                    <th className="border border-black">id</th>
                    <th className="border border-black">title</th>
                    <th className="border border-black">visited date</th>
                </tr>
            </thead>
            <tbody>
                {locations.map((location) => (
                        <tr>
                            <td className="border border-black">
                                {location.id}
                            </td>
                            <td className="border border-black">{location.title}</td>
                            <td className="border border-black">{location.visited_date}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}