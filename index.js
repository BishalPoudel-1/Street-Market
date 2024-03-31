
function filterSelection(category) {
    // Remove 'active' class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => button.classList.remove('active'));

    // Retrieve search input value
    var searchInput = document.getElementById('input').value.toLowerCase();

    // Hide or show products based on category and search input
    document.querySelectorAll('.product').forEach(product => {
        var productName = product.querySelector('h5').innerText.toLowerCase();
        var displayProduct = (category === 'all' || product.classList.contains(category)) && productName.includes(searchInput);
        product.style.display = displayProduct ? '' : 'none';
    });

    // Add 'active' class to the clicked category button
    document.querySelector('.' + category).classList.add('active');
}

// Search functionality
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        filterSelection('all'); // Reset category filtering
    });
});



