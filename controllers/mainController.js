const wol = require('node-wol');

exports.turnOnComputer = (req, res) => {
  wol.wake(process.env.MAC_ADDRESS, function(error) {
    if (error) {
      // handle error
      console.log(new Date() + ' Unable to turn on computer');
      res.send({"error": "Unable to turn on computer."});
    }
    console.log(new Date() + ' Computer turned on');
    res.send({"Success": "Computer turned on."});
  });
}
