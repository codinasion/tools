---
title: Convert Decimal to Binary
description: Convert a decimal number to binary number
tags:
  - binary
  - decimal
  - conversion
  - math
  - number
  - number system
---

# Convert Decimal to Binary

This tool converts a decimal number to binary number.

## Example

```text
Decimal: 9
Binary: 1001
```

## How to convert decimal to binary

To convert a decimal number to binary, follow these steps:

1. Divide the decimal number by 2.
2. Get the integer quotient for the next iteration.
3. Get the remainder for the binary digit.
4. Repeat the steps until the quotient is equal to 0.

For example, to convert 9 to binary, we divide 9 by 2:

| Step | Quotient | Remainder |
| ---- | -------- | --------- |
| 9/2  | 4        | 1         |
| 4/2  | 2        | 0         |
| 2/2  | 1        | 0         |
| 1/2  | 0        | 1         |

The binary number is the sequence of remainders in reverse order, so the binary of 9 is 1001.
