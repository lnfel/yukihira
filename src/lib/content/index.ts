type Category = "Donburi" | "Sushi" | "Drinks" | "Best Sellers"
type Categories = Category[]
type Product = {
    name: string
    categories: Categories,
    image: string,
    price: number
}

export const products: Product[] = [
    {
        name: "Karaagedon",
        categories: ["Donburi"],
        image: "karaagedon.png",
        price: 190
    },
    {
        name: "Katsudon",
        categories: ["Donburi"],
        image: "katsudon.jpg",
        price: 190
    },
    {
        name: "Mix Katsudon",
        categories: ["Donburi"],
        image: "mix-katsudon.png",
        price: 210
    },
    {
        name: "Ebi Katsudon",
        categories: ["Donburi", "Best Sellers"],
        image: "ebi-katsudon.png",
        price: 220
    },
    {
        name: "Sakedon",
        categories: ["Donburi"],
        image: "sakedon.png",
        price: 250
    },
    {
        name: "Tendon",
        categories: ["Donburi"],
        image: "tendon.png",
        price: 250
    },
    {
        name: "Unagi don",
        categories: ["Donburi", "Best Sellers"],
        image: "unagi-don.png",
        price: 280
    },
    {
        name: "Kung Pao Dragon",
        categories: ["Sushi", "Best Sellers"],
        image: "kung-pao-dragon-roll.jpg",
        price: 80
    },
    {
        name: "Lobster Avocado",
        categories: ["Sushi"],
        image: "lobster-avocado-roll.jpg",
        price: 80
    },
    {
        name: "Spicy Tuna Roll",
        categories: ["Sushi"],
        image: "spicy-tuna-roll.jpg",
        price: 95
    },
    {
        name: "Shrimp Tempura",
        categories: ["Sushi"],
        image: "shrimp-tempura-roll.jpg",
        price: 99
    },
    {
        name: "California Roll",
        categories: ["Sushi"],
        image: "california-roll.jpg",
        price: 99
    },
    {
        name: "Ahi Poke Bowl",
        categories: ["Sushi", "Best Sellers"],
        image: "ahi-poke-bowl.jpg",
        price: 120
    },
    {
        name: "House-made Ginger Beer",
        categories: ["Drinks"],
        image: "ginger-beer.jpg",
        price: 50
    },
    {
        name: "Strawberry Cucumber Limeade",
        categories: ["Drinks"],
        image: "strawberry-cucumber-limeade.jpg",
        price: 50
    },
    {
        name: "Yukihira's Coconut Cooler",
        categories: ["Drinks"],
        image: "coconut-cooler.jpg",
        price: 75
    },
    {
        name: "Dr. Pepper",
        categories: ["Drinks"],
        image: "dr-pepper.jpg",
        price: 83
    },
    {
        name: "Barq's Root Beer",
        categories: ["Drinks"],
        image: "barqs-root-beer.png",
        price: 85
    },
    {
        name: "Water (Fiji)",
        categories: ["Drinks"],
        image: "water-fiji-lrg.jpg",
        price: 30
    },
]
