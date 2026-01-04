const postsData = [ /* your JSON here */ ];

const postsContainer = document.querySelector('.posts');

postsData.forEach(post => {
  // Create post element
  const postEl = document.createElement('article');
  postEl.classList.add('post');

  // Post title
  const titleEl = document.createElement('h2');
  titleEl.className = 'post-title';
  titleEl.textContent = post.title;

  // Post description
  const descEl = document.createElement('p');
  descEl.className = 'post-desc';
  descEl.textContent = post.description;

  // Cards container
  const cardsEl = document.createElement('div');
  cardsEl.className = 'cards';

  // Loop cards
  if (post.cards) {
    post.cards.forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'card';

      const cardTitle = document.createElement('h3');
      cardTitle.textContent = card.title;

      const cardText = document.createElement('p');
      cardText.textContent = card.text;

      cardEl.appendChild(cardTitle);
      cardEl.appendChild(cardText);
      cardsEl.appendChild(cardEl);
    });
  }

  // Append everything
  postEl.appendChild(titleEl);
  postEl.appendChild(descEl);
  postEl.appendChild(cardsEl);
  postsContainer.appendChild(postEl);
});
