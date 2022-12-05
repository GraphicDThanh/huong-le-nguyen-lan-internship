const listNotesSearch = () => {
  const template = document.createElement('div');
  template.setAttribute('class', 'search-wrapper');

  template.innerHTML = `
    <p class="not-found-message hide">No matching results.</p>
    <div class="list-notes">
    </div>
  `;

  return template;
};

export default listNotesSearch;
