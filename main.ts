// When button A pressed
input.onButtonPressed(Button.A, function () {
    MP3.stoplecture()
basic.clearScreen()
    MP3.rep0()
MP3.setVolume(25)
MP3.playTrack(1)
basic.showIcon(IconNames.Heart)
})
// When button B pressed
input.onButtonPressed(Button.B, function () {
    MP3.stoplecture();
basic.clearScreen()
})
let buffer = pins.createBuffer(8);
// Baud rate 9600, TX on P14, RX on P0
serial.redirect(
SerialPin.P14,
SerialPin.P0,
BaudRate.BaudRate9600
)
control.waitMicros(200000)
