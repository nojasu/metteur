forever(function () {
    if (iscmons.button_is_pressed(pins.P1)) {
        while (iscmons.send_nrf24_number(
        42,
        0,
        pins.P6,
        pins.P7
        )) {
            control.waitMicros(1000)
        }
    }
})
