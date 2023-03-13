import React from 'react';
import renderer from 'react-test-renderer';
import DateProduct from "../../components/atoms/dateProduct";
it('render date product', ()=> {
    const component = renderer.create(<DateProduct text={"2023-03-11T12:17:47.118Z"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<DateProduct text={"2023-03-11T12:17:47.118Z"}/>).toJSON()
    expect(component.children.length).toBe(1)
})
