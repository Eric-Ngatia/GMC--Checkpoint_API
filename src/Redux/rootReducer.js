

const initialState = {
    articles : [
        {
            id:1,
            title:'article 1',
            price:'15.000',
            category:'...',
            description:'description 1',
            image:'...'
        },
        {
            id:30,
            title:'article 2',
            price:'20.000',
            category:'...',
            description:'description 2',
            image:'...'
        }
    ], 

    article : {
        id:30,
        title:'article 2',
        price:'20.000',
        category:'...',
        description:'description 2',
        image:'...'
    }

};


function rootReducer(state=initialState, action) {
    switch (action.type) {

        case 'fetch-all-product': {
            return {
                articles : action.payload
            }
        }
        
        case 'get-single-product': {
            return {
                article : action.payload
            }
        }
        default: return state;
    }
};

export default rootReducer;