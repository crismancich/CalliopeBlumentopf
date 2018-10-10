// MEIN DIGITALER BLUMENTOPF
// Für Calliope Mini
// https://github.com/crismancich/CalliopeBlumentopf

basic.forever(() => {
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
})
