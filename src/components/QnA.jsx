import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../css/QnA.css"

export default class QnA extends Component {

    render() {
        return (
            <div id="doubt-container">
                {[1, 2].map((val) => {
                    return (
                        <div className="qna-box">
                            <div className="question">
                                <Typography variant="body2">
                                    Q {val} : {"This is an extremely complicated question that I have. What does Lorem Ipsum mean?"}
                                </Typography>
                            </div>
                            <div className="answer">
                                <TextField
                                    size="small"
                                    fullWidth
                                    id="outlined-textarea"
                                    label="Answer"
                                    placeholder="Enter your answer here"
                                    multiline
                                    variant="outlined"
                                />
                                <Button size="small" variant="contained" color="primary">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}
