module Helper where

import Data.Maybe
import Data.Nullable
import Data.Array
import Prelude
import Node.Buffer
import Node.Encoding
import Src
import Props

getBuffer :: Array { data :: String } -> Maybe String
getBuffer arr = do
  dataObj <- arr # head
  let buffer = dataObj.data
  pure buffer

getProps :: { props :: Props } -> Props
getProps = _.props
