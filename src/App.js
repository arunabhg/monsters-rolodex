import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	const [title, setTitle] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		setFilteredMonsters(
			monsters.filter((monster) =>
				monster.name.toLowerCase().includes(searchField)
			)
		);
	}, [monsters, searchField]);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	const onTitleChange = (e) => {
		const searchFieldString = e.target.value.toLowerCase();
		setTitle(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">{title}</h1>
			<SearchBox
				className="title-search-box"
				placeholder="enter title"
				onChangeHandler={onTitleChange}
			/>
			<br />
			<SearchBox
				className="monster-search-box"
				placeholder="search monsters"
				onChangeHandler={onSearchChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: ""
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (e) => {
// 		const searchField = e.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter((monster) =>
// 			monster.name.toLowerCase().includes(searchField)
// 		);

// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Monsters Rolodex</h1>
// 				<SearchBox
// 					className="monster-search-box"
// 					placeholder="search monsters"
// 					onChangeHandler={onSearchChange}
// 				/>
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;

