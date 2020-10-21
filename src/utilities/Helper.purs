module Helper where

import Data.Maybe
import Data.Nullable
import Data.Array
import Prelude

-- type Props = { src :: String }
type Props = { src :: Nullable String, "data-src" :: Nullable String }

nullToMaybe :: Props -> { src :: Maybe String, "data-src" :: Maybe String }
nullToMaybe obj = { src: toMaybe( obj.src), "data-src": toMaybe(obj."data-src") }

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

  getProps :: { props :: Props } -> Props
  getProps = _.props
