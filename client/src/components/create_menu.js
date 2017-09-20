import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './page_title';

export default () => {
    return (
        <div>
            <PageTitle backgroundImg="cityscape" color="white" text="CREATE" subText="choose a puzzle style to create"/>
                <div className="container">
                <h3 className="text-center m-4">Choose A Puzzle Style To Create</h3>
                <Link className="btn-block" to="/create/speckle_spackle">
                    <button className="btn btn-outline-danger btn-block">Speckle Spackle</button>
                </Link>
                <button className="btn btn-outline-danger btn-block">Unblock Me</button>
                <Link className="btn-block" to="/create/word_guessing">
                    <button className="btn btn-outline-danger btn-block">Word Guess</button>
                </Link>
            </div>
        </div>
    )
}