import React from 'react';

const MobileCategories = ({categories}) => {
    return(
        <div className="categoriesMobile">
            <h1>Sélectionner votre catégories</h1>
            {categories && (
                <div>
                {categories.map(category => (
                  <p className={category.id} key={category.id}>{category.title}</p>
                ))}
                </div>
            )}
        </div>
    )
};


export default MobileCategories;