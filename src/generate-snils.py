#!/usr/bin/env python3
from random import randrange

def get_random_number():
    return randrange(10 ** 9)

def get_sum(x: int) -> int:
    string = str(x)
    result = 0
    index = 0
    for v in string:
        result += int(v) * (9 - index)
        index += 1
    return result

def generate_snils():
    snils_code = get_random_number()
    summ = get_sum(snils_code)

    if summ > 101:
        summ %= 101

    check_sum = '00' if summ == 100 or summ == 101 else f'{summ:02}'
    return f'{snils_code:09}{check_sum}'


print(generate_snils())
