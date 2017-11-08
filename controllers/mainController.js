const wol = require('node-wol');

exports.turnOnComputer = (req, res) => {
  wol.wake(process.env.MAC_ADDRESS, function(error) {
    if (error) {
      // handle error
      res.send({"error": "Unable to turn on computer."});
    }
    res.send({"Success": "Computer turned on."});
  });
}
