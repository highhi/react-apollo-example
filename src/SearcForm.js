import React from 'react'
import Items from './Items'

export default class Form extends React.Component {
  state = { q: '', isCount: false }
  keyword = ''

  onKeywordChange = event => {
    this.keyword = event.target.value.trim()
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ q: this.keyword })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div><input type="text" onChange={this.onKeywordChange} /></div>
          <input type="radio" name="count" />
          <button type="submit">Submit</button>
        </form>
        <Items variables={{ q: this.state.q, isCount: this.state.isCount }} />
      </div>
    )
  }
}
