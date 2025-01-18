scoreboard players add @s bingo_bongo.lives_with_stone_count 1
execute if score @s bingo_bongo.lives_with_stone_count matches 2.. run advancement grant @s only bingo-bongo-bong:get_stone_after_dying_with_stone
execute if score @s bingo_bongo.lives_with_stone_count matches 3.. run advancement grant @s only bingo-bongo-bong:get_stone_after_dying_with_stone_twice
