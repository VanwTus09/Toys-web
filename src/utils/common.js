
export const convertBase64toURL = (base64Buffer) => {
    const url = base64Buffer ? `data:image/webp;base64,${base64Buffer}` : "default-image.jpg";
    return url;
};  