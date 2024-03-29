var GroceryList = (props) => {
    return (
      <ul>
        {props.groceryItems.map((groceryItem) => <GroceryListItem key={groceryItem} groceryItem={groceryItem} />)}
      </ul>
    );
}

class GroceryListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        done: false
      };
    }
  
    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }
  
    render() {
      var style = {
        fontWeight: this.state.done ? 'bold' : 'none'
      };
  
      return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
      );
    }
  }

var groceryList = ['Cucumbers', 'Kale'];
ReactDOM.render(<GroceryList groceryItems={groceryList}/>, document.getElementById('app'));
