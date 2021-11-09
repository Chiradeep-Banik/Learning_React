import React, { useState } from "react";

function Form(props) {
    var [name, name_change] = useState('');
    var [pass, pass_change] = useState('');

    function name_entered(event) {
        name_change(event.target.value);
    }
    function password_entered(event) {
        pass_change(event.target.value);
    }

    function submited(e) {
        e.preventDefault();
        if (name === '' || pass === '') {
            alert('Please enter both fields');
            return;
        }
        console.log(name, pass);
        name_change('');
        pass_change('');
    }
    return (
        <form>
            <input id="name" type="text" value={name} onChange={name_entered} placeholder={props.place} />
            <input id="pass" type="password" value={pass} onChange={password_entered} /><br />
            <button type="submit" onClick={submited}>Submit</button><br />
            {props.children}
        </form>
    );
}

export default Form;