import React, { useState } from 'react';
import { PasswordService } from '../services/PasswordService';

let PasswordGenerator = () => {

    let [state, setstate] = useState({
        generatedPassword: '',
        passwordLength: 20,
        symbols: false,
        numbers: false,
        lower: false,
        upper: false
    });

    let updateInput = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    let updateCheck = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    let submit = (event) => {
        event.preventDefault();

        let passwordObj = PasswordService.getPasswordObj(state);
        let thePassword = PasswordService.generatePassword(
            passwordObj,
            state.passwordLength
        );

        setstate({
            ...state,
            generatedPassword: thePassword
        });

        
    };

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg">

                            <div className="card-header bg-warning">
                                <p className="h3">Password Generator</p>
                            </div>

                            <div className="card-body bg-warning">

                                <form onSubmit={submit}>

                                    <div className="mb-2">
                                        <div className="input-group">

                                            <span className="input-group-text">
                                                Password
                                            </span>

                                            <input
                                                value={state.generatedPassword}
                                                readOnly
                                                type="text"
                                                className="form-control"
                                                placeholder="Generated password"
                                            />

                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">

                                            <input
                                                required
                                                value={state.passwordLength}
                                                onChange={updateInput}
                                                name="passwordLength"
                                                type="number"
                                                className="form-control"
                                            />

                                            <span className="input-group-text">
                                                Password Length
                                            </span>

                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">

                                            <span className="input-group-text bg-white">
                                                <input
                                                    checked={state.symbols}
                                                    onChange={updateCheck}
                                                    name="symbols"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </span>

                                            <input
                                                type="text"
                                                disabled
                                                className="form-control"
                                                placeholder="symbols"
                                            />

                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">

                                            <span className="input-group-text bg-white">
                                                <input
                                                    checked={state.numbers}
                                                    onChange={updateCheck}
                                                    name="numbers"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </span>

                                            <input
                                                type="text"
                                                disabled
                                                className="form-control"
                                                placeholder="numbers"
                                            />

                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">

                                            <span className="input-group-text bg-white">
                                                <input
                                                    checked={state.lower}
                                                    onChange={updateCheck}
                                                    name="lower"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </span>

                                            <input
                                                type="text"
                                                disabled
                                                className="form-control"
                                                placeholder="lowercase letters"
                                            />

                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">

                                            <span className="input-group-text bg-white">
                                                <input
                                                    checked={state.upper}
                                                    onChange={updateCheck}
                                                    name="upper"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </span>

                                            <input
                                                type="text"
                                                disabled
                                                className="form-control"
                                                placeholder="uppercase letters"
                                            />

                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <input
                                            type="submit"
                                            value="Generate"
                                            className="btn btn-outline-dark"
                                        />
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PasswordGenerator;