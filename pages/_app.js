import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../store'
import { fromJS } from 'immutable'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(makeStore, {
  // serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(MyApp)
