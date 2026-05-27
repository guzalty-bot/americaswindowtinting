const items = document.querySelectorAll('.gallery-item');
const overlay = document.getElementById('full-overlay');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.getElementById('overlay-img').src = item.dataset.img;
        document.getElementById('overlay-title').innerText = item.dataset.title;
        document.getElementById('overlay-desc').innerText = item.dataset.desc;
        overlay.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        overlay.classList.remove('active');
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Cambiar botón activo
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('wheel', (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});