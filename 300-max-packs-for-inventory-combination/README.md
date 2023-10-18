# Question

Design an algorithm to help warehouse center workers on packing stuff.
There are items stored in the fulfillment center, for example [itemA, itemC, itemA, itemD, itemA...]
Workers need to find items for requested combination and pack them with boxes, each box should
have same combination of items, for example [itemA, itemB, itemC, itemC]

Given a list of the items in the fulfillment center as a list inventory：
inventory = ['A', 'C', 'A', 'D', 'E', 'C', 'A', 'B', 'B', 'C']
The requirement as list combination：
combination = ['A', 'B', 'C', 'C']

Return max number of boxes we can successfully pack,
i.e. return 1 in above example.
