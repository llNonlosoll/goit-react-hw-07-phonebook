import { Dna } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

// Loader
export function Loader() {
  return (
    <LoaderContainer>
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderContainer>
  );
}
