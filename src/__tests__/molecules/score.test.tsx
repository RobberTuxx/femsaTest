import React from 'react';
import renderer from 'react-test-renderer';
import Score from "../../components/molecules/Score";
it('render score', ()=> {
    const component = renderer.create(<Score points={10000}/>).toJSON()
    expect(component).toMatchSnapshot()
})
it('has 0 child', ()=> {
    const component = renderer.create(<Score points={10000}/>).toJSON()
    expect(component.children.length).toBe(2)
})
