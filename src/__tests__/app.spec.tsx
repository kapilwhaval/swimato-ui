import { render, waitFor } from '@testing-library/react'
import App from '../App';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import * as customHooks from '../helpers/useWindowDimentions';

const mockNavigator = {
    geolocation: {
        getCurrentPosition: vi.fn(),
    }
};

beforeEach(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (window as any).navigator = mockNavigator;
});

describe('App', () => {
    it('should render the App component', () => {
        const component = render(<App />)
        waitFor(() => expect(component).toBeDefined())
    });
    it('should render the App component in mobole', () => {
        vi.spyOn(customHooks, 'useWindowWidth').mockImplementation(() => ({ isMobile: true }));
        const component = render(<App />)
        waitFor(() => expect(component).toBeDefined())
    });
})