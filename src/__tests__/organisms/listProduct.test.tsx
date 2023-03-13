import React from 'react';
import renderer from 'react-test-renderer';
import ListProduct from "../../components/organisms/listProduct";
const mockedDispatch = jest.fn();
jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: mockedDispatch,
        }),
    };
});
describe('test nav', ()=> {
    beforeEach(() => {
        // Alternatively, set "clearMocks" in your Jest config to "true"
        mockedDispatch.mockClear();
    });
    it('render list product', () => {
        const component = renderer.create(<ListProduct products={products}/>).toJSON()
        expect(component).toMatchSnapshot()
    })
    it('has 0 child', () => {
        const component = renderer.create(<ListProduct products={products}/>).toJSON()
        expect(component.children.length).toBe(1)
    })

})

const products =[
    {
        "createdAt":"2022-12-09T06:34:25.607Z",
        "product":"Handmade Metal Shoes",
        "points":16434,
        "image":"https://loremflickr.com/640/480/transport",
        "is_redemption":false,
        "id":"1"
    },
    {
        "createdAt":"2022-12-09T17:02:51.904Z",
        "product":"Recycled Plastic Tuna",
        "points":92984,
        "image":"https://loremflickr.com/640/480/technics",
        "is_redemption":false,
        "id":"2"
    },
    {
        "createdAt":"2022-12-09T10:20:00.909Z",
        "product":"Fantastic Granite Bacon",
        "points":42416,
        "image":"https://loremflickr.com/640/480/technics",
        "is_redemption":false,
        "id":"3"
    },
    {
        "createdAt":"2022-12-09T00:30:23.966Z",
        "product":"Fantastic Fresh Gloves",
        "points":23913,
        "image":"https://loremflickr.com/640/480/city",
        "is_redemption":true,
        "id":"4"
    },
    {
        "createdAt":"2022-12-08T18:54:56.243Z",
        "product":"Rustic Rubber Bacon",
        "points":69814,
        "image":"https://loremflickr.com/640/480/people",
        "is_redemption":true,
        "id":"5"
    },
    {
        "createdAt":"2022-12-09T14:12:11.097Z",
        "product":"Tasty Concrete Cheese",
        "points":81585,
        "image":"https://loremflickr.com/640/480/business",
        "is_redemption":false,
        "id":"6"
    },
    {
        "createdAt":"2022-12-09T12:50:53.209Z",
        "product":"Oriental Cotton Keyboard",
        "points":88323,
        "image":"https://loremflickr.com/640/480/nightlife",
        "is_redemption":false,
        "id":"7"
    },
    {
        "createdAt":"2022-12-08T20:32:14.169Z",
        "product":"Oriental Soft Pants",
        "points":87794,
        "image":"https://loremflickr.com/640/480/animals",
        "is_redemption":true,
        "id":"8"
    },
    {
        "createdAt":"2022-12-09T05:46:47.645Z",
        "product":"Luxurious Rubber Bacon",
        "points":13063,
        "image":"https://loremflickr.com/640/480/food",
        "is_redemption":true,
        "id":"9"
    },
    {
        "createdAt":"2022-12-09T10:56:34.206Z",
        "product":"Elegant Rubber Fish",
        "points":91311,
        "image":"https://loremflickr.com/640/480/transport",
        "is_redemption":false,
        "id":"10"
    },
    {
        "createdAt":"2022-12-09T12:36:43.169Z",
        "product":"Recycled Wooden Salad",
        "points":44871,
        "image":"https://loremflickr.com/640/480/city",
        "is_redemption":false,
        "id":"11"
    },
    {
        "createdAt":"2023-02-04T07:48:16.249Z",
        "product":"Licensed Metal Salad",
        "points":93367,
        "image":"https://loremflickr.com/640/480/food",
        "is_redemption":false,
        "id":"12",
        "from_account_id":781,
        "to_account_id":369,
        "amount":16,
        "verification_code":"8319",
        "reason":"test16"
    },
    {
        "createdAt":"2023-02-04T08:45:26.468Z",
        "product":"Ergonomic Plastic Bacon",
        "points":33432,
        "image":"https://loremflickr.com/640/480/food",
        "is_redemption":false,
        "id":"13",
        "from_account_id":781,
        "to_account_id":369,
        "amount":16,
        "verification_code":"8319",
        "reason":"test16"
    },
    {
        "createdAt":"2023-03-11T04:50:50.205Z",
        "product":"Ergonomic Granite Fish",
        "points":1314,
        "image":"https://loremflickr.com/640/480/city",
        "is_redemption":false,
        "id":"14",
        "query":"\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"
    },
    {
        "createdAt":"2023-03-11T04:35:35.259Z",
        "product":"Small Frozen Shirt",
        "points":55894,
        "image":"https://loremflickr.com/640/480/business",
        "is_redemption":true,
        "id":"15",
        "query":"\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"
    },
    {
        "createdAt":"2023-03-11T07:49:58.766Z",
        "product":"Electronic Bronze Salad",
        "points":21880,
        "image":"https://loremflickr.com/640/480/transport",
        "is_redemption":false,
        "id":"16",
        "query":"\n# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n# Default endpoint is an instance of https://www.graph.cool/\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n\nquery {\n  movements {\n    product\n  }\n}\n",
        "variables":null
    },
    {
        "createdAt":"2023-03-11T13:57:33.428Z",
        "product":"Refined Concrete Pizza",
        "points":51314,
        "image":"https://loremflickr.com/640/480/city",
        "is_redemption":true,
        "id":"17",
        "query":"\n# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n# Default endpoint is an instance of https://www.graph.cool/\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n\nquery {\n  products {\n    product\n  }\n}\n",
        "variables":null
    },
    {
        "createdAt":"2023-03-11T12:17:47.118Z",
        "product":"Elegant Concrete Chips",
        "points":57955,
        "image":"https://loremflickr.com/640/480/business",
        "is_redemption":false,
        "id":"18",
        "query":"\n# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n# Default endpoint is an instance of https://www.graph.cool/\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n\nquery {\n  products {\n    product\n  }\n}\n",
        "variables":null
    },
    {
        "createdAt":"2023-03-11T07:59:31.773Z",
        "product":"Licensed Concrete Shirt",
        "points":35936,
        "image":"https://loremflickr.com/640/480/fashion",
        "is_redemption":true,
        "id":"19",
        "query":"\n# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n# Default endpoint is an instance of https://www.graph.cool/\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n\nquery {\n  products {\n    \n  }\n}\n",
        "variables":null
    },
    {
        "createdAt":"2023-03-11T12:25:04.499Z",
        "product":"Oriental Bronze Gloves",
        "points":18576,
        "image":"https://loremflickr.com/640/480/technics",
        "is_redemption":false,
        "id":"20",
        "query":"\n    query IntrospectionQuery {\n      __schema {\n        \n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          description\n          \n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      description\n      \n      fields(includeDeprecated: true) {\n        name\n        description\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        description\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      description\n      type { ...TypeRef }\n      defaultValue\n      \n      \n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ",
        "variables":{

        },
        "operationName":"IntrospectionQuery"
    },
]
