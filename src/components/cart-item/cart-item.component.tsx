/**
 * @file cart-item.component.tsx
 * @created Sun Dec 17 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { CartItemContainer, ItemDetails} from './cart-item.styles';
export type CartItemProps = {
    item: {
        imageUrl: string,
        price: number,
        name: string,
        quantity: number
    }

}
const CartItem = ({ item: { imageUrl, price, name, quantity } }: CartItemProps): JSX.Element => {
    return (
        <CartItemContainer>
            <img alt={name} className='img' src={imageUrl} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;