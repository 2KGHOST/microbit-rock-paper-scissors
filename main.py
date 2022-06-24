def main():
    number = randint(0, 2)
    if number == 0:
        basic.show_leds("""
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        """)
    
    if number == 1:
        basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    
    if number == 2:
        basic.show_leds("""
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        """)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, main)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, main)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, main)