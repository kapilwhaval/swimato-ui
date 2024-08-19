import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Category } from '../../components/menu';
import { Menu } from '../../constants/types';

describe('Menu', () => {

    const menu: Menu = {
        count: 2,
        category: {
            title: 'SomeCategory'
        },
        items: [
            {
                image: "",
                description: "",
                is_egg_only: false,
                is_veg: true,
                price: 123,
                title: "Menu Item",
            }
        ]
    }

    it('should render the Category component correctly', () => {
        render(<Category menu={menu} />)
    });
})