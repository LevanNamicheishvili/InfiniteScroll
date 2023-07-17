let currentPage = 1;
const contentContainer = document.getElementById('content-container');
const loadingSection = document.getElementById('loading-section');

function fetchAndAppendContent() {
  loadingSection.style.display = 'block';

  setTimeout(() => {
    const newContent = generateNewContent();

    contentContainer.innerHTML += newContent;

    currentPage++;

    loadingSection.style.display = 'none';
  }, 1000);
}

function isAtBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

window.addEventListener('scroll', () => {
  if (isAtBottom()) {
    fetchAndAppendContent();
  }
});

function generateNewContent() {
  const newContent = `
    <div class="content-item">
      <h2>Content Item ${currentPage + 2}</h2>
      <p>This is content item number ${currentPage + 2}.</p>
    </div>
  `;

  return newContent;
}
