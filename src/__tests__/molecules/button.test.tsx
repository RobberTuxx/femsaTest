import React from 'react';
import renderer from 'react-test-renderer';
import Button from "../../components/molecules/button";
it('render button', ()=> {
    const component = renderer.create(<Button text={'hello world!'} big onPress={()=>{}}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<Button text={'hello world!'} big onPress={()=>{}}/>).toJSON()
    expect(component.children.length).toBe(1)
})
