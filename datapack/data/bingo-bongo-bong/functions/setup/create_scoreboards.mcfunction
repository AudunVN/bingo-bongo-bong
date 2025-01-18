scoreboard objectives add bingo_bongo.player_health dummy

scoreboard objectives add bingo_bongo.death_count deathCount

scoreboard objectives add bingo_bongo.death_check_count dummy
execute as @a run scoreboard players set @s bingo_bongo.death_check_count 0

scoreboard objectives add bingo_bongo.lives_with_stone_count dummy
execute as @a run scoreboard players set @s bingo_bongo.lives_with_stone_count 0

scoreboard objectives add bingo_bongo.show_coordinates trigger
scoreboard objectives add bingo_bongo.coordinates_direction dummy
scoreboard objectives add bingo_bongo.coordinates_x dummy
scoreboard objectives add bingo_bongo.coordinates_y dummy
scoreboard objectives add bingo_bongo.coordinates_z dummy