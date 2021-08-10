/**
 * Renders some text into a header with class "fancy".
 *
 * @param {string} [text=''] - The text to render.
 * @returns {HTMLHeadingElement} A header containing the text.
 */
const header = (text = '') => {
  const headerEl = document.createElement('h1');
  headerEl.innerText = text;
  headerEl.className = 'fancy';
  return headerEl;
};

fetch(`${window.location.origin}/api/hello`)
  .then((res) => res.text())
  .then((greeting) =>
    document.getElementById('root').appendChild(header(greeting))
  )
  .catch((err) => console.error(err));
