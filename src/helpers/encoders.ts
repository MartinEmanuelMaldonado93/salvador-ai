import FileSaver from 'file-saver';

async function urlToBlob(url: string) {
	const response = await fetch(url);
	return await response.blob();
}
export function base64ToBlob(base64Data: string, contentType: string) {
	const byteCharacters = atob(base64Data);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += 512) {
		const slice = byteCharacters.slice(offset, offset + 512);

		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	return new Blob(byteArrays, { type: contentType });
}

/** this is going inside of download client btn */
export async function downloadImage(_id: string, photo: string) {
	FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
export function safeEncodeTo64(str: string) {
	return Buffer.from(String(str)).toString("base64");
}
/** replace of `atob(str)` deprecated */
export function safeDeEncodeFrom64(str64: string) {
	return Buffer.from(str64, "base64").toString("utf-8");
}
// Ussually data image from input is in b64 
// const base64Data = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA...'; // Replace with your Base64 data
// const contentType = 'image/jpeg'; // Replace with the appropriate content type
// const blob = base64ToBlob(base64Data, contentType);
// console.log(blob);

// Example usage
// const imageUrl = 'https://example.com/image.jpg';
// urlToBlob(imageUrl)
//   .then(blob => {
//     // Use the blob as needed
//     console.log(blob);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
