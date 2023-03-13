import React from 'react';
import renderer from 'react-test-renderer';
import ProductNameBig from "../../components/atoms/productNameBig";
it('render product name big', ()=> {
    const component = renderer.create(<ProductNameBig text={"Hello world!"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<ProductNameBig text={"Hello world!"}/>).toJSON()
    expect(component.children.length).toBe(1)
})
