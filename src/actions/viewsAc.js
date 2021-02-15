
export const COUNT_VIEWS_DATA_SUCCESS = 'COUNT_VIEWS_DATA_SUCCESS'

export const viewsAxiosSuccess = (views) => {
    return {
        type: COUNT_VIEWS_DATA_SUCCESS, 
        views
    }
}

export const viewsAc = (apiUrl) => {
    return (dispatch) => {
        fetch(apiUrl)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => response.items[0].statistics)
            .then(views => dispatch(viewsAxiosSuccess(views)))
    }
}