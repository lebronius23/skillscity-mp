import Telephone from "./telephone";

export default function ContactDetails({ details, contactDetails, telephone}) {
    return (
        <div className="w-full">
            <Telephone 
                telephone={telephone}
            />
        </div>
    )
}