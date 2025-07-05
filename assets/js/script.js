document.querySelector('.search-box button')?.addEventListener('click', function () {
  const keyword = document.querySelector('.search-box input').value.toLowerCase();
  if (keyword) {
    alert('Fitur pencarian untuk "' + keyword + '" belum tersedia.');
  }
});
