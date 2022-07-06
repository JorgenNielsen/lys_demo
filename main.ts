basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                for (let index = 0; index < 8; index++) {
                    control.waitMicros(6000)
                }
                led.unplot(x, y)
            }
        }
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, 4 - y)
                for (let index = 0; index < 8; index++) {
                    control.waitMicros(6000)
                }
                led.unplot(4 - x, 4 - y)
            }
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playMelody("C5 B A G F E D C ", 256)
        led.unplot(0, 0)
    }
})
