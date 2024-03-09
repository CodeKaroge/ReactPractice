// import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const CKEditorComponent = () => {
//     const [editorData, setEditorData] = useState('');

//     const handleEditorChange = (event, editor) => {
//         const data = editor.getData();
//         setEditorData(data);
//     };

//     const handleFileUpload = (file) => {
//         return new Promise((resolve, reject) => {
//             // Implement your file upload logic here, e.g., using FormData and axios
//             const formData = new FormData();
//             formData.append('file', file);

//             // Example: upload image to your backend and get the URL
//             // axios.post('http://your-backend-url/upload', formData)
//             //   .then(response => resolve(response.data.imageUrl))
//             //   .catch(error => reject(error));
//         });
//     };

//     return (
//         <CKEditor
//             editor={ClassicEditor}
//             data={editorData}
//             onChange={handleEditorChange}
//             config={{
//                 ckfinder: {
//                     uploadUrl: 'http://your-backend-url/upload', // URL for image upload
//                 },
//             }}
//             onReady={(editor) => {
//                 editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
//                     return {
//                         upload: async () => {
//                             const file = await loader.file;
//                             return handleFileUpload(file);
//                         },
//                     };
//                 };
//             }}
//         />
//     );
// };

// export default CKEditorComponent;











import React, { useEffect, useState } from 'react';
import '../Tables/Table.css'

