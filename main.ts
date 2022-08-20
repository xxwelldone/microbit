input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    if (input.lightLevel() < 50) {
        music.playMelody("C E E G B A C5 C5 ", 452)
        basic.showString("Escuro")
    } else {
        music.playMelody("C C E F E G F C ", 114)
        basic.showString("Claro")
    }
})
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showIcon(IconNames.SmallHeart)
basic.showString("Hello!")
basic.pause(200)
basic.forever(function () {
	
})
