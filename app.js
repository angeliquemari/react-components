var GroceryListItem = (props) => {
    return <li>{props.groceryItem}</li>;
}

var GroceryList = () => {
    const groceryItems = ['Cucumbers', 'Kale'];
    return (
      <ul>
        {groceryItems.map((groceryItem) => <GroceryListItem key={groceryItem} groceryItem={groceryItem} />)}
      </ul>
    );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
