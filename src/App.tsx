import { useState, useEffect, ChangeEvent } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import { getData } from './utils/getData'
import './App.css'

export type Monster = {
	id: string
	name: string
	email: string
}

function App() {
	const [monsters, setMonsters] = useState<Monster[]>([])
	const [searchField, setSearchField] = useState('')
	const [filteredMonsters, setFilteredMonsters] = useState(monsters)

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			)
			setMonsters(users)
		}

		fetchUsers()
	}, [])

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField)
		})

		setFilteredMonsters(newFilteredMonsters)
	}, [monsters, searchField])

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchField(searchFieldString)
	}

	return (
		<div className='App'>
			<h1> Monsters Rolodex </h1>
			<SearchBox
				placeholder='Search Monsters!'
				onChangeHandler={onSearchChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	)
}

export default App
