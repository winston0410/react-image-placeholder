module Src where

import Prelude
import Props
import Data.Maybe
import Data.Nullable

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

-- setSrc :: { props :: { src :: String } } -> { props :: { src :: String } }
setSrc obj value = obj
  where
  setDataSrc' obj' value' = obj

  setSrc' obj' value' = obj
