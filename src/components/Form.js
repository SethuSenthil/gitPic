import React from "react";

class Form extends React.Component {
    render () {
        return (
           <form className="form-inline" onSubmit={this.props.getUserData}>
                    <input class="form-control mr-sm-2 input gfont" type="search" name="username" placeholder="Username..."
                    aria-label="Search Username"/>
                <button className="btn btn-outline-success my-2 my-sm-0 button is-danger" type="submit" id="showBtn">Search</button>
            </form>
        );
    }
}

export default Form;