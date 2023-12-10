/*
 * directory.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles'
import directory from '../../data/directory-data';

/**
 * Renders a directory component.
 * @param {Object[]} categories - An array of directory objects.
 * @returns {JSX.Element} The rendered directory component.
 */
const Directory = () => {
    return (
        <DirectoryContainer>
            { 
                directory.map((category) => (
                    <DirectoryItem category={category} />
                ))
            }
        </DirectoryContainer>
)}

export default Directory;