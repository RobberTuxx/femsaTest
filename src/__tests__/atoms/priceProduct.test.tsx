import React from 'react';
import renderer from 'react-test-renderer';
import PriceProduct from "../../components/atoms/priceProduct";
it('render price product', ()=> {
    const component = renderer.create(<PriceProduct text={"Hello world!"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<PriceProduct text={"Hello world!"}/>).toJSON()
    expect(component.children.length).toBe(2)
})
