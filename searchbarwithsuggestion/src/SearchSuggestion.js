import React, { useEffect, useState } from 'react'
const foodItem = [
    {
        "foodName": "Apple"
    },
    {
        "foodName": "Avocado"
    },
    {
        "foodName": "Almond"
    },
    {
        "foodName": "Artichoke"
    },
    {
        "foodName": "Asparagus"
    },
    {
        "foodName": "Banana"
    },
    {
        "foodName": "Blueberry"
    },
    {
        "foodName": "Broccoli"
    },
    {
        "foodName": "Brussels Sprouts"
    },
    {
        "foodName": "Breadfruit"
    },
    {
        "foodName": "Carrot"
    },
    {
        "foodName": "Cabbage"
    },
    {
        "foodName": "Cauliflower"
    },
    {
        "foodName": "Cantaloupe"
    },
    {
        "foodName": "Coconut"
    },
    {
        "foodName": "Dates"
    },
    {
        "foodName": "Dragon Fruit"
    },
    {
        "foodName": "Durian"
    },
    {
        "foodName": "Dill"
    },
    {
        "foodName": "Duck"
    },
    {
        "foodName": "Eggplant"
    },
    {
        "foodName": "Elderberry"
    },
    {
        "foodName": "Endive"
    },
    {
        "foodName": "Edamame"
    },
    {
        "foodName": "Eggnog"
    },
    {
        "foodName": "Fig"
    },
    {
        "foodName": "Fennel"
    },
    {
        "foodName": "Feijoa"
    },
    {
        "foodName": "Flaxseed"
    },
    {
        "foodName": "Feta Cheese"
    },
    {
        "foodName": "Grapes"
    },
    {
        "foodName": "Guava"
    },
    {
        "foodName": "Gooseberry"
    },
    {
        "foodName": "Garlic"
    },
    {
        "foodName": "Ginger"
    },
    {
        "foodName": "Honeydew"
    },
    {
        "foodName": "Huckleberry"
    },
    {
        "foodName": "Hummus"
    },
    {
        "foodName": "Horseradish"
    },
    {
        "foodName": "Havarti"
    },
    {
        "foodName": "Iceberg Lettuce"
    },
    {
        "foodName": "Indian Fig"
    },
    {
        "foodName": "Italian Sausage"
    },
    {
        "foodName": "Iced Tea"
    },
    {
        "foodName": "Irish Moss"
    },
    {
        "foodName": "Jackfruit"
    },
    {
        "foodName": "Jalapeño"
    },
    {
        "foodName": "Jujube"
    },
    {
        "foodName": "Juniper Berry"
    },
    {
        "foodName": "Jerky"
    },
    {
        "foodName": "Kiwi"
    },
    {
        "foodName": "Kale"
    },
    {
        "foodName": "Kohlrabi"
    },
    {
        "foodName": "Kumquat"
    },
    {
        "foodName": "Kidney Beans"
    },
    {
        "foodName": "Lemon"
    },
    {
        "foodName": "Lime"
    },
    {
        "foodName": "Lychee"
    },
    {
        "foodName": "Lentils"
    },
    {
        "foodName": "Leek"
    },
    {
        "foodName": "Mango"
    },
    {
        "foodName": "Melon"
    },
    {
        "foodName": "Mulberry"
    },
    {
        "foodName": "Mushroom"
    },
    {
        "foodName": "Miso"
    },
    {
        "foodName": "Nectarine"
    },
    {
        "foodName": "Navel Orange"
    },
    {
        "foodName": "Nutmeg"
    },
    {
        "foodName": "Napa Cabbage"
    },
    {
        "foodName": "Nashi Pear"
    },
    {
        "foodName": "Orange"
    },
    {
        "foodName": "Olive"
    },
    {
        "foodName": "Onion"
    },
    {
        "foodName": "Oregano"
    },
    {
        "foodName": "Oyster"
    },
    {
        "foodName": "Papaya"
    },
    {
        "foodName": "Peach"
    },
    {
        "foodName": "Pear"
    },
    {
        "foodName": "Pineapple"
    },
    {
        "foodName": "Pumpkin"
    },
    {
        "foodName": "Quince"
    },
    {
        "foodName": "Quinoa"
    },
    {
        "foodName": "Quesadilla"
    },
    {
        "foodName": "Quail"
    },
    {
        "foodName": "Quark"
    },
    {
        "foodName": "Raspberry"
    },
    {
        "foodName": "Radish"
    },
    {
        "foodName": "Raisin"
    },
    {
        "foodName": "Rhubarb"
    },
    {
        "foodName": "Ricotta"
    },
    {
        "foodName": "Strawberry"
    },
    {
        "foodName": "Spinach"
    },
    {
        "foodName": "Squash"
    },
    {
        "foodName": "Starfruit"
    },
    {
        "foodName": "Sweet Potato"
    },
    {
        "foodName": "Tomato"
    },
    {
        "foodName": "Turnip"
    },
    {
        "foodName": "Tangerine"
    },
    {
        "foodName": "Thyme"
    },
    {
        "foodName": "Tofu"
    },
    {
        "foodName": "Ugli Fruit"
    },
    {
        "foodName": "Udon"
    },
    {
        "foodName": "Ube"
    },
    {
        "foodName": "Upside-down Cake"
    },
    {
        "foodName": "Urfa Pepper"
    },
    {
        "foodName": "Vanilla"
    },
    {
        "foodName": "Venison"
    },
    {
        "foodName": "Vodka"
    },
    {
        "foodName": "Vegetable Soup"
    },
    {
        "foodName": "Vermicelli"
    },
    {
        "foodName": "Watermelon"
    },
    {
        "foodName": "Walnut"
    },
    {
        "foodName": "Wasabi"
    },
    {
        "foodName": "Wheat"
    },
    {
        "foodName": "Wonton"
    },
    {
        "foodName": "Xigua"
    },
    {
        "foodName": "Xanthan Gum"
    },
    {
        "foodName": "Xacuti"
    },
    {
        "foodName": "Xylocarp"
    },
    {
        "foodName": "Xylitol"
    },
    {
        "foodName": "Yam"
    },
    {
        "foodName": "Yogurt"
    },
    {
        "foodName": "Yuca"
    },
    {
        "foodName": "Yellow Pepper"
    },
    {
        "foodName": "Yuzu"
    },
    {
        "foodName": "Zucchini"
    },
    {
        "foodName": "Ziti"
    },
    {
        "foodName": "Zest"
    },
    {
        "foodName": "Zebra Cake"
    },
    {
        "foodName": "Zaatar"
    }
]
function SearchSuggestion() {
    const [search, setSearch] = useState('');
    const [suggestion, setSuggestion] = useState([]);

    const handleSelection = (item) => {
        setSearch(item)
    }

    useEffect(() => {
        setSuggestion(
            foodItem.filter(item => {
                const inputData = search.toLocaleLowerCase();
                const food = item.foodName.toLocaleLowerCase();
                return inputData && food.startsWith(inputData) && food !== inputData
            })
        )
    }, [search])

    return (
        <div>
            <h1>Search</h1>
            <input
                className='input'
                type='text'
                placeholder='Enter Your Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {suggestion.map(item => {
                    return (
                        <div
                            onClick={() => handleSelection(item.foodName)}
                            className='dropdown'
                        >{item.foodName}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchSuggestion
