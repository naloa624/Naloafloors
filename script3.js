document.addEventListener("DOMContentLoaded", function () {
    const config = {
        stripePublicKey: 'YOUR_STRIPE_PUBLIC_KEY',
        productSku: 'YOUR_PRODUCT_SKU',
        successUrl: 'success.html',
        cancelUrl: 'cancel.html'
    };

    const stripe = Stripe(config.stripePublicKey);

    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = button.getAttribute('data-product');
            const confirmation = confirm(`Do you want to purchase ${productName}?`);

            if (confirmation) {
                try {
                    // Simulate loading indicator
                    // ShowLoadingIndicator();

                    // Simulate a purchase
                    alert(`Thank you for purchasing ${productName}!`);

                    // Handle the payment process
                    handlePayment(productName);
                } catch (error) {
                    // Display error to the user
                    alert(`Error: ${error.message}`);
                } finally {
                    // HideLoadingIndicator();
                }
            } else {
                alert(`You have canceled the purchase of ${productName}.`);
            }
        });
    });

    function handlePayment(productName) {
        stripe.redirectToCheckout({
            items: [{
                sku: config.productSku,
                quantity: 1
            }],
            successUrl: config.successUrl,
            cancelUrl: config.cancelUrl
        }).then(function(result) {
            if (result.error) {
                throw new Error(result.error.message);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize each product gallery separately
    initializeProductGallery('.gallery1');
    initializeProductGallery('.gallery2');
    initializeProductGallery('.gallery3');
    initializeProductGallery('.gallery4');

    // Function to initialize a product gallery
    function initializeProductGallery(gallerySelector) {
        let currentProductIndex = 0;
        const productImages = document.querySelectorAll(`${gallerySelector} img`);
        const totalProducts = productImages.length;

        function showProduct(index) {
            productImages.forEach(function (image, i) {
                image.style.display = i === index ? 'block' : 'none';
            });
        }

        function changeProduct(direction) {
            currentProductIndex += direction;

            // Ensure the index stays within bounds
            currentProductIndex = (currentProductIndex + totalProducts) % totalProducts;

            showProduct(currentProductIndex);
        }

        // Show the initial product
        showProduct(currentProductIndex);

        // Attach event listeners to the navigation buttons
        const prevButton = document.querySelector(`${gallerySelector} .prev`);
        const nextButton = document.querySelector(`${gallerySelector} .next`);

        prevButton.addEventListener('click', function () {
            changeProduct(-1);
        });

        nextButton.addEventListener('click', function () {
            changeProduct(1);
        });
    }
});
