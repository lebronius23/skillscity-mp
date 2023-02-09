export default function handler(req,res) {
    const locations = [
        {
            id:"new-york",
            title: "New York",
            visitedDate: "Today",
            imgUrl: "/assets/new-york.png"
        },
        {
            id:"singapore",
            title: "Singapore",
            visitedDate: "Last year",
            imgUrl: "/assets/singapore.png"
        },
        {
            id:"san-francisco",
            title: "San Francisco",
            author: "Jan 2022",
            imgUrl: "/assets/san-francisco.png"
        }
    ];

    res.json(locations);
}