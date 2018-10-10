// MEIN DIGITALER BLUMENTOPF
// Für Calliope Mini
// https://github.com/crismancich/CalliopeBlumentopf

basic.forever(() => {
    // Strom auf Ecke 0 (P0) einschalten. Wir wollen nicht, dass der Strom dauer an ist, sonst rostet die Büroklammer.
    pins.digitalWritePin(DigitalPin.P0, 1)
    
    // analogReadPin misst den Strom auf Ecke 1
    // Ist der Wert größer als 500, ist die Erde feucht genug
    // analogReadPin gibt Werte zwischen 0 und 1023 aus. 1023 entspricht 3,3 Volt.
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        // Fröhliches Gesicht, genug Wasser
        basic.showIcon(IconNames.Happy)
    } else {
        // Trauriges Gesicht, nicht genug Wasser
        basic.showIcon(IconNames.Sad)
    }
    // Strom auf P0 wieder abschalten
    pins.digitalWritePin(DigitalPin.P0, 0)
    // Eine Sekunde (1000 Millisekunden) warten
    basic.pause(1000)
})