const Table = () => {
    const [originalData, setOriginalData] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/2/1.jpg",
                "https://cdn.dummyjson.com/product-images/2/2.jpg",
                "https://cdn.dummyjson.com/product-images/2/3.jpg",
                "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/3/1.jpg"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/4/1.jpg",
                "https://cdn.dummyjson.com/product-images/4/2.jpg",
                "https://cdn.dummyjson.com/product-images/4/3.jpg",
                "https://cdn.dummyjson.com/product-images/4/4.jpg",
                "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/5/1.jpg",
                "https://cdn.dummyjson.com/product-images/5/2.jpg",
                "https://cdn.dummyjson.com/product-images/5/3.jpg"
            ]
        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
            "images": [
                "https://cdn.dummyjson.com/product-images/6/1.png",
                "https://cdn.dummyjson.com/product-images/6/2.jpg",
                "https://cdn.dummyjson.com/product-images/6/3.png",
                "https://cdn.dummyjson.com/product-images/6/4.jpg"
            ]
        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/7/1.jpg",
                "https://cdn.dummyjson.com/product-images/7/2.jpg",
                "https://cdn.dummyjson.com/product-images/7/3.jpg",
                "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/8/1.jpg",
                "https://cdn.dummyjson.com/product-images/8/2.jpg",
                "https://cdn.dummyjson.com/product-images/8/3.jpg",
                "https://cdn.dummyjson.com/product-images/8/4.jpg",
                "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
            ]
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/9/1.jpg",
                "https://cdn.dummyjson.com/product-images/9/2.png",
                "https://cdn.dummyjson.com/product-images/9/3.png",
                "https://cdn.dummyjson.com/product-images/9/4.jpg",
                "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
            ]
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
            "images": [
                "https://cdn.dummyjson.com/product-images/10/1.jpg",
                "https://cdn.dummyjson.com/product-images/10/2.jpg",
                "https://cdn.dummyjson.com/product-images/10/3.jpg",
                "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
            ]
        },
        {
            "id": 11,
            "title": "perfume Oil",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "price": 13,
            "discountPercentage": 8.4,
            "rating": 4.26,
            "stock": 65,
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/11/1.jpg",
                "https://cdn.dummyjson.com/product-images/11/2.jpg",
                "https://cdn.dummyjson.com/product-images/11/3.jpg",
                "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
            ]
        },
        {
            "id": 12,
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/12/1.jpg",
                "https://cdn.dummyjson.com/product-images/12/2.jpg",
                "https://cdn.dummyjson.com/product-images/12/3.png",
                "https://cdn.dummyjson.com/product-images/12/4.jpg",
                "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
            ]
        },
        {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "price": 13,
            "discountPercentage": 8.14,
            "rating": 4.59,
            "stock": 61,
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
            "images": [
                "https://cdn.dummyjson.com/product-images/13/1.jpg",
                "https://cdn.dummyjson.com/product-images/13/2.png",
                "https://cdn.dummyjson.com/product-images/13/3.jpg",
                "https://cdn.dummyjson.com/product-images/13/4.jpg",
                "https://cdn.dummyjson.com/product-images/13/thumbnail.webp"
            ]
        },
        {
            "id": 14,
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "discountPercentage": 15.6,
            "rating": 4.21,
            "stock": 114,
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/14/1.jpg",
                "https://cdn.dummyjson.com/product-images/14/2.jpg",
                "https://cdn.dummyjson.com/product-images/14/3.jpg",
                "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg"
            ]
        },
        {
            "id": 15,
            "title": "Eau De Perfume Spray",
            "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "price": 30,
            "discountPercentage": 10.99,
            "rating": 4.7,
            "stock": 105,
            "brand": "Lord - Al-Rehab",
            "category": "fragrances",
            "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/15/1.jpg",
                "https://cdn.dummyjson.com/product-images/15/2.jpg",
                "https://cdn.dummyjson.com/product-images/15/3.jpg",
                "https://cdn.dummyjson.com/product-images/15/4.jpg",
                "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg"
            ]
        },
        {
            "id": 16,
            "title": "Hyaluronic Acid Serum",
            "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            "price": 19,
            "discountPercentage": 13.31,
            "rating": 4.83,
            "stock": 110,
            "brand": "L'Oreal Paris",
            "category": "skincare",
            "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/16/1.png",
                "https://cdn.dummyjson.com/product-images/16/2.webp",
                "https://cdn.dummyjson.com/product-images/16/3.jpg",
                "https://cdn.dummyjson.com/product-images/16/4.jpg",
                "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
            ]
        },
        {
            "id": 17,
            "title": "Tree Oil 30ml",
            "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
            "price": 12,
            "discountPercentage": 4.09,
            "rating": 4.52,
            "stock": 78,
            "brand": "Hemani Tea",
            "category": "skincare",
            "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/17/1.jpg",
                "https://cdn.dummyjson.com/product-images/17/2.jpg",
                "https://cdn.dummyjson.com/product-images/17/3.jpg",
                "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
            ]
        },
        {
            "id": 18,
            "title": "Oil Free Moisturizer 100ml",
            "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
            "price": 40,
            "discountPercentage": 13.1,
            "rating": 4.56,
            "stock": 88,
            "brand": "Dermive",
            "category": "skincare",
            "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/18/1.jpg",
                "https://cdn.dummyjson.com/product-images/18/2.jpg",
                "https://cdn.dummyjson.com/product-images/18/3.jpg",
                "https://cdn.dummyjson.com/product-images/18/4.jpg",
                "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
            ]
        },
        {
            "id": 19,
            "title": "Skin Beauty Serum.",
            "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
            "price": 46,
            "discountPercentage": 10.68,
            "rating": 4.42,
            "stock": 54,
            "brand": "ROREC White Rice",
            "category": "skincare",
            "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/19/1.jpg",
                "https://cdn.dummyjson.com/product-images/19/2.jpg",
                "https://cdn.dummyjson.com/product-images/19/3.png",
                "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
            ]
        },
        {
            "id": 20,
            "title": "Freckle Treatment Cream- 15gm",
            "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
            "price": 70,
            "discountPercentage": 16.99,
            "rating": 4.06,
            "stock": 140,
            "brand": "Fair & Clear",
            "category": "skincare",
            "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/20/1.jpg",
                "https://cdn.dummyjson.com/product-images/20/2.jpg",
                "https://cdn.dummyjson.com/product-images/20/3.jpg",
                "https://cdn.dummyjson.com/product-images/20/4.jpg",
                "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
            ]
        },
        {
            "id": 21,
            "title": "- Daal Masoor 500 grams",
            "description": "Fine quality Branded Product Keep in a cool and dry place",
            "price": 20,
            "discountPercentage": 4.81,
            "rating": 4.44,
            "stock": 133,
            "brand": "Saaf & Khaas",
            "category": "groceries",
            "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
            "images": [
                "https://cdn.dummyjson.com/product-images/21/1.png",
                "https://cdn.dummyjson.com/product-images/21/2.jpg",
                "https://cdn.dummyjson.com/product-images/21/3.jpg"
            ]
        },
        {
            "id": 22,
            "title": "Elbow Macaroni - 400 gm",
            "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
            "price": 14,
            "discountPercentage": 15.58,
            "rating": 4.57,
            "stock": 146,
            "brand": "Bake Parlor Big",
            "category": "groceries",
            "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/22/1.jpg",
                "https://cdn.dummyjson.com/product-images/22/2.jpg",
                "https://cdn.dummyjson.com/product-images/22/3.jpg"
            ]
        },
        {
            "id": 23,
            "title": "Orange Essence Food Flavou",
            "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
            "price": 14,
            "discountPercentage": 8.04,
            "rating": 4.85,
            "stock": 26,
            "brand": "Baking Food Items",
            "category": "groceries",
            "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/23/1.jpg",
                "https://cdn.dummyjson.com/product-images/23/2.jpg",
                "https://cdn.dummyjson.com/product-images/23/3.jpg",
                "https://cdn.dummyjson.com/product-images/23/4.jpg",
                "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
            ]
        },
        {
            "id": 24,
            "title": "cereals muesli fruit nuts",
            "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
            "price": 46,
            "discountPercentage": 16.8,
            "rating": 4.94,
            "stock": 113,
            "brand": "fauji",
            "category": "groceries",
            "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/24/1.jpg",
                "https://cdn.dummyjson.com/product-images/24/2.jpg",
                "https://cdn.dummyjson.com/product-images/24/3.jpg",
                "https://cdn.dummyjson.com/product-images/24/4.jpg",
                "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
            ]
        },
        {
            "id": 25,
            "title": "Gulab Powder 50 Gram",
            "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
            "price": 70,
            "discountPercentage": 13.58,
            "rating": 4.87,
            "stock": 47,
            "brand": "Dry Rose",
            "category": "groceries",
            "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/25/1.png",
                "https://cdn.dummyjson.com/product-images/25/2.jpg",
                "https://cdn.dummyjson.com/product-images/25/3.png",
                "https://cdn.dummyjson.com/product-images/25/4.jpg",
                "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
            ]
        },
        {
            "id": 26,
            "title": "Plant Hanger For Home",
            "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
            "price": 41,
            "discountPercentage": 17.86,
            "rating": 4.08,
            "stock": 131,
            "brand": "Boho Decor",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/26/1.jpg",
                "https://cdn.dummyjson.com/product-images/26/2.jpg",
                "https://cdn.dummyjson.com/product-images/26/3.jpg",
                "https://cdn.dummyjson.com/product-images/26/4.jpg",
                "https://cdn.dummyjson.com/product-images/26/5.jpg",
                "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
            ]
        },
        {
            "id": 27,
            "title": "Flying Wooden Bird",
            "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
            "price": 51,
            "discountPercentage": 15.58,
            "rating": 4.41,
            "stock": 17,
            "brand": "Flying Wooden",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
            "images": [
                "https://cdn.dummyjson.com/product-images/27/1.jpg",
                "https://cdn.dummyjson.com/product-images/27/2.jpg",
                "https://cdn.dummyjson.com/product-images/27/3.jpg",
                "https://cdn.dummyjson.com/product-images/27/4.jpg",
                "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
            ]
        },
        {
            "id": 28,
            "title": "3D Embellishment Art Lamp",
            "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
            "price": 20,
            "discountPercentage": 16.49,
            "rating": 4.82,
            "stock": 54,
            "brand": "LED Lights",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/28/1.jpg",
                "https://cdn.dummyjson.com/product-images/28/2.jpg",
                "https://cdn.dummyjson.com/product-images/28/3.png",
                "https://cdn.dummyjson.com/product-images/28/4.jpg",
                "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
            ]
        },
        {
            "id": 29,
            "title": "Handcraft Chinese style",
            "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
            "price": 60,
            "discountPercentage": 15.34,
            "rating": 4.44,
            "stock": 7,
            "brand": "luxury palace",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
            "images": [
                "https://cdn.dummyjson.com/product-images/29/1.jpg",
                "https://cdn.dummyjson.com/product-images/29/2.jpg",
                "https://cdn.dummyjson.com/product-images/29/3.webp",
                "https://cdn.dummyjson.com/product-images/29/4.webp",
                "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
            ]
        },
        {
            "id": 30,
            "title": "Key Holder",
            "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
            "price": 30,
            "discountPercentage": 2.92,
            "rating": 4.92,
            "stock": 54,
            "brand": "Golden",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/30/1.jpg",
                "https://cdn.dummyjson.com/product-images/30/2.jpg",
                "https://cdn.dummyjson.com/product-images/30/3.jpg",
                "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
            ]
        }
    ])
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const [filterBrand, setFilterBrand] = useState('')
    const [filtertitle, setFilterTitle] = useState('')
    const [titleOption, setTitleOption] = useState([])
    const [brandOption, setBrandOption] = useState([])
    const [itemPerPage, setItemPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(itemPerPage)
    const [selectMultiple, setSelectMultiple] = useState([])
    const header =
        [
            { title: '', sort: false },
            { title: 'Id', sort: false },
            { title: 'title', sort: true },
            { title: 'description', sort: true },
            { title: 'discountPercentage', sort: false },
            { title: 'rating', sort: false },
            { title: 'brand', sort: true },
            { title: 'category', sort: true },
            { title: 'thumbnail', sort: false },
            { title: 'Action', sort: false }
        ]

    const handlePageChange = (page) => {
        setCurrentPage(page)
        let start = (page - 1) * itemPerPage
        setStart(start)
        setEnd(Math.min(start + itemPerPage, originalData.length))
    }
    const handleSearch = (e) => {
        setData(
            originalData.filter(obj =>
                obj.title.toLowerCase().includes((e.target.value).toLowerCase()) ||
                obj.description.toLowerCase().includes((e.target.value).toLowerCase()) ||
                obj.brand.toLowerCase().includes((e.target.value).toLowerCase()) ||
                obj.category.toLowerCase().includes((e.target.value).toLowerCase())
            )
        )
        setSearch(e.target.value)
    }
    const handleSort = (sortOnBasis) => {
        const sortData = [...data].sort((a, b) => {
            let A = a[sortOnBasis].toLowerCase();
            let B = b[sortOnBasis].toLowerCase();
            if (A < B) {
                return -1
            }
            if (A > B) {
                return 1
            }
            return 0
        })
        setData(sortData)
    }
    const handleDelete = (id) => {
        setData(data.filter(obj => (
            obj.id !== id
        )))
    }
    const handleEdit = (id) => {
        console.log(data.find(obj => obj.id === id))
    }
    const handleSelect = (e, item) => {
        debugger
        if (e.target.checked === true) {
            let temp1 = data
            let swapedIndex = temp1.findIndex(obj => obj.id === item.id)
            console.log(swapedIndex, "SwapedIndex");

            // const temp = [...selectMultiple, item]
            // setSelectMultiple(temp)
        } else {
            setSelectMultiple(selectMultiple.filter(obj => obj.id !== item.id))
        }
    }

    const handleDeleteSelected = () => {
        setData(data.filter(item1 => !(selectMultiple.some(item2 => item2.id === item1.id))
        ))
        setSelectMultiple([])
    }
    useEffect(() => {
        setData(originalData.slice(start, end))
    }, [currentPage])
    useEffect(() => {
        setData(originalData.slice(start, end))
        setStart((currentPage - 1) * itemPerPage)
        setEnd(Math.min(start + itemPerPage, originalData.length))
        setTotalPage(Math.ceil(originalData.length / itemPerPage))
        setBrandOption([...new Set(originalData.map(obj => obj.brand))])
        setTitleOption([...new Set(originalData.map(obj => obj.title))])
    }, [])
    useEffect(() => {
        setData(
            originalData.filter(item => (
                (!filterBrand || item.brand === filterBrand) &&
                (!filtertitle || item.title === filtertitle)
            )).slice(start, end)
        )
    }, [filterBrand, filtertitle])
    return (
        <div>
            <label>Search Here</label>
            <input type="text" value={search} onChange={handleSearch} />
            <label>Brand</label>
            <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)} >
                {brandOption.map((item, index) => (
                    index === 0 ?
                        <option key={index} value={''}>Select Brand</option> :
                        <option key={index} value={item}>{item}</option>
                ))}
            </select>
            <label>Title</label>
            <select value={filtertitle} onChange={(e) => setFilterTitle(e.target.value)} >
                {titleOption.map((item, index) => (
                    index === 0 ?
                        <option key={index} value={''}>Select title</option> :
                        <option key={index} value={item}>{item}</option>
                ))}
            </select>
            <button onClick={() => [setData(originalData.slice(start, end)), setFilterBrand(''), setFilterTitle('')]} >Reset Filter</button>
            {selectMultiple.length > 0 && <button onClick={handleDeleteSelected} >Delete Selected</button>}
            <div>
                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
                <span>Page {currentPage} of {totalPage}</span>
                <button disabled={currentPage === totalPage} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item.title}{item.sort && <span style={{ cursor: 'pointer' }}
                                onClick={() => handleSort(item.title)}
                            > ↕ ↕  </span>} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id} >
                            <td><input type="checkbox" onChange={(e) => handleSelect(e, item)} /></td>
                            <td>{item.id}  </td>
                            <td>{item.title} </td>
                            <td>{item.description}</td>
                            <td>{item.discountPercentage}</td>
                            <td>{item.rating}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td> <img src={item.thumbnail} alt="logo" srcSet="" style={{ width: '50px' }} />  </td>
                            {selectMultiple.length === 0 && <td>
                                <button onClick={() => handleEdit(item.id)} >Edit</button>
                                <button onClick={() => handleDelete(item.id)} >delete</button>
                            </td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table