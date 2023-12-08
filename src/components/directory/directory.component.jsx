import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

/**
 * Renders a directory component.
 * @param {Object[]} categories - An array of category objects.
 * @returns {JSX.Element} The rendered directory component.
 */
const Directory = ({ categories }) => (
    <div className="directory-container">
        {
            categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))
        }
    </div>
)

export default Directory;