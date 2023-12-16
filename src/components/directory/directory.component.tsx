/**
 * @file directory.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles'
import directory from '../../data/directory-data';

const Directory = (): JSX.Element => {
    return (
        <DirectoryContainer>
            { 
                directory.map((category) => (
                    <DirectoryItem key ={ category.id } category={category} />
                ))
            }
        </DirectoryContainer>
)}

export default Directory;