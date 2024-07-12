
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationSize() {
  return (
    
    <Stack spacing={2}  >
      
    <Pagination count={5} className=' hidden  md:flex md:justify-center md:pt-[24px] ' />
      
    </Stack>
  );
}

