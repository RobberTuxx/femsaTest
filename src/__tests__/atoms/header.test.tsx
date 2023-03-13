import React from 'react';
import renderer from 'react-test-renderer';
import Header from "../../components/atoms/header";
it('render header', ()=> {
    const component = renderer.create(<Header text={"Hello world!"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<Header text={"Hello world!"}/>).toJSON()
     expect(component.children.length).toBe(1)
})
