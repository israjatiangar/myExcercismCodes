def square(number):
    if number == 1:
        return 1
    if number <= 0 or number > 64:
        raise ValueError("square must be between 1 and 64")
    return square(number-1) * 2


def total():
    i = 64
    count = 0
    while i > 0:
        count += square(i)
        i-=1
    return  count
