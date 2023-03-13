import React from 'react';
import renderer from 'react-test-renderer';
import Product from "../../components/molecules/product";
const mockedDispatch = jest.fn();

// Mocks like this need to be configured at the top level
// of the test file, they can't be setup inside your tests.
jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: mockedDispatch,
        }),
    };
});

describe('test nav', ()=>{
    beforeEach(() => {
        // Alternatively, set "clearMocks" in your Jest config to "true"
        mockedDispatch.mockClear();
    });
    it('render Product', () => {
        const component = renderer.create(<Product product={{
            id: "1",
            points: 1000,
            product: 'product',
            is_redemption: true,
            createdAt: "2023-03-11T12:17:47.118Z",
            image: "https://loremflickr.com/640/480/business"
        }}/>).toJSON()
        expect(component).toMatchSnapshot()
    })
    it('has 0 child', () => {
        const component = renderer.create(<Product product={{
            id: "1",
            points: 1000,
            product: 'product',
            is_redemption: true,
            createdAt: "2023-03-11T12:17:47.118Z",
            image: "https://loremflickr.com/640/480/business"
        }}/>).toJSON()
        expect(component.children.length).toBe(5)
    })
})


