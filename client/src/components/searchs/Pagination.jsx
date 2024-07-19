
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationSize = ({ page, count, onPageChange }) => {
  return (
    
    <Stack spacing={2}>
    <Pagination
      count={count}
      page={page}
      onChange={onPageChange}
      className='hidden md:flex md:justify-center md:pt-[24px]'
    />
  </Stack>
  );
}

export default PaginationSize