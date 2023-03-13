import React from 'react';
import renderer from 'react-test-renderer';
import ImageProduct from "../../components/atoms/imageProduct";
it('render image product', ()=> {
    const component = renderer.create(<ImageProduct url={"https://loremflickr.com/640/480/business"}/>).toJSON()
    expect(component).toMatchSnapshot()
})
