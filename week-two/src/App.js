
import './App.css';
// import DatingProfile from './DatingProfile';
import GroceryShop from './GroceryShop';
// import Instagram from './Instagram';

function App() {
  return (
    <div>
    {/* <div>
      <Instagram blog="Blog about Canada" posts="100 posts" followers="100 followers" following="100 following" />
      <Instagram blog="Blog about USA" posts="200 posts" followers="200 followers" following="200 following"/>
      <Instagram blog="Blog about England" posts="300 posts" followers="300 followers" following="300 following" />
    </div> */}
    
      {/* <div>
        <DatingProfile picture="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60" candidateName="Ben" age="32 years old" description="looking for an adventure" />
        <DatingProfile picture="https://images.unsplash.com/photo-1581599129568-e33151627628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60" candidateName="Steve" age="23 years old" description="searching for a soulmate" />
        <DatingProfile picture="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" candidateName="Bob" age="45 years old" description="Tired of loneliness" />
        
      </div> */}

      <div>
        <GroceryShop image="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" title="Bio Products" price="$15" description="Bio and healthy" />
        <GroceryShop image="https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60" title="Freshy Veggies" price="$20" description="Greeny and Healthy" />
        <GroceryShop image="https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60" title="Farm Cucumber" price="$17" description="Freshly grabbed from the garden" />
      </div>
      </div>
  );
}

export default App;
