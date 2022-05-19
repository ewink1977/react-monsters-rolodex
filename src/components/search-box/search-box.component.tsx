import './search-box.styles.css'
import { ChangeEventHandler } from 'react'

type SearchBoxProps = {
	placeholder?: string
	onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => (
	<input
		className='search'
		type='search'
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
)

export default SearchBox
