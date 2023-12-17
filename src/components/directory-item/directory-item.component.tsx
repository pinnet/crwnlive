/**
 * @file directory-item.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { BackgroundImage, Body, DirectoryItemContainer, } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

export type DirectoryItemProps = {
    category: {
        title: string,
        imageUrl: string
    }

};

const DirectoryItem = ({ category: { title, imageUrl } }: DirectoryItemProps): JSX.Element => {
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