
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
import { useNavigate } from 'react-router-dom';
/**
 * Renders a category item component.
 *
 * @param {Object} category - The category object containing title and imageUrl.
 * @returns {JSX.Element} The rendered category item component.
 */

export type DirectoryItemProps = {
    category: {
        title: string,
        imageUrl: string
    }

};

const DirectoryItem = ({ category: { title, imageUrl } }: DirectoryItemProps) => {
    const navigate = useNavigate();

    const handleClick = () => { navigate(`/shop/${title}`) };

    return(
    <DirectoryItemContainer onClick={handleClick}>
        <BackgroundImage $imageUrl={imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>Shop now</p>
        </Body>
    </DirectoryItemContainer>
)};

export default DirectoryItem;