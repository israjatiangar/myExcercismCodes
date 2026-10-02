def square(number):
    """square takes in a number, returns squares"""
    if number == 1:
        return 1
    if number <= 0 or number > 64:
        raise ValueError("square must be between 1 and 64")
    return square(number-1) * 2


def total(): 
    """total takes in a number and returns total of square till 64"""
    count = 64
    total_count = 0
    while count > 0:
        total_count += square(count)
        count-=1
    return  total_count
