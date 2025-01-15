export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 10,
      image:
"https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/07/10141444/ymm-1.jpeg" },
    {
        id: 2,
        name: "Chicken Burger",
        price: 12,
        image:
          "https://img.freepik.com/premium-photo/cheese-burger-classic-with-fries-beer_807701-3357.jpg?w=360",
      },
      {
        id:3,
        name: "Veg Burger",
        price: 8,
        image:
          "https://www.mccain.co.uk/custom/uploads/2023/06/Sticky-Fries-BBQ-Recipe-420x400.png",
      },
      {
        id: 4,
        name: "Double Cheese Burger",
        price: 15,
        image:
          "https://img.freepik.com/premium-photo/cheese-burger-american-cheese-burger-with-golden-french-fries-glass-beer_934652-1194.jpg?w=360",
      },
      {
        id: 5,
        name: "BBQ Burger",
        price: 13,
        image:
          "https://images.deliveryhero.io/image/fd-pk/Products/17284759.jpg?width=%s",
      },
      {
        id: 6,
        name: "Fish Burger",
        price: 14,
        image:
          "https://diethood.com/wp-content/uploads/2014/05/american-cheeseburger-7-600x800.jpg",
      },
];
res.status(200).json(products);
}
