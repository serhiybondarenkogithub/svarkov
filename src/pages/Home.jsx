import React from "react";
import { Container } from "@mui/material";
import MainCarousel from "../sections/MainCarousel/MainCarousel";
import Greeting from "../sections/Greeting/Greeting";
import MainForm from "../sections/MainForm/MainForm";
import Separator from "../sections/Separator/Separator";
import GalleryList from "../sections/GalleryList/GalleryList";
import AboutUs from "../sections/AboutUs/AboutUs";
import Manufacture from "../sections/Manufacture/Manufacture";
import ContactUs from "../sections/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Container component="main" sx={{mt:"94px", mb:"24px"}}>
        <MainCarousel />
      </Container>

      <Separator backgroundColor={"rgba(0, 0, 0, 0.8)"} color={"secondary"} >
        СВАРКОВ - Сталевий Партнер Вашого Успіху!
      </Separator>

      <Greeting />

      <Separator backgroundColor={"white"} color={"rgba(0, 0, 0, 0.8)"} border={"3px solid rgba(0, 0, 0, 0.8)"} borderRadius={"8px"} >
        Обговорити деталі вашого проекту
      </Separator>

      <MainForm />

      <Separator backgroundColor={"rgba(0, 0, 0, 0.8)"} color={"secondary"} >
        Каталог
      </Separator>

      <GalleryList />

      <Separator backgroundColor={"rgba(0, 0, 0, 0.8)"} color={"secondary"} >
        Про нас
      </Separator>

      <AboutUs />

      <Separator backgroundColor={"rgba(0, 0, 0, 0.8)"} color={"secondary"} >
        Виробництво
      </Separator>

      <Manufacture />

      <Separator backgroundColor={"rgba(0, 0, 0, 0.8)"} color={"secondary"} >
        Контакти
      </Separator>

      <ContactUs />
    </>
  );
}