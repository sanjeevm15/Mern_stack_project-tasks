document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the product and review containers and arrows
    const productGrid = document.querySelector('.product-grid');
    const reviewsGrid = document.querySelector('.customer-reviews');
    
    // Assuming you named your product arrows as:
    const prodPrevArrow = document.querySelector('.product-slider-wrapper .prev-arrow');
    const prodNextArrow = document.querySelector('.product-slider-wrapper .next-arrow');

    // Assuming you named your review arrows as:
    const reviewPrevArrow = document.querySelector('.reviews-slider-wrapper .prev-arrow');
    const reviewNextArrow = document.querySelector('.reviews-slider-wrapper .next-arrow');

    // Define the distance to scroll (e.g., the width of one card)
    // We'll calculate a scroll distance based on one product item's width (approx. 270px)
    const scrollDistance = 270; 


    // --- Function to handle the actual scrolling ---
    function handleScroll(container, direction) {
        if (!container) return; // Exit if container not found
        
        // Calculate the new scroll position
        const newScrollPos = container.scrollLeft + (direction * scrollDistance);
        
        // Use smooth scrolling for a better user experience
        container.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
        });
    }

    // --- 2. Attach Event Listeners for Product Slider ---
    if (prodNextArrow) {
        prodNextArrow.addEventListener('click', () => {
            handleScroll(productGrid, 1); // Scroll right (positive direction)
        });
    }

    if (prodPrevArrow) {
        prodPrevArrow.addEventListener('click', () => {
            handleScroll(productGrid, -1); // Scroll left (negative direction)
        });
    }

    // --- 3. Attach Event Listeners for Review Slider ---
    if (reviewNextArrow) {
        reviewNextArrow.addEventListener('click', () => {
            handleScroll(reviewsGrid, 1); // Scroll right
        });
    }

    if (reviewPrevArrow) {
        reviewPrevArrow.addEventListener('click', () => {
            handleScroll(reviewsGrid, -1); // Scroll left
        });
    }
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});