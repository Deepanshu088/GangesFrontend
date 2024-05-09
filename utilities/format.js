import moment from "moment/moment";

export async function base64ToBlob(base64Data) {
    const response = await fetch(base64Data);
    const blob = await response.blob();
    return blob;
}

export async function base64ToFile(base64Data) {
    // Extract MIME type and decode it from Base64 URL
    const mimeMatch = base64Data.match(/^data:(.*);base64,/);
    if (!mimeMatch) {
        throw new Error('Invalid Base64 data URL');
    }
    const mimeString = mimeMatch[1];
    const blob = await (await fetch(base64Data)).blob();

    // Attempt to derive a file extension from the MIME type
    const extensionMap = {
        'image/jpeg': '.jpg',
        'image/png': '.png',
        'image/gif': '.gif',
        'image/webp': '.webp',
        'image/svg+xml': '.svg',
        // Add other MIME types and extensions as needed
    };
    const extension = extensionMap[mimeString] || '.bin'; // Default to .bin if unknown

    // Generate a filename using a timestamp for uniqueness
    const filename = `image-${Date.now()}${extension}`;

    const file = new File([blob], filename, { type: mimeString });
    return file;
}

export function dateFormatter(date, format = "MMMM D, YYYY") {
    const momentDate = moment(Number(new Date(date))).utc();
    return momentDate.format(format);
}