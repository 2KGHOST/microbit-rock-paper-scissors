function main() {
    let number = randint(0, 2)
    if (number == 0) {
        basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    }
    
    if (number == 1) {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    }
    
    if (number == 2) {
        basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    }
    
}

function on_gesture_shake() {
    
}

input.onGesture(Gesture.Shake, main)
function on_button_pressed_a() {
    
}

input.onButtonPressed(Button.A, main)
function on_button_pressed_b() {
    
}

input.onButtonPressed(Button.B, main)
