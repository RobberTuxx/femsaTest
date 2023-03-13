import React from 'react';
import renderer from 'react-test-renderer';
import ImageProductBig from "../../components/atoms/imageProductBig";
it('render image product big', ()=> {
    const component = renderer.create(<ImageProductBig url={"https://loremflickr.com/640/480/business"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
