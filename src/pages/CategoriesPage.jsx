import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actualCategories = [
          {
            id: "1",
            name: "Alternative",
            subcategories: ["Indie", "Grunge", "Punk", "Folk"],
            color: "bg-[rgb(15,0,96)]",
          },
          {
            id: "2",
            name: "Blues",
            subcategories: [
              "Delta Blues",
              "Chicago Blues",
              "Jump Blues",
              "Swamp Blues",
            ],
            color: "bg-[rgb(229,64,40)]",
          },
          {
            id: "3",
            name: "Classical",
            subcategories: [
              "Baroque",
              "Romantic",
              "Contemporary",
              "Chamber Music",
            ],
            color: "bg-[rgb(241,141,5)]",
          },
          {
            id: "4",
            name: "Country",
            subcategories: [
              "Honky Tonk",
              "Bluegrass",
              "Outlaw Country",
              "Country Pop",
            ],
            color: "bg-[rgb(242,188,6)]",
          },
          {
            id: "5",
            name: "Dance",
            subcategories: [
              "Electronic Dance Music",
              "House",
              "Techno",
              "Trance",
            ],
            color: "bg-[rgb(94,177,28)]",
          },
          {
            id: "6",
            name: "Electronic",
            subcategories: ["Ambient", "Dubstep", "Synthwave", "Drum and Bass"],
            color: "bg-[rgb(58,118,52)]",
          },
          {
            id: "7",
            name: "Fitness & Workout",
            subcategories: ["Cardio", "Strength Training", "Yoga", "HIIT"],
            color: "bg-[rgb(10,190,190)]",
          },
          {
            id: "8",
            name: "Hip-Hop/Rap",
            subcategories: [
              "Old School",
              "Trap",
              "Gangsta Rap",
              "Conscious Rap",
            ],
            color: "bg-[rgb(0,161,203)]",
          },
          {
            id: "9",
            name: "Industrial",
            subcategories: ["EBM", "Industrial Metal", "Darkwave", "Aggrotech"],
            color: "bg-[rgb(17,87,147)]",
          },
        ];

        setCategories(actualCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <div key={category.id} className="m-2">
          <div
            className={`w-325 h-54 p-4 border rounded-md text-left cursor-pointer ${category.color} text-white font-poppins`}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </div>
          {selectedCategory === category.id && (
            <div className="ml-2 mt-2 text-black">
              {category.subcategories.map((subcategory, index) => (
                <div key={index}>{subcategory}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
