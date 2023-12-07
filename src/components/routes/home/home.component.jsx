
import Directory from '../../directory/directory.component';

const Home = () => {

    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
            "linkUrl": "hats"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
            "linkUrl": "jakets"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
            "linkUrl": "sneakers"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
            "linkUrl": "womens"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
            "linkUrl": "mens"
        }
    ]

    return (
        <Directory categories={categories} />
    )

}
export default Home;