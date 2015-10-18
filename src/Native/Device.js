Elm.Native = Elm.Native || {};
Elm.Native.Device = {};
Elm.Native.Device.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Device = localRuntime.Native.Device || {};
	if (localRuntime.Native.Device.values)
	{
		return localRuntime.Native.Device.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);

  var accelerationX = NS.input('Device.accelerationX', 0);
  var accelerationY = NS.input('Device.accelerationY', 0);
  var accelerationZ = NS.input('Device.accelerationZ', 0);

	localRuntime.addListener([accelerationX.id, accelerationY.id, accelerationZ.id], window, 'devicemotion', function devicemotion(e) {
      var ac =  e.acceleration;
      if(ac.x){
		    localRuntime.notify(accelerationX.id, ac.x);
      }
      if(ac.y){
        localRuntime.notify(accelerationY.id, ac.y)
      }
      if(ac.z){
        localRuntime.notify(accelerationZ.id, ac.z)
      }
	});

	return localRuntime.Native.Device.values = {
		accelerationX : accelerationX,
    accelerationY : accelerationY,
    accelerationZ : accelerationZ
	};
};
