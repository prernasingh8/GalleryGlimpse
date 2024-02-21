document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('search');

    // Function to fetch and display images
    function displayImages(imgs) {
        gallery.innerHTML = '';
        imgs.forEach(img => {
            const imageElement = document.createElement('img');
            imageElement.src = img.url;
            imageElement.alt = img.alt;
            gallery.appendChild(imageElement);
        });
    }

    // image data 
    const images = [
        { url: 'asset\\img1.jpg', alt: 'purple mountains sky nature' },
        { url: 'asset\\img2.jpg', alt: 'ice mountains' },
        { url: 'asset\\img3.jpg', alt: 'sunset' },
        { url: 'asset\\img4.jpg', alt: 'Beach nature' },
        { url: 'asset\\img5.jpg', alt: 'camera nature' },
        { url: 'asset\\img6.jpg', alt: 'laptop aesthetic white' },
        { url: 'asset\\img7.jpg', alt: 'Buildings' },
        { url: 'asset\\img8.jpg', alt: 'Butterfly nature' },
        { url: 'asset\\img9.jpg', alt: 'girl nature' },
        { url: 'asset\\img10.jpg', alt: 'fire kettle' },
        { url: 'asset\\img11.jpg', alt: 'colourful design pattern' },
        { url: 'asset\\img12.jpg', alt: 'duck white nature' },
        { url: 'asset\\img13.jpg', alt: 'cat' },
        { url: 'asset\\img14.jpg', alt: 'peacock' },
        { url: 'asset\\img15.jpg', alt: 'urban bulidings foreign' },
        { url: 'asset\\img16.jpg', alt: 'healthy food salad' },
        { url: 'asset\\img17.jpg', alt: 'burger' },
        { url: 'asset\\img18.jpg', alt: 'healthy food' },
        { url: 'asset\\img19.jpg', alt: 'Pizza' },
        { url: 'asset\\img20.jpg', alt: 'colourful star' },

    ];

    displayImages(images);

    // Event listener for search input
    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredImages = images.filter(image =>
            image.alt.toLowerCase().includes(searchTerm)
        );
        displayImages(filteredImages);
    });
});
