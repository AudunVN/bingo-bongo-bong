execute as @a store result score @s bingo_bongo.player_health run data get entity @s Health
execute as @a[nbt=!{Health:0.0f}] if score @s bingo_bongo.player_health matches 0 run advancement grant @s only bingo-bongo-bong:have_half_a_heart
