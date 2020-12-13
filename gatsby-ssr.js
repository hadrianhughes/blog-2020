const React = require('react')
const { DarkModeProvider } = require('./src/context/DarkMode')

exports.wrapRootElement = ({ element }) => <DarkModeProvider>{element}</DarkModeProvider>
