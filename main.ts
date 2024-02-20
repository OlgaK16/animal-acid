input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        # # # # #
        # # # # #
        `)
    music.play(music.stringPlayable("C5 C5 B B A A G G ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("B G A C5 F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("A F B F C5 F G F ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Butterfly)
})
basic.showIcon(IconNames.Giraffe)
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
