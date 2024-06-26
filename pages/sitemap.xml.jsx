const ROOMS_URL = "https://palaceonganges.com/room-details";

function generateSiteMap(rooms) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://palaceonganges.com/</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/rooms-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>
                https://palaceonganges.com/lower-level-heritage-deluxe-room-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>
                https://palaceonganges.com/upper-level-heritage-deluxe-room-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>
                https://palaceonganges.com/ganges-view-room-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/page-facilities</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/cab-booking-services-palace-on-ganges</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/boat-booking-palace-on-ganges</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/guided-city-tour-service-in-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/restaurant-on-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/about-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/director-message-palace-on-ganges-heritage-hotel</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/profile-of-palace-on-ganges-heritage-hotel</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>
                https://palaceonganges.com/specialities-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://palaceonganges.com/gallery-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>
                https://palaceonganges.com/contact-us-palace-on-ganges-heritage-hotel-assi-ghat-varanasi</loc>
            <lastmod>2024-06-26T05:08:29+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        ${rooms.map(({ roomId, urlTag }) => `<url>
            <loc>${`${ROOMS_URL}/${urlTag || roomId}`}</loc>
        </url>`).join('')}
    </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/room");
    const data = await request.json();

    // We generate the XML sitemap with the rooms data
    const sitemap = generateSiteMap(data.rooms);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;