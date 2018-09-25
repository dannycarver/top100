import React from 'react';

class Top100Form extends React.Component {
    state = { name: ''}

    handleChange = (e) => {
    this.setState({ name: e.target.value });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name);
    this.setState({ name: '' })
}

render() {
    return (
        <form on Submit={this.handleSubmit}>
            <input
                placeholder="Add A Song"
                required
                value={this.state.name}
                onChange={this.handleChange}
                />
        </form>
    )
}
}

export default Top100Form;