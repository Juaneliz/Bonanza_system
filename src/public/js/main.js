document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('mobileCartBtn');
    const closeBtn = document.getElementById('closeMobileOrderBtn');
    const orderScreen = document.getElementById('mobileOrderScreen');

    if (cartBtn && closeBtn && orderScreen) {
        cartBtn.addEventListener('click', () => {
            orderScreen.classList.remove('d-none');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            orderScreen.classList.add('d-none');
            document.body.style.overflow = '';
        });
    }

    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (searchInput && clearSearchBtn) {
        searchInput.addEventListener('input', () => {
            clearSearchBtn.classList.toggle('d-none', searchInput.value.trim() === '');
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.classList.add('d-none');
            searchInput.focus();
            searchInput.closest('form').submit();
        });
    }
});
