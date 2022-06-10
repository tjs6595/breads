const React = require('react')
const Default = require('./layouts/Default')

function show404() {
  return (
    <Default>
      <h3>Error 404</h3>
      <button></button>
    </Default>
  )
}

module.exports = show404
