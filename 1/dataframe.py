import json
import random

USER_AMOUNT = 200

NICKNAME_PARTS = [
    'Shadow', 'Wolf', 'Cyber', 'Phoenix', 'Neon', 'Blade', 'Frost', 'Byte',
    'Iron', 'Falcon', 'Silver', 'Fox', 'Dark', 'Hawk', 'Crimson', 'Dragon',
    'Storm', 'Rider', 'Night', 'Owl', 'Blaze', 'Hunter', 'Ghost', 'Walker',
    'Thunder', 'Strike', 'Echo', 'Specter', 'Solar', 'Flare', 'Mystic', 'Raven',
    'Venom', 'Viper', 'Lunar', 'Wraith', 'Steel', 'Titan', 'Phantom', 'Reaper',
    'Arctic', 'Inferno', 'Hound', 'Golden', 'Eagle', 'Obsidian', 'Serpent',
    'Giant', 'Stalker', 'Claw', 'Fang'
]
TITLE_PARTS = [
    "Illustration", "Painting", "Sketch", "Drawing", "Portrait",
    "Landscape", "Abstract", "Surreal", "Fantasy", "Dream",
    "Storm", "Fire", "Water", "Earth", "Wind",
    "Sky", "Ocean", "Forest", "Mountain", "Desert",
    "Sun", "Moon", "Star", "Galaxy", "Cosmos",
    "Light", "Shadow", "Darkness", "Twilight", "Dawn",
    "Eternal", "Mystic", "Ancient", "Forgotten", "Timeless",
    "Whisper", "Echo", "Silence", "Melody", "Harmony",
    "Chaos", "Order", "Balance", "Freedom", "Journey",
    "Adventure", "Exploration", "Discovery", "Mystery", "Secret",
    "Pirate", "Knight", "Dragon", "Phoenix", "Unicorn",
    "Spirit", "Soul", "Heart", "Mind", "Vision",
    "Poem", "Story", "Legend", "Myth", "Tale",
    "Golden", "Silver", "Crimson", "Azure", "Emerald",
    "Frost", "Flame", "Thunder", "Lightning", "Rainbow",
    "Serenity", "Bliss", "Euphoria", "Nostalgia", "Hope",
    "Fear", "Courage", "Strength", "Wisdom", "Beauty",
    "1", "2", "3", "44", "56", "777", "890", "1000", "9999"
]

CATEGORY_PARTS = [
    "ARTWORK", "POEM", "PROSE"
]

LYRICS = """Harpy Hare, where have you buried all your children?
Tell me, so I say
Harpy Hare, where have you buried all your children?
Tell me, so I say
All the arrows that you've stolen
Split in half, now bum and broken
Like your heart that was so eager to be hid
You can't keep them all caged
They will fight and run away
Mother, tell me, so I say (la-la-la, la-la-la, la-la-la)
Harpy Hare, where have you buried all your children?
Tell me, so I say
Harpy Hare, where have you buried all your children?
Tell me, so I say
Forest walls and starry ceilings
Barren curtains that you're weaving
Like the stories that you keep inside your head
She can't keep them all safe
They will die and be afraid
Mother, tell me, so I say (mother, tell me, so I say)
Harpy Hare, where have you buried all your children?
Tell me, so I say
Harpy Hare, where have you buried all your children?
Tell me, so I say
Harpy Hare, where have you buried all your children?
Tell me, so I say
Harpy Hare, where have you buried all your children?
Tell me, so I say! (Tell me, so I say!)
She can't keep them all caged
They'll be far and fly away
Mother, tell me you will stay
We'll be far and fly away""".split("\n")


