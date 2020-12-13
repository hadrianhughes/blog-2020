import React, { FunctionComponent } from 'react'

const withProvider =
  (Component: FunctionComponent) =>
    (Ctx): FunctionComponent =>
      (props): JSX.Element => (
        <Ctx>
          <Component {...props} />
        </Ctx>
      )

export default withProvider
