document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.js-mobile-menu-toggle');
  const mobileMenuClose = document.querySelectorAll('.js-mobile-menu-close');
  const mobileMenu = document.getElementById('MobileMenu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      mobileMenu.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  }

  if (mobileMenuClose.length > 0 && mobileMenu) {
    mobileMenuClose.forEach(btn => {
      btn.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Basic Quantity Input in Cart (Optional enhancement)
  const quantityInputs = document.querySelectorAll('.cart__item-quantity input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', function() {
      // Trigger cart update (would usually submit form or use fetch API)
      // For this simple theme, we rely on the "Update Cart" button or standard form submission
    });
  });
});
