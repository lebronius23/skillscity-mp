import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import LocationsGrid from "@/components/locations/locations-grid";

export default function LocationsPage() {
    return (
        <div className="w-full">
            <Header name="Locations"/>

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <LocationsGrid/>
                </div>
            </Content>   
            
           

            <Footer 
                buttons={[
                    { title: "Homepage", href: "/" }
                ]}
            />    
        </div>
    );
}