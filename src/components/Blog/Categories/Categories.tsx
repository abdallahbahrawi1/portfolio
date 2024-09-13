import './Categories.css'


interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}


const Categories = ({ selectedCategory, setSelectedCategory }: CategoriesProps) => {
  const categories = ['all', 'fullstack', 'cloud Computing', 'projects', 'career'];

  return (
    <div className="categories">
      {categories.map((categorie) => (
        <div
          key={categorie}
          className={`category ${selectedCategory === categorie ? 'active' : ''}`}
          onClick={() => setSelectedCategory(categorie)}  
        >
          {categorie.charAt(0).toUpperCase() + categorie.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default Categories;
