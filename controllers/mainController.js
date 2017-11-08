const wol = require('node-wol');

exports.wakeComputer = (req, res) => {
  wol.wake(process.env.MAC_ADDRESS, function(error) {
    if (error) {
      // handle error
      console.log(new Date() + ' Unable to wake computer');
      res.send({"error": "Unable to wake computer"});
    }
    console.log(new Date() + ' Computer is awake');
    res.send({"Success": "Computer is awake"});
  });
}
