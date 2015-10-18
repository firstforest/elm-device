import Graphics.Element exposing (show, flow, down)
import Device

main = Signal.map3 view Device.accelerationX Device.accelerationY Device.accelerationZ

view x y z =
  flow down
    [ show x
    , show y
    , show z
    ]