IMAGES = [
    "https://img.freepik.com/free-photo/sight-sense-plants-collage_23-2149848106.jpg?t=st=1741446795~exp=1741450395~hmac=edadf988a1ff645041fd4016228039d0964d08240fdb0d10b6b9fcb6a2cfc0dc&w=826",
    "https://img.freepik.com/free-photo/collage-wallpaper-vintage-aesthetic-frame-background-animal-collage-mixed-media-art_53876-129916.jpg?t=st=1741446822~exp=1741450422~hmac=5e3b33cd42eace3f156efaa067612ac63985ee72721ab6959e89101d14a6e263&w=996",
    "https://img.freepik.com/free-vector/hand-drawn-picasso-style-illustration_23-2149577316.jpg?t=st=1741446837~exp=1741450437~hmac=9d9d66eb244b1fc7e264a0002e0e465a63798e8ad40e53a0e342165ddbca4cee&w=996",
    "https://img.freepik.com/free-vector/parrot-gladiole_53876-82030.jpg?t=st=1741446876~exp=1741450476~hmac=68983e20288311b395e8884788ef24fb54d124d099ec77ecf1054f27bbf3e06e&w=826",
    "https://img.freepik.com/free-vector/hand-drawn-matisse-style-illustration_23-2149587970.jpg?t=st=1741446912~exp=1741450512~hmac=481ab52c4ab6faac07fa7c12a5850d7dbdaf7c5e9c8b329c2740eff4e8f1b726&w=1060",
    "https://img.freepik.com/free-vector/botanical-minimalist-banner-collection_107791-34078.jpg?t=st=1741446941~exp=1741450541~hmac=f6f643168e3341d0de427e269d64c97fd15cf0427101927aefe183075d505dd1&w=996",
    "https://img.freepik.com/free-vector/cartoon-cave-interior-with-sunlight-from-ceiling_107791-20489.jpg?t=st=1741446972~exp=1741450572~hmac=825a6b7b1af442c3e5eb97b89f01fd482da3847ba55ce6c1ddbf67f168d30619&w=996",
    "https://img.freepik.com/free-vector/goliath-cockatoo_53876-75772.jpg?t=st=1741446985~exp=1741450585~hmac=bdda3cc9c408ff740f4a1d540c6564e49d5ff1052354489cffc98f31f5c7e5cd&w=826",
    "https://img.freepik.com/free-vector/collage-template-social-story-vector-vintage-digital-collage-art_53876-136583.jpg?t=st=1741447033~exp=1741450633~hmac=0427a9bb8f3f21105e4295b412708c8fdb75159761ccdd6f9183b3d494ab48f1&w=740",
    "https://img.freepik.com/free-vector/floral-banner-with-snake_53876-97477.jpg?t=st=1741447053~exp=1741450653~hmac=d7f5bed9f83a554924496cfeeb2d51561520ca170b1abf16db232306124bb8e8&w=740",
    "https://img.freepik.com/free-vector/scribbles-background-hand-drawn-line-seamless-doodle-pattern_474888-6055.jpg?t=st=1741447089~exp=1741450689~hmac=5e989eccff41707f629f9e48a1f384521e2d5da6956c76e6d976904b2b4f7230&w=740",
    "https://img.freepik.com/free-vector/hand-drawing-illustration-captived-heart_53876-15641.jpg?t=st=1741447142~exp=1741450742~hmac=645ce58a55bafe7839550db54f54965e50fde53af91c4bb8fd3efab089ba22aa&w=1060",

]

result_dict = dict()

for i in range(USER_AMOUNT):

    category = random.choice(CATEGORY_PARTS)

    is_artwork = category == "ARTWORK"

    result_dict[i] = {
        "title" : " ".join([random.choice(TITLE_PARTS) for i in range(random.randint(1, 6))]),
        "author" : random.choice(NICKNAME_PARTS) + random.choice(NICKNAME_PARTS) + str(random.randint(0,100)),
        "category" : category,
        "image" : random.choice(IMAGES) if is_artwork else None,
        "likes_amount" : random.randint(0, 1000),
        "text_content" : (
            None if is_artwork else
                "\n".join(LYRICS[0 : random.randint(4, len(LYRICS))]) if category == "POEM" else open(
                    "text_prose", "r", encoding="utf-8"
                ).read()
        ) 
    }

with open("artworks_data.json", "w", encoding="utf-8") as file:
    json.dump(
        result_dict,
        file,
        ensure_ascii=False,
        indent=2
    )