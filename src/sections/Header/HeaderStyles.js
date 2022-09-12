import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(Box)(() => ({
    "& .appBar": {
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    }
}));

export default StyledHeader;