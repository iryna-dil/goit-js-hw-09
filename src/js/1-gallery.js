import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/19/18/26/field-4285217_960_720.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/19/18/26/field-4285217_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/11/23/11/33/landscape-4645024_960_720.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/11/23/11/33/landscape-4645024_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/12/14/18/40/sunrise-4695484_960_720.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/12/14/18/40/sunrise-4695484_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/running-4202820_960_720.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/running-4202820_1280.jpg',
    description: 'Shoes',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/11/08/23/11/river-4613258_960_720.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/11/08/23/11/river-4613258_1280.jpg',
    description: 'River',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/16/19/03/lavenders-4278874_960_720.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/16/19/03/lavenders-4278874_1280.jpg',
    description: 'Lavender',
  },
];

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
			<li class="gallery-item">
				<a class="gallery-link" href="${original}">
					<img class="gallery-image" src="${preview}" alt="${description}" />
				</a>
			</li>
		`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
