import { Grid, ImageList, ImageListItem, Container, Typography } from "@mui/material";

const Greeting = () => {
	return (
		<Container sx={{mt:"24px", mb:"24px"}}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<ImageList
						// variant="quilted"
						cols={2}
					>
						{itemData.map((item) => (
							<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
								<img
									src={item.img}
									alt={item.title}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography sx={{pt:"1rem"}}>
						Команда професіоналів СВАРКОВ – виробник якісних металоконструкцій для приватного та промислового будівництва вже понад 10 років у Києві та Київській області, а також здійснюємо доставку готової продукції по всій Україні. Ми виготовляємо:
					</Typography>
					<ul>
						<Typography component={"li"} sx={{mb:"1rem"}}>
							зварні каркаси та кронштейни, підпірні балки та колони, заставні деталі
						</Typography>
						<Typography component={"li"} sx={{mb:"1rem"}}>
							металеві каркаси МАФів (ангари, навіси, автопаркування)
						</Typography>
						<Typography component={"li"} sx={{mb:"1rem"}}>
							зварні конструкції внутрішніх та пожежних сходів, пандусів, огорожі
						</Typography>
						<Typography component={"li"} sx={{mb:"1rem"}}>
							сходи на другий поверх, ковані огорожі та грати
						</Typography>
						<Typography component={"li"} sx={{mb:"1rem"}}>
							ковані вироби власного виробництва
						</Typography>
					</ul>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Greeting;

const itemData = [
  {
    img: 'imgs/main_page/main_1.jpg',
    title: 'Сходи',
    rows: 2,
    cols: 2,
  },
  {
    img: 'imgs/main_page/main_2.jpg',
    title: 'Навіс',
  },
  {
    img: 'imgs/main_page/main_3.jpg',
    title: 'Кріплення',
  }
];