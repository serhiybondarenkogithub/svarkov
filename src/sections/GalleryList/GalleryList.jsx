import * as React from 'react';
import { Container, Grid } from '@mui/material';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { useState, useEffect } from 'react';


const GalleryList = () => {
	const[data, setData] = useState([]);
	const[isLoading, setIsLoading] = useState(true);
	const[error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("/data/galleryListData.json")
		.then(response => response.json())
		.then(data => {
				setData(data);
				setIsLoading(false);
				console.log(data);
			})
		.catch((err) => setError(err));
	}, []);
	
	if(isLoading) return "Loading...";

	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <Container sx={{ mt: "24px" }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
				{data.map((item) => (
					<Grid key={item.id} item xs={12} sm={6} md={3}>
						<GalleryCard data={item} />
					</Grid>
				))}
      </Grid>
    </Container>
  );
}

export default GalleryList;