import React from 'react';
import renderer from 'react-test-renderer';
import NameProduct from "../../components/atoms/nameProduct";
it('render name product', ()=> {
    const component = renderer.create(<NameProduct text={"Hello world!"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<NameProduct text={"Hello world!"}/>).toJSON()
    expect(component.children.length).toBe(1)
})
