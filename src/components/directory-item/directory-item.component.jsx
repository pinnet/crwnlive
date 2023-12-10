
/**
 * Renders a category item component.
 *
 * @component
 * @param {Object} category - The category object.
 * @param {string} category.title - The title of the category.
 * @param {string} category.imageUrl - The URL of the category image.
 * @returns {JSX.Element} The rendered category item component.
 */
import './directory-item.styles.scss';


/**
 * Renders a category item component.
 *
 * @param {Object} category - The category object containing title and imageUrl.
 * @returns {JSX.Element} The rendered category item component.
 */
const DirectoryItem = ({ category: { title, imageUrl } }) => (
    <div className="directory-item-container">
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="directory-item-body">
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>
);

export default DirectoryItem;