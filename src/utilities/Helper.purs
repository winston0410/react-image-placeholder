module Helper where

import Data.Maybe
import Data.Nullable
import Data.Array
import Prelude
import Node.Buffer
import Node.Encoding
-- import Src
-- import Props

-- Props
type Props = { src :: Nullable String, "data-src" :: Nullable String }

getBuffer :: Array { data :: String } -> Maybe String
getBuffer arr = do
  dataObj <- arr # head
  let buffer = dataObj.data
  pure buffer

-- Src

nullToMaybe :: Props -> { src :: Maybe String, "data-src" :: Maybe String }
nullToMaybe obj = { src: toMaybe( obj.src), "data-src": toMaybe(obj."data-src") }

getProps :: { props :: Props } -> Props
getProps = _.props

-- Path in Src has priority over data-src
getSrc :: { props :: Props } -> String
getSrc obj = obj # getProps # nullToMaybe # getSrc'
  where
  -- getSrc' :: { src :: Maybe String, "data-src" :: Maybe String } -> String
  -- getSrc' obj' = fromMaybe "" obj'.src
  getSrc' :: { src :: Maybe String, "data-src" :: Maybe String } -> String
  getSrc' { src: Just (x), "data-src": Nothing } = x
  getSrc' { src: Nothing, "data-src": Just (x) } = x
  getSrc' { src: Nothing, "data-src": Nothing } = ""
  getSrc' { src: Just (x), "data-src": Just (y) } = y

setSrc :: { props :: { src :: String, dataSrc :: String } } -> String -> String -> { props :: { src :: String, dataSrc :: String } }
setSrc obj srcValue dataSrcValue = obj { props { src = srcValue, dataSrc = dataSrcValue } }
