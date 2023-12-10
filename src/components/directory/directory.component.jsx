/*
 * directory.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss'

/**
 * Renders a directory component.
 * @param {Object[]} categories - An array of directory objects.
 * @returns {JSX.Element} The rendered directory component.
 */
const Directory = ({ categories }) => (
    <div className="directory-container">
        {
            categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))
        }
    </div>
)

export default Directory;