import { formatDistance } from 'date-fns';

function formatDate(date) {
  return formatDistance(new Date(), new Date(date), {
    addSuffix: true,
  });
}

export function renderMarkup(data, container) {
  const markup = data
    .map(
      ({ urlToImage, description, url, publishedAt, title }) => `
    <div class="col-xs-12 col-sm-6 col-lg-4">
    <div class="card">
      <a class="img-card" href="#">
        <img
          src="${urlToImage ?? 'https://via.placeholder.com/300x200'}"
        />
      </a>
      <div class="card-content text-truncate" style="max-width: 350px;"">
        <h4 class="card-title >
          <a href="${url}">${title}</a>
        </h4>
        ${description ? `<p class="card-text">${description}</p>` : ''}
        <p class="fw-lighter fst-italic">
          published ${formatDate(publishedAt)}
        </p>
      </div>
      <div class="card-read-more">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  </div>
  `,
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
}
