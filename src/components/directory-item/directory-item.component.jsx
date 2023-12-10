
/**
 * Renders a category item component.
 *
 * @component
 * @param {Object} category - The category object.
 * @param {string} category.title - The title of the category.
 * @param {string} category.imageUrl - The URL of the category image.
 * @returns {JSX.Element} The rendered category item component.
 */
import { BackgroundImage, Body, DirectoryItemContainer, } from './directory-item.styles';

/**
 * Renders a category item component.
 *
 * @param {Object} category - The category object containing title and imageUrl.
 * @returns {JSX.Element} The rendered category item component.
 */
const DirectoryItem = ({ category: { title, imageUrl } }) => (
    <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>Shop now</p>
        </Body>
    </DirectoryItemContainer>
);

export default DirectoryItem;