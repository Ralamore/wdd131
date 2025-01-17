# # # # num = int(input("What is your favorite number? "))

# # # # fin = 0
# # # # for i in range(0, (num+1)):
# # # #     fin = i + fin 

# # # # print(f"The sum of the numbers from 0 to {num} is: {fin}")

# # # print("Enter a list of numbers, type 0 when finished.")
# # # nums = []
# # # while True:
    
# # #     put = int(input("Enter number: "))
# # #     if put != 0:
# # #         nums += [put]
# # #     elif put == 0:
# # #         break
# # # av = 0.0
# # # for i in nums:
# # #     av = i + av
# # # dis = 0.0
# # # dis = av / len(nums)
# # # print(f"{av}The average number is: {dis:.3f}")



# # P = float(input("Amount borrowed: "))
# # i = float(input("Interest rate: "))
# # n = float(input("Number of payments: "))

# # a = (P * i) / (1-(1+i)**-abs(n))

# # print(f"Payment amount: {a:.2f}")



# x = int(input("Value for x: "))
# y = int(input("Value for y: "))

# for i in range(0,y):
#     x = (48271 * x) % (2**31 - 1)

# print(f"Result: {x}")