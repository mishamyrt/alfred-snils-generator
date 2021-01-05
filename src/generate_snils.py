#!/usr/bin/env python3
'''
This scripts generates random SNILS number. SNILS is the russian Pension insurance number.
'''
from random import randrange

def get_checksum(snils_number: int) -> int:
    '''
    Generates a checksum of the SNILS number
    '''
    result = 0
    index = 0
    for digit in str(snils_number):
        result += int(digit) * (9 - index)
        index += 1

    if result > 101:
        result %= 101
    return 0 if result == 100 or result == 101 else result

def generate_snils():
    '''
    Generates SNILS number
    '''
    snils_code = randrange(10 ** 9)
    checksum = get_checksum(snils_code)
    return f'{snils_code:09}{checksum:02}'

print(generate_snils())
