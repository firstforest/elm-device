module Device ( accelerationX, accelerationY, accelerationZ ) where

import Native.Device
import Signal exposing (Signal)

accelerationX : Signal Float
accelerationX =
  Native.Device.accelerationX


accelerationY : Signal Float
accelerationY =
  Native.Device.accelerationY

accelerationZ : Signal Float
accelerationZ =
  Native.Device.accelerationZ
