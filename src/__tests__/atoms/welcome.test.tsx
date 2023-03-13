import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from "../../components/atoms/welcome";
it('render welcome', ()=> {
    const component = renderer.create(<Welcome text={"Hello world!"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<Welcome text={"Hello world!"}/>).toJSON()
    expect(component.children.length).toBe(1)
})
