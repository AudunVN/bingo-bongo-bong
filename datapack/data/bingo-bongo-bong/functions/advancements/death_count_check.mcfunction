execute as @e[type=player] if score @s bingo_bongo.death_check_count < bingo_bongo.death_count run function #bingo-bongo-bong:death_functions
execute as @e[type=player] if score @s bingo_bongo.death_check_count < bingo_bongo.death_count run scoreboard players add @s bingo_bongo.death_check_count 1
