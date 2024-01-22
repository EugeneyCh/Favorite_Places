const GOOGLE_API_KEY = "AIzaSyBMJ8YvgKq4sb2_SPRDlLc3vCSxMPwMzKU";
// const GOOGLE_API_KEY = "AIzaSyCfq2tvpCu0NkuA6Xai7tK5NkkkvwNDPr4";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

//&signature=YOUR_SIGNATURE

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}&enable_address_descriptor=true`;
  const response = await fetch(url);
  console.log(url);
  if (!response.ok) {
    console.log("Response from fetch", response);
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  console.log("Address is ", address);
  return address;
}
