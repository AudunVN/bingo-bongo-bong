scoreboard players enable @a bingo_bongo.show_coordinates

execute as @a[scores={bingo_bongo.show_coordinates=2..}] run scoreboard players set @s bingo_bongo.show_coordinates 0
execute as @a[scores={bingo_bongo.show_coordinates=..-1}] run scoreboard players set @s bingo_bongo.show_coordinates 0

execute as @a[scores={bingo_bongo.show_coordinates=1}] run function bingo-bongo-bong:coordinates/store_coordinates
execute as @a[scores={bingo_bongo.show_coordinates=1}] run function bingo-bongo-bong:coordinates/print_coordinates
