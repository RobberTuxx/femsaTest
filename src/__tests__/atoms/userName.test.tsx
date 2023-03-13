import React from 'react';
import renderer from 'react-test-renderer';
import UserName from "../../components/atoms/userName";
it('render user name', ()=> {
    const component = renderer.create(<UserName text={"Hello world!"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<UserName text={"Hello world!"}/>).toJSON()
    expect(component.children.length).toBe(1)
})
