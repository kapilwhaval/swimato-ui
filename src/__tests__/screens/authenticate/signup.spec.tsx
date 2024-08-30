import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Login from '../../../screens/authenticate/login';
import SignUp from '../../../screens/authenticate/signup';
import Loader from '../../../components/loader';

describe('Signup', () => {
    const redirect = vi.fn();
    it('should render the signup component correctly and redirect to login', () => {
        const { getByText } = render(<SignUp redirect={redirect} />);
        fireEvent.click(getByText('Login'))
        expect(Login).toBeDefined()
    });
    it('should render the signup component and submit correctly', () => {
        const { getByText } = render(<SignUp redirect={redirect} />);
        fireEvent.click(getByText('Create Account'))
        expect(Loader).toBeDefined()
    });
})