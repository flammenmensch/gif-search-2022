import { Input } from '@sintez/react';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

interface Props {
  onSearch?: (query: string) => void;
}

const SearchForm = (props: Props) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (props.onSearch) {
      props.onSearch(query);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        type="text"
        label="Search query"
        hint="e.g. kittens"
        onChange={handleChange}
        value={query}
      />
    </form>
  );
};

export default SearchForm;
