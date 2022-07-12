//styles
import styles from "./SearchParams.module.css";
// components
import Results from "../Results/Results";
import SearchForm from "../SearchForm/SearchForm";


const SearchParams: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <SearchForm />
      <Results />
    </div>
  );
};

export default SearchParams;
