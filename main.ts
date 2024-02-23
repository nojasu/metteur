forever(function () {
    if (iscmons.button_is_pressed(pins.P0)) {
        while (iscmons.send_nrf24_number(
        42,
        0,
        pins.P6,
        pins.P7
        )) {
            control.timer1.pauseUntil(1000)
        }
    }
})
