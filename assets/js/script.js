document.querySelector('.search-box button')?.addEventListener('click', function () {
  const keyword = document.querySelector('.search-box input').value.toLowerCase();
  if (keyword) {
    alert('Fitur pencarian untuk "' + keyword + '" belum tersedia.');
  }
});

const bookButtons = document.querySelectorAll('.book-btn');
const formSection = document.getElementById('reservation-form');
const summarySection = document.getElementById('summary-section');
const nextBtn = document.getElementById('next-btn');
const saveBtn = document.getElementById('save-btn');
let selectedPackage = '';
let selectedPrice = 0;
bookButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    selectedPackage = card.dataset.package;
    selectedPrice = parseInt(card.dataset.price);
    formSection.classList.remove('hidden');
    formSection.scrollIntoView({ behavior: 'smooth' });
  });
});
nextBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const people = parseInt(document.getElementById('people').value);
  const date = document.getElementById('start-date').value;
  if (!name || !phone || !email || !people || !date) {
    alert('Harap lengkapi semua data.');
    return;
  }
  document.getElementById('sum-name').textContent = name;
  document.getElementById('sum-phone').textContent = phone;
  document.getElementById('sum-email').textContent = email;
  document.getElementById('sum-package').textContent = selectedPackage;
  document.getElementById('sum-people').textContent = people;
  document.getElementById('sum-dates').textContent = date;
  const total = selectedPrice * people;
  document.getElementById('total-price').textContent = `Rp ${total.toLocaleString('id-ID')}`;
  summarySection.classList.remove('hidden');
  summarySection.scrollIntoView({ behavior: 'smooth' });
});
saveBtn.addEventListener('click', () => {
  alert('Reservasi berhasil disimpan!');
  location.reload();
});