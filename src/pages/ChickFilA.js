import { useState } from 'react';
import "./pages.css";

function ChickFilA() {
    const [menu, useMenu] = useState([
        { name: 'Cheese Cake', type: "Dessert", img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800", price: "8.99$" },
        { name: 'Green Tea Latte', type: "Drink", img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1600", price: "8.99$" },
        { name: 'Chicken Wings', type: "Appetizer", img: "https://images.pexels.com/photos/4115194/pexels-photo-4115194.jpeg?auto=compress&cs=tinysrgb&w=1600", price: "8.99$" },
        { name: 'French Fries', type: "Appetizer", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress", price: "8.99$" },
        { name: 'Cheese Cake', type: "Dessert", img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800", price: "8.99$" },
        { name: 'Green Tea Latte', type: "Drink", img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1600", price: "8.99$" },
        { name: 'Chicken Wings', type: "Appetizer", img: "https://images.pexels.com/photos/4115194/pexels-photo-4115194.jpeg?auto=compress&cs=tinysrgb&w=1600", price: "8.99$" },
        { name: 'French Fries', type: "Appetizer", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress", price: "8.99$" }
    ])
    return (
        <>

            <blockquote class="text-2xl font-semibold italic text-center text-slate-900">

                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span class="relative text-white">Prince Tea</span>
                </span>
            </blockquote>
            <ul role="list" class="p-6 divide-y divide-slate-200">
                {menu.map((items) => {
                    return (
                        <li class="flex py-4 first:pt-0 last:pb-0">
                            <img class="h-20 w-20 rounded-full" src={items.img} alt="" />
                            <div class="ml-3 overflow-hidden">
                                <p class="text-lg font-medium text-slate-900">{items.name}</p>
                                <p class="text-md text-slate-500 truncate">{items.type}</p>
                                <p class="text-sm text-slate-500 truncate">{items.price}</p>

                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default ChickFilA;
