import React from 'react';
import Button from '@material-ui/core/Button';

class CreateReview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <Button fullWidth variant="contained" color="primary" className="paper-margin">
                Schedule a review
            </Button>
        )
    }
}

export default CreateReview