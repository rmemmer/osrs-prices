from OSRSBytes import Hiscores

user = Hiscores('PJ Salt')

# Lets display some information
print("Current level:", user.skill('attack', 'level'))
print("Current rank:", user.skill('attack', 'rank'))
print("Current exp:", user.skill('attack', 'experience'))
print("Exp remaining:", user.skill('attack','exp_to_next_level'))

# Lets display some Boss information
print("Wintertodt Kills:", user.boss("wintertodt", "score"))

# Lets display some Clue Hiscores
print("Medium clues done:", user.clue("medium", "score"))