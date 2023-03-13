import React from 'react';
import renderer from 'react-test-renderer';
import TitleWelcome from "../../components/molecules/titleWelcome";
it('render score', ()=> {
    const component = renderer.create(<TitleWelcome/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<TitleWelcome/>).toJSON()
    expect(component.children.length).toBe(2)
})
